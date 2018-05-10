import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateLearnerWalletKey } from '../actions/learnerActions.js'
import { putBlockstackFile } from '../actions/fileActions.js'
import { generateWallet } from '../actions/walletActions'

class LearnerWalletForm extends Component {

    handleInputChange = (evt) => {
        const val = evt.target.value;
        this.props.updateLearnerWalletKey (val);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const walletPublicAddress = this.props.wallet.publicAddress
        const walletWIF = this.props.wallet.wif
        this.props.putBlockstackFile('learnerWalletAddress', walletPublicAddress, {encrypt: false});
        this.props.putBlockstackFile('learnerWalletWIF', walletWIF, {encrypt: true});
        console.log(walletWIF);
    }

    handleGenerateWalletButton = () => {
      this.props.generateWallet();
    }

    walletSubmit = (walletPublicAddress, walletWIF) => {
      return (
        <div>
          <p> Step 2: Review your keys and click "Submit". This will store your Keys in BlockStack (Gaia) </p>
          <textarea
              id="publicKey"
              rows="2"
              cols="70"
              onChange={this.handleInputChange}
              placeholder={walletPublicAddress}
              >
          </textarea>
          <br />
          <textarea
              id="private_key"
              rows="2"
              cols="70"
              onChange={this.handleInputChange}
              placeholder={walletWIF}
              >
          </textarea>
          <form onSubmit={this.handleSubmit} id="learner_wallet_public_address_form" >
              <input id="learner_wallet_public_address_form_input"
                  type="submit"
                  form="learner_wallet_public_address_form"
              / >
          </form>
          <p>Step 3: Use the File Retreiver below to retrieve your keys from Blockstack</p>
          <p>Wallet address file path: learnerWalletAddress</p>
          <p>Wallet WIF file path: learnerWalletWIF</p>
        </div>
      )
    }

    render() {
         const { wallet } = this.props
         const walletAddress = (wallet) ? wallet.walletAddress: '';
         const walletWIF = (wallet ? wallet.wif : '')
         return (
            <div>
            <button onClick={() => this.handleGenerateWalletButton()}>Generate Wallet</button>
            <br />
            <div className="submitInformation">
              {
                (wallet)
                ?
                this.walletSubmit(walletAddress, walletWIF)
                : <p> Step 2: Perform Step 1 </p>
              }
            </div>



            {/* <textarea
                id="publicKey"
                rows="2"
                cols="70"
                onChange={this.handleInputChange}
                placeholder={publicKey}
                >
            </textarea>
            <br />
            <textarea
                id="private_key"
                rows="2"
                cols="70"
                onChange={this.handleInputChange}
                placeholder={privateKey}
                >
            </textarea>
            <form onSubmit={this.handleSubmit} id="learner_public_key_form" >
                <input id="learner_public_key_form_input"
                    type="submit"
                    form="learner_public_key_form"
                / >
            </form> */}

            </div>
        );
    }
}

export default connect(
    (state) => ({ keypair: state.learner.keypair }),
    { updateLearnerWalletKey, putBlockstackFile, generateWallet}
)(LearnerWalletForm);
