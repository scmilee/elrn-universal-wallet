import React from 'react'
import { shallow } from 'enzyme'
import * as ProfilePackage from './Profile.js'

jest.mock('../elrn-config/elrn.js');

const Profile = ProfilePackage.Profile;

let store = {
	user:{
		isLoginPending: true,
		profile:{
			username: 'scmile',
			profile:{
				image: null
			}
		}
	}
}
describe('Profile.js', function(){
	//make sure it can be loaded in
	let mountedProfile;

	beforeEach(() => {
		mountedProfile = shallow(<Profile  user={store.user}/>);
	});

	it('renders without crashing', () => {
		mountedProfile;
	});

	it('displays the users name', () => {
		expect(mountedProfile.text()).toContain('scmile');
	});

	it('displays null if the user doesn\'t have a profile picture', ()=> {
		expect(mountedProfile.find({src: null})).toHaveLength(1);
	});

	it('displays the users profile picture if they have one', () => {
		store.user.profile.profile.image = ['profilePic'];
		mountedProfile = shallow(<Profile  user={store.user}/>);
		expect(mountedProfile.find({src: 'profilePic'})).toBeTruthy();
	});

});