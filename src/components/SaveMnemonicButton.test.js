import React from 'react'
import { shallow } from 'enzyme'
import * as MnemonicButtonPackage from './SaveMnemonicButton.js'
//mock out shapeshift / blockstack depenencies
jest.mock('../elrn-config/elrn.js');

let mockFunc = jest.fn();
let MnemonicButton = MnemonicButtonPackage.SaveMnemonicButton
describe('MnemonicButton.js', function(){
	//make sure it can be loaded in
	let mountedMnemonicButton, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedMnemonicButton = shallow(<MnemonicButton handleSaveMnemonicButton={mockFunc}/>);
	});

	it('renders without crashing', () => {
		mountedMnemonicButton;
	});

	it('doesn\'t call its prop function on its own', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('calls its prop function when clicked', () => {
		mountedMnemonicButton.find('button').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});
