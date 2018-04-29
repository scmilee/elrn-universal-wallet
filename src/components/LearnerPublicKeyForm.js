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
        //alert(JSON.stringify(this.props.keypair.publicKey))
        this.props.putBlockstackFile('learnerPublicKey', publicKey, {encrypt: false});
        this.props.putBlockstackFile('learnerPrivateKey', privateKey, {encrypt: true});
        console.log(privateKey);
    }

    handleGenerateKeypairButton = () => {
      this.props.generateKeypair();
    }

    render() {
         const { keypair } = this.props
         const publicKey = (keypair) ? keypair.publicKey: '';
         const privateKey = (keypair ? keypair.privateKey : '')
         return (
            <div>
            <button onClick={() => this.handleGenerateKeypairButton()}>GenerateKeypair</button>
                <form onSubmit={this.handleSubmit} id="learner_public_key_form" >
                    <input id="learner_public_key_form_input"
                        type="submit"
                        form="learner_public_key_form"
                    / >
                </form>
            <textarea
                id="publicKey"
                rows="10"
                cols="70"
                onChange={this.handleInputChange}
                placeholder={publicKey}
                >
            </textarea>
            <br></br>
            <textarea
                id="private_key"
                rows="10"
                cols="70"
                onChange={this.handleInputChange}
                placeholder={privateKey}
                >
            </textarea>

            </div>
        );
    }
}

export default connect(
    (state) => ({ keypair: state.learner.keypair }),
    { updateLearnerPublicKey, putBlockstackFile, generateKeypair}
)(LearnerPublicKeyForm);
