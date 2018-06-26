import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import * as AuthenticatedPackage from './Authenticated.js'
import { shallow, mount } from 'enzyme'
//mock out shapeshift / blockstack depenencies
jest.mock('../elrn-config/elrn.js');

const Authenticated = AuthenticatedPackage.Authenticated; 
function Foo() {
	return (<div id= 'foo'/>);
}
let store = {
	user:{
		isAuthenticated: true
	}
}

describe('Authenticated.js', function(){
	//make sure it can be loaded in
	it('renders without crashing', () => {
	  	const auth = shallow(
		  	<MemoryRouter initialEntries={['/']} initialIndex={0}>
		  		<Authenticated user={store.user} component = {Foo}/>
		  	</MemoryRouter>
	  	);
	});
	it('loads the Secret Foo component if the user is Authenticated', function(){

		const mountedComponent = mount(
			<MemoryRouter initialEntries={['/']} initialIndex={0}>
		  		<Authenticated user={store.user} component = {Foo}/>
		  	</MemoryRouter>
	  	);
	  	expect(mountedComponent.find('#foo')).toHaveLength(1);
	  	mountedComponent.unmount();

	});
	it('redirects to logout if the user isn\'t Authenticated', function(){
		store.user.isAuthenticated = false;
		const mountedComponent = mount(
			<MemoryRouter initialEntries={['/']} initialIndex={0}>
		  		<Authenticated user={store.user} component = {Foo}/>
		  	</MemoryRouter>
	  	);
	  	expect(mountedComponent.find('#foo')).toHaveLength(0);
	  	mountedComponent.unmount();
	});

});