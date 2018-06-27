import React from 'react'
import { shallow } from 'enzyme'
import * as LoginPackage from './Login.js'

jest.mock('../elrn-config/elrn.js');
const Login =LoginPackage.Login;
let mockFunc = jest.fn();

describe('Login.js', function(){
	//make sure it can be loaded in
	let mountedLogin, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedLogin = shallow(<Login onClick={mockFunc}/>);
	});
	it('renders without crashing', () => {
		mountedLogin;
	});

	it('calls its prop function when clicked', () => {
		mountedLogin.find('button').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});