import React from 'react'
import { shallow } from 'enzyme'
import * as MnemonicFormPackage from './MnemonicForm.js'
import SaveMnemonicButton from './SaveMnemonicButton'

jest.mock('./SaveMnemonicButton');
jest.mock('../styles.js');
jest.mock('../elrn-config/elrn.js');

const MnemonicForm = MnemonicFormPackage.MnemonicForm;
let mockFunc = jest.fn();
let mnemonicPayload = 'testmnemonic';

describe('MnemonicForm.js', function(){
	//make sure it can be loaded in
	let mountedMnemonicForm, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedMnemonicForm = shallow(<MnemonicForm handleInputChange={mockFunc} mnemonic={mnemonicPayload}/>);
	});
	it('renders without crashing', () => {
		mountedMnemonicForm;
	});

	it('correctly displays its prop Mnemonic inside a textarea as a placeholder', () => {
		expect(mountedMnemonicForm.find({placeholder: mnemonicPayload})).toHaveLength(1);
	});

	it('doesn\'t handle input change when no input has been given', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('handles user input when it recieves change to the textarea', () => {
		mountedMnemonicForm.find('textarea').simulate('change')
		expect(mockFunc).toHaveBeenCalled();
	});

	it('renders a SaveMnemonicButton component no matter what', () => {
		expect(mountedMnemonicForm.find(SaveMnemonicButton)).toHaveLength(1);
	});

});