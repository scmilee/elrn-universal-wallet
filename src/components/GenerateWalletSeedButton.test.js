import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as WalletSeedPackage from './GenerateWalletSeedButton.js'
jest.mock('../elrn-config/elrn.js');

const WalletSeedButton = WalletSeedPackage.GenerateWalletSeedButton;


describe('GenerateWalletSeedButton.js', function(){
	let mountedButton, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedButton = shallow(<WalletSeedButton handleGenerateWalletSeedButton={mockFunc}/>);
	});
	//make sure it can be loaded in
	it('renders without crashing', () => {
		mountedButton;
	});

	it('doesn\'t call the handler by itself', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('calls its prop function when clicked', () => {	
		mountedButton.find('button').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});