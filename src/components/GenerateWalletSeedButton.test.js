import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as WalletSeedPackage from './GenerateWalletSeedButton.js'
jest.mock('../elrn-config/elrn.js');

const WalletSeedButton = WalletSeedPackage.GenerateWalletSeedButton;
let mockFunc = jest.fn();

describe('GenerateWalletSeedButton.js', function(){
	//make sure it can be loaded in
	it('renders without crashing', () => {
		const mountedButton = shallow(<WalletSeedButton handleGenerateWalletSeedButton={mockFunc}/>);
	});

	it('calls its prop function when clicked', () => {	
		const mountedButton= shallow(<WalletSeedButton handleGenerateWalletSeedButton={mockFunc}/>);
		mountedButton.find('button').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});