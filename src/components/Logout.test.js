import React from 'react'
import { shallow, mount } from 'enzyme'
import * as LogoutPackage from './Logout.js'
import Home from './Home'

jest.mock('../elrn-config/elrn.js');
jest.mock('./Home');

const store = {
	user: {
		isAuthenticated: true
	}
}
const Logout = LogoutPackage.Logout;
let mockFunc = jest.fn();

describe('Logout.js', function(){
	//make sure it can be loaded in
	let mountedLogout, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedLogout = shallow(<Logout user={store.user} handleLogout={mockFunc}/>);
	});
	it('renders without crashing', () => {
		mountedLogout;
	});

	it('calls handleLogout if the users\'s Authenticated', () => {
		expect(mockFunc).toHaveBeenCalled();
	});
	it('doesn\'t call handleLogout if the user isn\'t Authenticated', () => {
		mountedLogout.unmount();
		mockFunc = jest.fn();
		store.user.isAuthenticated = false;
		mountedLogout = shallow(<Logout user={store.user} handleLogout={mockFunc}/>);
		expect(mockFunc).not.toHaveBeenCalled();
	});
	it('renders the Home component no matter what', () => {
		expect(mountedLogout.find(Home)).toHaveLength(1);
	});
	
});