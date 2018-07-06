import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftAmountFormPackage from './ShapeShiftAmountForm.js'

jest.mock('../styles.js');
jest.mock('../elrn-config/elrn.js');

const ShapeShiftAmountForm = ShapeShiftAmountFormPackage.ShapeShiftAmountForm;
let mockFunc = jest.fn();
let amountPayload = 'testamount';

describe('ShapeShiftAmountForm.js', function(){
	//make sure it can be loaded in
	let mountedShapeShiftAmountForm, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedShapeShiftAmountForm = shallow(<ShapeShiftAmountForm handleInputChange={mockFunc} shiftAmount={amountPayload}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftAmountForm;
	});

	it('correctly displays its prop ShiftAmount inside a textarea as a placeholder', () => {
		expect(mountedShapeShiftAmountForm.find({placeholder: amountPayload})).toHaveLength(1);
	});

	it('doesn\'t handle input change when no input has been given', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('handles user input when it recieves change to the textarea', () => {
		mountedShapeShiftAmountForm.find('textarea').simulate('change')
		expect(mockFunc).toHaveBeenCalled();
	}); 

});