import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as ApproveShiftButtonPackage from './ApproveShiftButton.js'
jest.mock('../elrn-config/elrn.js');
jest.mock('../actions/shapeShiftActions');
jest.mock('../styles.js');

const ShiftButton = ApproveShiftButtonPackage.ApproveShiftButton;

describe('ApproveShiftButton.js', function(){
	//make sure it can be loaded in
	it('renders without crashing', () => {
	  	const button = shallow(<ShiftButton/>);
	});

	it('calls handleApproveShiftButton when clicked', function(){
		const mockHandle = jest.fn();
		const button = shallow(<ShiftButton handleApproveShiftButton={mockHandle} />);
		button.simulate('click');
		expect(mockHandle).toHaveBeenCalled();
	});

	it('doesn\'t call handleApproveShiftButton on its own', function() {
		const mockHandle = jest.fn();
		const button = shallow(<ShiftButton handleApproveShiftButton={mockHandle} />);
		expect(mockHandle).not.toHaveBeenCalled();
	});
});