import React from 'react'
import {shallow } from 'enzyme'
import * as AppPackage from './App'

jest.mock('../elrn-config/elrn.js');


//testing just the app, not the connections to redux as well
const App = AppPackage.App;
//mock store for testing
const store = {
	user: {
		isAuthenticated: true
	}
}

describe('App.js', function(){
	//make sure it can be loaded in
	let rootApp;

	beforeEach(() => {
		rootApp = shallow(<App user={store.user} />);
	});

	it('renders without crashing', () => {
	  	rootApp;
	});

	it('renders Secret Component if user is authenticated', () => {	
		expect(rootApp.find({name: 'auth-home'})).toHaveLength(1);	
		//make sure the public home component isn't created
		expect(rootApp.find({name: 'home'})).toHaveLength(0);
	});
	
	it('renders public component if the user is not authenticated', () => {
		store.user.isAuthenticated = false;
		rootApp = shallow(<App user={store.user} />);
	
		expect(rootApp.find({name: 'home'})).toHaveLength(1);
		expect(rootApp.find({name: 'auth-home'})).toHaveLength(0);
	});
	//check for a logout path
	it('renders logout Component', () => {
		expect(rootApp.find({path: '/logout'})).toHaveLength(1);
	});
	//check for a login path
	it('renders login Component', () => {
		expect(rootApp.find({path: '/login'})).toHaveLength(1);
	});
	//check for a handle-login path name
	it('renders Logout Component', () => {
		expect(rootApp.find({path: '/handle-login'})).toHaveLength(1);
	});

});