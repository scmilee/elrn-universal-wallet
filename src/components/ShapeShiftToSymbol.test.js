import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftToSymbolPackage from './ShapeShiftToSymbol.js'

jest.mock('../elrn-config/elrn.js');

const ShapeShiftToSymbol = ShapeShiftToSymbolPackage.ShapeShiftToSymbol;
let symbolPayload = 'btc';

describe('ShapeShiftToSymbol.js', function(){
	//make sure it can be loaded in
	let mountedShapeShiftToSymbol;

	beforeEach(() => {
		mountedShapeShiftToSymbol = shallow(<ShapeShiftToSymbol  shapeShiftToSymbol={symbolPayload}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftToSymbol;
	});

	it('correctly displays its prop ShapeShiftToSymbol', () => {
		expect(mountedShapeShiftToSymbol.text()).toEqual(symbolPayload);
	});

});