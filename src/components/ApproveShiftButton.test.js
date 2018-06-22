import React from 'react'
import { shallow, mount, render } from 'enzyme';
import styles from '../styles.js'
import Elrn from '../elrn-config/elrn.js'
import { shift } from '../actions/shapeShiftActions'
import * as ApproveShiftButtonPackage from './ApproveShiftButton.js'
jest.mock('../elrn-config/elrn.js');
jest.mock('../actions/shapeShiftActions');
jest.mock('../styles.js');

const ShiftButton = ApproveShiftButtonPackage.ApproveShiftButton;

describe('ApproveShiftButton.js', function(){
	//make sure it can be loaded in

	it('renders without crashing', () => {
	  	const button = mount(<ShiftButton/>);
	});

	it('calls handleApproveShiftButton when clicked', function(){
		const mockHandle = jest.fn();
		const button = mount(<ShiftButton handleApproveShiftButton={mockHandle} />);
		button.simulate('click');
		expect(mockHandle).toHaveBeenCalled();
	});

	it('does not call handleApproveShiftButton when not clicked', function() {
		const mockHandle = jest.fn();
		const button = mount(<ShiftButton handleApproveShiftButton={mockHandle} />);
		expect(mockHandle).not.toHaveBeenCalled();
	});
});