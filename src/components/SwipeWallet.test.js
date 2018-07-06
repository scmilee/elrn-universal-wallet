import React from 'react'
import { shallow } from 'enzyme'
import SwipeableViews from 'react-swipeable-views'
import Profile from './Profile'
import ShapeShiftFrom from './ShapeShiftFrom'
import ShapeShiftTo from './ShapeShiftTo'
import ShapeShiftApproveShift from './ShapeShiftApproveShift'
import SecretPhrase from './SecretPhrase'
import ShapeShiftStatus from './ShapeShiftStatus'
import * as SwipeWalletPackage from './SwipeWallet.js'

jest.mock('../elrn-config/elrn.js');
jest.mock('./Profile');
jest.mock('./ShapeShiftFrom');
jest.mock('./ShapeShiftTo');
jest.mock('./ShapeShiftApproveShift');
jest.mock('./SecretPhrase');
jest.mock('./ShapeShiftStatus');

const SwipeWallet = SwipeWalletPackage.SwipeWallet

describe('SwipeWallet.js ',()=>{
	let mountedSwipeWallet;
	beforeEach(() => {
		mountedSwipeWallet = shallow(<SwipeWallet />);
	});

	it('renders a Profile component no matter what', () => {
		expect(mountedSwipeWallet.find(Profile)).toHaveLength(1);
	});
	it('renders a ShapeShiftToSymbol component no matter what', () => {
		expect(mountedSwipeWallet.find(ShapeShiftTo)).toHaveLength(1);
	});
	it('renders a ShapeShiftFromSymbol component no matter what', () => {
		expect(mountedSwipeWallet.find(ShapeShiftFrom)).toHaveLength(1);
	});
	it('renders a ShapeShiftApproveShift component no matter what', () => {
		expect(mountedSwipeWallet.find(ShapeShiftApproveShift)).toHaveLength(1);
	});
	it('renders a SecretPhrase component no matter what', () => {
		expect(mountedSwipeWallet.find(SecretPhrase)).toHaveLength(1);
	});
	it('renders a ShapeShiftStatus component no matter what', () => {
		expect(mountedSwipeWallet.find(ShapeShiftStatus)).toHaveLength(1);
	});
	it('renders a SwipeableViews component no matter what', () => {
		expect(mountedSwipeWallet.find(SwipeableViews)).toHaveLength(1);
	});

});