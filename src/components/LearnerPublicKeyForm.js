import React, {Component} from 'react';
import {connect} from 'react-redux';
import { updateLearnerPublicKey } from '../actions/learnerActions.js'
import { putBlockstackFile } from '../actions/fileActions.js'
import { generateKeypair } from '../actions/keypairActions'

class LearnerPublicKeyForm extends Component {

    handleInputChange = (evt) => {
        const val = evt.target.value;
        this.props.updateLearnerPublicKey(val);
    }

    handleSubmit = (evt) => {
        evt.preventDefault();
        const publicKey = this.props.keypair.publicKey
        const privateKey = this.props.keypair.privateKey
        this.props.putBlockstackFile('learnerPublicKey', publicKey, {encrypt: false});
        this.props.putBlockstackFile('learnerPrivateKey', privateKey, {encrypt: true});
        console.log(privateKey);
    }

    handleGenerateKeypairButton = () => {
      this.props.generateKeypair();
    }

    keypairSubmit = (publicKey, privateKey) => {
      return (
        <div>
          <p> Step 2: Review your keys and click "Submit". This will store your Keys in BlockStack (Gaia) </p>
          <textarea
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
          </form>
          <p>Step 3: Use the File Retreiver below to retrieve your keys from Blockstack</p>
          <p>Private Key file path: learnerPrivateKey</p>
          <p>Public Key file path: learnerPublicKey</p>
        </div>
      )
    }

    render() {
         const { keypair } = this.props
         const publicKey = (keypair) ? keypair.publicKey: '';
         const privateKey = (keypair ? keypair.privateKey : '')
         return (
            <div>
              <button onClick={() => this.handleGenerateKeypairButton()}>GenerateKeypair</button>
              <br />
              <div className="submitInformation">
                {
                  (keypair)
                  ?
                  this.keypairSubmit(publicKey, privateKey)
                  : <br></br>
                }
              </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({ keypair: state.learner.keypair }),
    { updateLearnerPublicKey, putBlockstackFile, generateKeypair, }
)(LearnerPublicKeyForm);
