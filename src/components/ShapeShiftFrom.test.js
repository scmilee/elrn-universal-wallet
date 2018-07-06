import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftFromPackage from './ShapeShiftFrom.js'
import ShapeShiftFromSymbol from './ShapeShiftFromSymbol.js'
import ShapeShiftReturnAddressForm from './ShapeShiftReturnAddressForm.js'
import Coin from './Coin'

jest.mock('./ShapeShiftFromSymbol.js');
jest.mock('./ShapeShiftReturnAddressForm.js');
jest.mock('../elrn-config/elrn.js');

let btc = {
	name: 'btc'
}
const shapeShiftState = { 
  coins: [btc],
  manualAddressInput: false
}

const ShapeShiftFrom = ShapeShiftFromPackage.ShapeShiftFrom;

describe('ShapeShiftFrom.js', function(){
	//make sure it can be loaded in

	let mountedShapeShiftFrom, mockFunc; 

	beforeEach(() => {
		shapeShiftState.manualAddressInput = false;
		mockFunc = jest.fn();
		mountedShapeShiftFrom = shallow(<ShapeShiftFrom  handleButtonPush={mockFunc} shapeShift={shapeShiftState}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftFrom;
	});

	it('spawns a ShapeShiftFromSymbol component', () => {
		expect(mountedShapeShiftFrom.find(ShapeShiftFromSymbol)).toHaveLength(1);
	});

	it('spawns a ShapeShiftReturnAddressForm component', () => {
		shapeShiftState.manualAddressInput = true;
		mountedShapeShiftFrom = shallow(<ShapeShiftFrom  handleButtonPush={mockFunc} shapeShift={shapeShiftState}/>);
		expect(mountedShapeShiftFrom.find(ShapeShiftReturnAddressForm)).toHaveLength(1);
	});

	it('spawns a ShapeShiftFromSymbol component', () => {
		expect(mountedShapeShiftFrom.find(ShapeShiftFromSymbol)).toHaveLength(1);
	});

	it('spawns a Coin component', () => {
		expect(mountedShapeShiftFrom.find(Coin)).toHaveLength(1);
	});

	it('doesn\'t call its click handler on its own', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('calls it\'s click handler when a Coin component is clicked', () => {
		mountedShapeShiftFrom.find(Coin).simulate('click');
		expect(mockFunc).toHaveBeenCalled();
	});
	
});