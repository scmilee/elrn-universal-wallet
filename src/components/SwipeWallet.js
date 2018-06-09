import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'
import Profile from './Profile'
import Shift from './Shift'
import Coins from './Coins'
import ApproveShift from './ApproveShift'
import styles from '../styles'

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch, ownProps) => ({})

const SwipeWallet = ({user, ...rest}) => {
    return (
      <div style={Object.assign({}, styles.slide)} >
      <SwipeableViews enableMouseEvents>
        <div id="profile"><Profile></Profile></div>
        <div id="coins"><Coins></Coins></div>
        <div id="shift"><Shift></Shift></div>
        <div id="approve"><ApproveShift></ApproveShift></div>
        <div id="logout"><NavLink to='/logout'>Logout</NavLink></div>
      </SwipeableViews>
  </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeWallet)
