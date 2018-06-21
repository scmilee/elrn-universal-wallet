import React from 'react'
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import Elrn from '../elrn-config/elrn.js'
import Authenticated from './Authenticated'
import Public from './Public'
import * as AppPackage from './App'
jest.mock('../elrn-config/elrn.js');
jest.mock('./Public' );
jest.mock('react-router-dom');
jest.mock('./Authenticated');

//testing just the app, not the connections to redux as well
const App = AppPackage.App;
//mock store for testing
const store = {
	user: {
		isAuthenticated: true
	}
}

describe('App.js', function(){

	it('renders without crashing', () => {
	  	renderer.create(<App user={store.user} />);
	});

	//testing if the authenticated pathway is hit, by checking the 
	//pending props of the first element on the page
	it('renders Secret Component if user is authenticated', () => {
		const root = renderer.create(<App user={store.user} />).root;
		expect(root.children[0].children[0]._fiber.pendingProps.name).toEqual('auth-home');
	});

	//testing if the public pathway is hit, by checking the 
	//pending props of the first element on the page
	it('renders public component if the user is not authenticated', () => {
		store.user.isAuthenticated = false;
		const root = renderer.create(<App user={store.user} />).root;
		expect(root.children[0].children[0]._fiber.pendingProps.name).toEqual('home');
	});

});