import React from 'react'
import { shallow } from 'enzyme'
import Home from './Home.js'
jest.mock('../elrn-config/elrn.js');

describe('HandleLogin', function(){
	it('renders without crashing', () =>{
		let mountedHome = shallow(<Home/>)
	});
	
});
	

	