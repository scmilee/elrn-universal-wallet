import React from 'react'
import WithdrawalAddress from './WithdrawalAddress'
import ApproveShiftButton from './ApproveShiftButton'
import ShapeShiftFromSymbol from './ShapeShiftFromSymbol'
import ShapeShiftToSymbol from './ShapeShiftToSymbol'
import ShapeshiftReturnAddress from './ShapeshiftReturnAddress'
import ShapeShiftAmountForm from './ShapeShiftAmountForm'
import { shallow } from 'enzyme'
import * as ShapeShiftApproveShiftPackage from './ShapeShiftApproveShift.js'

jest.mock('../styles.js');
jest.mock('../elrn-config/elrn.js');
jest.mock('./WithdrawalAddress');
jest.mock('./ShapeshiftReturnAddress');
jest.mock('./ApproveShiftButton');
jest.mock('./ShapeShiftToSymbol');
jest.mock('./ShapeShiftFromSymbol');
jest.mock('./ShapeShiftAmountForm');

const ShapeShiftApproveShift = ShapeShiftApproveShiftPackage.ApproveShift;

describe('ShapeShiftApproveShift.js ',()=>{
	let mountedShiftApprove;
	beforeEach(() => {
		mountedShiftApprove = shallow(<ShapeShiftApproveShift />);
	});

	it('renders a ApproveShiftButton component no matter what', () => {
		expect(mountedShiftApprove.find(ApproveShiftButton)).toHaveLength(1);
	});
	it('renders a ShapeShiftToSymbol component no matter what', () => {
		expect(mountedShiftApprove.find(ShapeShiftToSymbol)).toHaveLength(3);
	});
	it('renders a ShapeShiftFromSymbol component no matter what', () => {
		expect(mountedShiftApprove.find(ShapeShiftFromSymbol)).toHaveLength(2);
	});
	it('renders a ShapeshiftReturnAddress component no matter what', () => {
		expect(mountedShiftApprove.find(ShapeshiftReturnAddress)).toHaveLength(1);
	});
	it('renders a ShapeShiftAmountForm component no matter what', () => {
		expect(mountedShiftApprove.find(ShapeShiftAmountForm)).toHaveLength(1);
	});
	it('renders a WithdrawalAddress component no matter what', () => {
		expect(mountedShiftApprove.find(WithdrawalAddress)).toHaveLength(1);
	});
});