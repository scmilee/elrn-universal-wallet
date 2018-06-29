import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftFromSymbolPackage from './ShapeShiftFromSymbol.js'

jest.mock('../elrn-config/elrn.js');

const ShapeShiftFromSymbol = ShapeShiftFromSymbolPackage.ShapeShiftFromSymbol;
let mnemonicPayload = 'btc';

describe('ShapeShiftFromSymbol.js', function(){
	//make sure it can be loaded in
	let mountedShapeShiftFromSymbol;

	beforeEach(() => {
		mountedShapeShiftFromSymbol = shallow(<ShapeShiftFromSymbol  shapeShiftFromSymbol={mnemonicPayload}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftFromSymbol;
	});

	it('correctly displays its prop ShapeShiftFromSymbol', () => {
		expect(mountedShapeShiftFromSymbol.text()).toEqual(mnemonicPayload);
	});

});