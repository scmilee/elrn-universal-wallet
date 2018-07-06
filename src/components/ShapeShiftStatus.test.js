import React from 'react'
import { shallow } from 'enzyme'
import * as ShapeShiftStatusPackage from './ShapeShiftStatus.js'

jest.mock('../styles.js');
jest.mock('../elrn-config/elrn.js');

const ShapeShiftStatus = ShapeShiftStatusPackage.ShapeShiftStatus;
let datePayload = 'testAddy';
const state = {
	status: {
		depositAmount: 400,
		deposit: 'btc',
		quotedRate: 600,
		expiration: 2,
		orderId: 3453,
		minerFee: 6000
	},
    fromSymbol: 'cvc'
}

describe('ShapeShiftStatus.js', function(){
	//make sure it can be loaded in
	let mountedShapeShiftStatus, mockFunc;

	beforeEach(() => {
		mountedShapeShiftStatus = shallow(<ShapeShiftStatus status={state.status} fromSymbol={state.fromSymbol}/>);
	});
	it('renders without crashing', () => {
		mountedShapeShiftStatus;
	});

	it('correctly displays depositAmount when there is an order ID', () => {
		expect(mountedShapeShiftStatus.text()).toContain(state.status.depositAmount);
	});

	it('correctly displays the deposit  when there is an order ID', () => {
		expect(mountedShapeShiftStatus.text()).toContain(state.status.deposit);
	});

	it('correctly displays the quotedRate of the offer when there is an order ID', () => {
		expect(mountedShapeShiftStatus.text()).toContain(state.status.quotedRate);
	});

	it('correctly displays the expiration of the offer when there is an order ID', () => {
		expect(mountedShapeShiftStatus.text()).toContain(state.status.expiration);
	});
	it('correctly displays the minerFee when there is an order ID', () => {
		expect(mountedShapeShiftStatus.text()).toContain(state.status.minerFee);
	});
	it('correctly displays the orderId when there is an order ID', () => {
		expect(mountedShapeShiftStatus.text()).toContain(state.status.orderId);
	});

	it('displays the request date time if there is no orderId', () => {
		state.status.orderId = null;
		mountedShapeShiftStatus = shallow(<ShapeShiftStatus status={state.status} requestDateTime={datePayload}/>);
		expect(mountedShapeShiftStatus.text()).toContain(datePayload);

	});

});
