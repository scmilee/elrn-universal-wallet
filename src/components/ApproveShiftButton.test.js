import React from 'react'
import { shallow, mount, render } from 'enzyme'
import * as ApproveShiftButtonPackage from './ApproveShiftButton.js'
import configureMockStore from 'redux-mock-store';
jest.mock('../elrn-config/elrn.js');
jest.mock('../styles.js');

const mockStore = configureMockStore();
const ShiftButton = ApproveShiftButtonPackage.ApproveShiftButton;
//connected meaning redux dispatches are being tested
const ConnectedShiftButton = ApproveShiftButtonPackage.default;

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

describe('ConnectedShiftButton', function(){ 
	let wrapper, state, store;

	beforeEach(() => {
        state = {
        	wallet:{
        		address: 'avcds',
        		returnAddress: 'avcs'
        	},
        	shapeShift:{
        		toSymbol: 'btc',
   				fromSymbol: 'cvc',
   				shiftAmount: '2.5'
        	}
        };
        store = mockStore(state);
        wrapper = shallow(
            <ConnectedShiftButton store={store} />
        );
    });

	it('should correctly map the state to props', () => {
		expect(wrapper.props().withdrawalAddress).toBe('avcds');
		expect(wrapper.props().returnAddress).toBe('avcs');
		expect(wrapper.props().toSymbol).toBe('btc');
		expect(wrapper.props().fromSymbol).toBe('cvc');
		expect(wrapper.props().shiftAmount).toBe('2.5')
	});

});