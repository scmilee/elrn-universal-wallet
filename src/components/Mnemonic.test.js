import React from 'react'
import { shallow } from 'enzyme'
import * as MnemonicPackage from './Mnemonic.js'

jest.mock('../elrn-config/elrn.js');

const Mnemonic = MnemonicPackage.Mnemonic;
let mnemonicPayload = 'testmnemonic';

describe('Mnemonic.js', function(){
	//make sure it can be loaded in
	let mountedMnemonic;

	beforeEach(() => {
		mountedMnemonic = shallow(<Mnemonic  mnemonic={mnemonicPayload}/>);
	});
	it('renders without crashing', () => {
		mountedMnemonic;
	});

	it('correctly displays its prop Mnemonic', () => {
		expect(mountedMnemonic.text()).toEqual(mnemonicPayload);
	});

});