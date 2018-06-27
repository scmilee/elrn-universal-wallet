import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import * as PublicPackage from './Public.js'
import { shallow, mount } from 'enzyme'
//mock out shapeshift / blockstack depenencies
jest.mock('../elrn-config/elrn.js');

const Public = PublicPackage.Public; 
function Foo() {
	return (<div id= 'foo'/>);
}
let store = {
	user:{
		isAuthenticated: false
	}
}

describe('Public.js', function(){
	//make sure it can be loaded in
	it('renders without crashing', () => {
	  	const auth = shallow(
		  	<MemoryRouter initialEntries={['/']} initialIndex={0}>
		  		<Public user={store.user} component = {Foo}/>
		  	</MemoryRouter>
	  	);
	});
	it('loads the Public Foo component if the user isn\'t Authenticated', function(){

		const mountedComponent = mount(
			<MemoryRouter initialEntries={['/']} initialIndex={0}>
		  		<Public user={store.user} component = {Foo}/>
		  	</MemoryRouter>
	  	);
	  	
	  	expect(mountedComponent.find('#foo')).toHaveLength(1);
	  	mountedComponent.unmount();

	});
	it('redirects to \'/\' if the user is Authenticated', function(){
		store.user.isAuthenticated = true;
		const mountedComponent = mount(
			<MemoryRouter initialEntries={['/']} initialIndex={0}>
		  		<Public user={store.user} component = {Foo}/>
		  	</MemoryRouter>
	  	);
	  	expect(mountedComponent.find('#foo')).toHaveLength(0);
	  	mountedComponent.unmount();
	});

});