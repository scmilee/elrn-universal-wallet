import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'
import Profile from './Profile'
import ShapeShiftFrom from './ShapeShiftFrom'
import ShapeShiftTo from './ShapeShiftTo'
import ShapeShiftApproveShift from './ShapeShiftApproveShift'
import SecretPhrase from './SecretPhrase'
import ShapeShiftStatus from './ShapeShiftStatus'
import styles from '../styles'

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch, ownProps) => ({})

const SwipeWallet = ({user, ...rest}) => {
  return (
    <div style={Object.assign({}, styles.slide)} >
      <SwipeableViews enableMouseEvents>
        <div id="profile"><Profile></Profile></div>
        <div id="secretphrase"><SecretPhrase></SecretPhrase></div>
        <div id="shapeShiftFrom"><ShapeShiftFrom></ShapeShiftFrom></div>
        <div id="shapeShiftTo"><ShapeShiftTo></ShapeShiftTo></div>
        <div id="approve"><ShapeShiftApproveShift></ShapeShiftApproveShift></div>
        <div id="status"><ShapeShiftStatus></ShapeShiftStatus></div>
        <div id="logout"><br></br><br></br><NavLink to='/logout'>Logout</NavLink></div>
      </SwipeableViews>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeWallet)
