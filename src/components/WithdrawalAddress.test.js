import React from 'react'
import { shallow } from 'enzyme'
import * as WithdrawalAddressPackage from './WithdrawalAddress.js'

jest.mock('../elrn-config/elrn.js');

const WithdrawalAddress = WithdrawalAddressPackage.WithdrawalAddress;
let addressPayload = 'testAddy';

describe('WithdrawalAddress.js', function(){
	//make sure it can be loaded in
	let mountedWithdrawalAddress;

	beforeEach(() => {
		mountedWithdrawalAddress = shallow(<WithdrawalAddress  address={addressPayload}/>);
	});
	it('renders without crashing', () => {
		mountedWithdrawalAddress;
	});

	it('correctly displays its prop WithdrawalAddress', () => {
		expect(mountedWithdrawalAddress.text()).toContain(addressPayload);
	});

});