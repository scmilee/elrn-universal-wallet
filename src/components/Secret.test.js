import React from 'react'
import { shallow } from 'enzyme'
import * as SecretPackage from './Secret.js'
import SwipeWallet from './SwipeWallet'

jest.mock('../elrn-config/elrn.js');
jest.mock('./SwipeWallet');

const store = {
	user: {
		isAuthenticated: true
	}
}
const Secret = SecretPackage.Secret;

describe('Secret.js', function(){
	//make sure it can be loaded in
	let mountedSecret;

	beforeEach(() => {
		mountedSecret = shallow(<Secret user={store.user}/>);
	});
	it('renders without crashing', () => {
		mountedSecret;
	});

	it('spawns a SwipeWallet component if the users\'s Authenticated', () => {
		expect(mountedSecret.find(SwipeWallet)).toHaveLength(1);
	});

	it('doesn\'t spawn a SwipeWallet if the user isn\'t Authenticated', () => {
		mountedSecret.unmount();
		store.user.isAuthenticated = false;
		mountedSecret = shallow(<Secret user={store.user}/>);
		expect(mountedSecret.find(SwipeWallet)).toHaveLength(0);

	});
	
});