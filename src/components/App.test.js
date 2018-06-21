import React from 'react'
import renderer from 'react-test-renderer';
import TestUtils from 'react-dom/test-utils';
import Elrn from '../elrn-config/elrn.js'
import * as AuthPackage from './Authenticated'
import Public from './Public'
import * as AppPackage from './App'
jest.mock('../elrn-config/elrn.js');
jest.mock('./Public' );
jest.mock('react-router-dom');
jest.mock('./Authenticated');
const auth= AuthPackage.Authenticated
const App = AppPackage.App;

const store = {
	user: {
		isAuthenticated: true
	}
}
function appRender() {
	const div = document.createElement('div');
	const component = renderer.create(<App user={store.user} />, div);
	return component;
}



it('renders without crashing', () => {
  	appRender();
});

it('renders Secret Component if user is authenticated', () => {
	const wrapper = TestUtils.renderIntoDocument(
		<App user={store.user}></App>
	);
	const realChild = TestUtils.findRenderedComponentWithType(wrapper, auth)
	expect(realChild).toBeTruthy();
	//expect(Authenticated).toHaveBeenCalled();
	//expect()
});

it('does not render Secret Component if user is authenticated', () => {
	const component = appRender();
	//expect(Authenticated).toBeFalsy;
});