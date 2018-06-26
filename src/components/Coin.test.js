import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Coin from './Coin.js'

let mockFunc = jest.fn();

describe('Coin.js', function(){
	//make sure it can be loaded in
	it('renders without crashing', () => {
		const mountedCoin = shallow(<Coin onClick={mockFunc}/>);
	});

	it('calls its prop function when clicked', () => {	
		const mountedCoin = mount(<Coin onClick={mockFunc}/>);
		mountedCoin.find('button').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});