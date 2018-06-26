import React from 'react'
import { shallow, mount, render } from 'enzyme'
import Coin from './Coin.js'

let mockFunc = jest.fn();

describe('Coin.js', function(){
	//make sure it can be loaded in
	let mountedCoin, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedCoin = shallow(<Coin onClick={mockFunc}/>);
	});
	it('renders without crashing', () => {
		mountedCoin;
	});

	it('calls its prop function when clicked', () => {
		mountedCoin.find('button').simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});