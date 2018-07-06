import React from 'react'
import { shallow } from 'enzyme'
import * as SecretPhrasePackage from './SecretPhrase.js'
import Mnemonic from './Mnemonic'
import MnemonicForm from './MnemonicForm'
import GenerateWalletSeedButton from './GenerateWalletSeedButton'


jest.mock('../elrn-config/elrn.js');
jest.mock('./Mnemonic');
jest.mock('./MnemonicForm');
jest.mock('./GenerateWalletSeedButton');

const SecretPhrase = SecretPhrasePackage.SecretPhrase;

describe('SecretPhrase.js', function(){
	//make sure it can be loaded in
	let mountedSecretPhrase;

	beforeEach(() => {
		mountedSecretPhrase = shallow(<SecretPhrase/>);
	});
	it('renders without crashing', () => {
		mountedSecretPhrase;
	});

	it('renders a Mnemonic component', () => {
		expect(mountedSecretPhrase.find(Mnemonic)).toHaveLength(1);
	});
	it('renders a MnemonicForm component', () => {
		expect(mountedSecretPhrase.find(MnemonicForm)).toHaveLength(1);
	});
	it('renders a GenerateWalletSeedButton component', () => {
		expect(mountedSecretPhrase.find(GenerateWalletSeedButton)).toHaveLength(1);
	});
});