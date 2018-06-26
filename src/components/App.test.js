import React from 'react'
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
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
//checks the props of all children of app looking at the specific prop thats passed in 
//and comparing values to the expected propvalue
function childrenChecker(children, Prop, propValue) {
	for (var i = 0; i < children.length; i++) {
		if (children[i]._fiber.pendingProps[arguments[1]] === propValue) {
			return true;
		}
	}
	return false;
}
//preface these tests by saying that I couldn't get enzymes api to work with finding mocked
//child components so i had to build by own child finder

describe('App.js', function(){
	//make sure it can be loaded in
	it('renders without crashing', () => {
	  	renderer.create(<App user={store.user} />);
	});
	//testing if the authenticated pathway is hit, by checking the 
	//pending props of the first element on the page
	it('renders Secret Component if user is authenticated', () => {
		const root = renderer.create(<App user={store.user} />).root.children[0];
		let childMatch = childrenChecker(root.children, 'name', 'auth-home');
		expect(childMatch).toBe(true);
		//make sure the public home component isn't created
		childMatch = childrenChecker(root.children, 'name', 'home');
		expect(childMatch).toBe(false);
	});
	//testing if the public pathway is hit, by checking the 
	//pending props of the first element on the page
	it('renders public component if the user is not authenticated', () => {
		store.user.isAuthenticated = false;
		const root = renderer.create(<App user={store.user} />).root.children[0];
		let childMatch = childrenChecker(root.children, 'name', 'home');
		expect(childMatch).toBe(true);
		//make sure authorized component isn't spawned
		childMatch = childrenChecker(root.children, 'name', 'auth-home');
		expect(childMatch).toBe(false);
	});
	//check for a logout path
	it('renders logout Component', () => {
		const root = renderer.create(<App user={store.user} />).root.children[0];
		let childMatch = childrenChecker(root.children, 'path', '/logout');
		expect(childMatch).toBe(true);
	});
	//check for a login path
	it('renders login Component', () => {
		const root = renderer.create(<App user={store.user} />).root.children[0];
		let childMatch = childrenChecker(root.children, 'path', '/login');
		expect(childMatch).toBe(true);
	});
	//check for a handle-login path name
	it('renders Logout Component', () => {
		const root = renderer.create(<App user={store.user} />).root.children[0];
		let childMatch = childrenChecker(root.children, 'name', 'handle-login');
		expect(childMatch).toBe(true);
	});

});