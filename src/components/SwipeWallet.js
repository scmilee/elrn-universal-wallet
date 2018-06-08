import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import Profile from './Profile'
import Shift from './Shift'

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch, ownProps) => ({})

const styles = {
  slide: {
    margin: '5vh 15vw',
    padding: '2vh 0',
    height: '70vh',
    width: '60vw',
    backgroundColor: '#565656',
    color: '#bab6b6',
    position: 'relative',
    textAlign: 'center',
    fontSize: '3vh',
  },
};

const SwipeWallet = ({user, ...rest}) => {
    return (
      <div style={Object.assign({}, styles.slide)} >
      <SwipeableViews enableMouseEvents>
        <div><Profile></Profile></div>
        <div><Shift></Shift></div>
        <div>shift 5 whatevers for 50 something elses.<br></br><NavLink to='/logout' activeClassName='is-active'>Shift!</NavLink> (this actually will log you out)</div>
        <div><NavLink to='/logout'>Logout</NavLink></div>
      </SwipeableViews>
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeWallet)
