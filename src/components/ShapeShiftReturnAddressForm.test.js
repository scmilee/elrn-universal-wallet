import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftReturnAddressFormPackage from './ShapeShiftReturnAddressForm.js'

jest.mock('../styles.js');
jest.mock('../elrn-config/elrn.js');

const ShapeShiftReturnAddressForm = ShapeShiftReturnAddressFormPackage.ShapeShiftReturnAddressForm;
let mockFunc = jest.fn();
let addressPayload = 'testAddy';

describe('ShapeShiftReturnAddressForm.js', function(){
	//make sure it can be loaded in
	let mountedShapeShiftReturnAddressForm, mockFunc;

	beforeEach(() => {
		mockFunc = jest.fn();
		mountedShapeShiftReturnAddressForm = shallow(<ShapeShiftReturnAddressForm handleInputChange={mockFunc} shapeShiftReturnAddress={addressPayload}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftReturnAddressForm;
	});

	it('correctly displays its prop Mnemonic inside a textarea as a placeholder', () => {
		expect(mountedShapeShiftReturnAddressForm.find({placeholder: addressPayload})).toHaveLength(1);
	});

	it('doesn\'t handle input change when no input has been given', () => {
		expect(mockFunc).not.toHaveBeenCalled();
	});

	it('handles user input when it recieves change to the textarea', () => {
		mountedShapeShiftReturnAddressForm.find('textarea').simulate('change')
		expect(mockFunc).toHaveBeenCalled();
	});

});