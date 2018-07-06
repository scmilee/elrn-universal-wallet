import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeshiftReturnAddressPackage from './ShapeshiftReturnAddress.js'

jest.mock('../elrn-config/elrn.js');

const ShapeshiftReturnAddress = ShapeshiftReturnAddressPackage.ShapeshiftReturnAddress;
let mnemonicPayload = 'addressTest';

describe('ShapeshiftReturnAddress.js', function(){
	//make sure it can be loaded in
	let mountedShapeshiftReturnAddress;

	beforeEach(() => {
		mountedShapeshiftReturnAddress = shallow(<ShapeshiftReturnAddress  returnAddress={mnemonicPayload}/>);
	});
	it('renders without crashing', () => {
		mountedShapeshiftReturnAddress;
	});

	it('correctly displays its prop ShapeshiftReturnAddress', () => {
		expect(mountedShapeshiftReturnAddress.text()).toContain(mnemonicPayload);
	});

});