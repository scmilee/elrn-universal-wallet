import React from 'react'
import { shallow } from 'enzyme'
import * as HandleLoginPackage from './HandleLogin.js'
jest.mock('../elrn-config/elrn.js');

let HandleLogin = HandleLoginPackage.HandleLogin;
let store = {
	user:{
		isLoginPending: true
	}
}
describe('HandleLogin', function(){
	let mountedHandleLogin, mockFunc;
	

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedHandleLogin = shallow(<HandleLogin user={store.user} handlePendingSignIn={mockFunc}/>);
	});

	it('renders without crashing', () => {
		mountedHandleLogin;
	});

	it('handles a pending login if needed', () => {
		expect(mockFunc).toHaveBeenCalled();
	});

	it('doesn\'t handle a login if there\'s no logins pending', () =>{
		mockFunc = jest.fn();
		store.user.isLoginPending = false;
		mountedHandleLogin = shallow(<HandleLogin user={store.user} handlePendingSignIn={mockFunc}/>);
		expect(mockFunc).not.toHaveBeenCalled();
	});


});