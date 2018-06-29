import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftToPackage from './ShapeShiftTo.js'
import ShapeShiftToSymbol from './ShapeShiftToSymbol.js'
import ShapeShiftReturnAddressForm from './ShapeShiftReturnAddressForm.js'
import Coin from './Coin'

jest.mock('./ShapeShiftToSymbol.js');
jest.mock('./ShapeShiftReturnAddressForm.js');
jest.mock('../elrn-config/elrn.js');

let btc = {
	name: 'btc'
}
const shapeShiftState = { 
  coins: [btc]
}

const ShapeShiftTo = ShapeShiftToPackage.ShapeShiftTo;

describe('ShapeShiftTo.js', function(){
	//make sure it can be loaded in

	let mountedShapeShiftTo, mockFunc; 

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedShapeShiftTo = shallow(<ShapeShiftTo  handleButtonPush={mockFunc} shapeShift={shapeShiftState}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftTo;
	});

	it('spawns a ShapeShiftToSymbol component', () => {
		expect(mountedShapeShiftTo.find(ShapeShiftToSymbol)).toHaveLength(1);
	});

	it('spawns a ShapeShiftToSymbol component', () => {
		expect(mountedShapeShiftTo.find(ShapeShiftToSymbol)).toHaveLength(1);
	});

	it('spawns a Coin component', () => {
		expect(mountedShapeShiftTo.find(Coin)).toHaveLength(1);
	});

	it('doesn\'t call its click handler on its own', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('calls it\'s click handler when a Coin component is clicked', () => {
		mountedShapeShiftTo.find(Coin).simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});