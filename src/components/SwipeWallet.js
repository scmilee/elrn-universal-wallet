import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch, ownProps) => ({})
const styles = {
  slide: {
    padding: 15,
    height: '100vh',
    color: '#fff',
  },
  slide1: {
    backgroundColor: '#FEA900',
  },
  slide2: {
    backgroundColor: '#B3DC4A',
  },
  slide3: {
    backgroundColor: '#6AC0FF',
  },
};

const Carousel = ({user, ...rest}) => {
    return (
      <div>
      SwipeWallet.js
      <SwipeableViews enableMouseEvents>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>logged in as: {user.profile.profile.name || user.profile.username}<br></br>(swipe left)</div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>source crypto: <select name="source crypto">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        target crypto: <select name="source crypto">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <br></br>(swipe left)
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>shift 5 whatevers for 50 something elses.<br></br><NavLink to='/logout' activeClassName='is-active'>Shift!</NavLink> (this actually will log you out)</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}><NavLink to='/logout' activeClassName='is-active'>Logout</NavLink></div>
      </SwipeableViews>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Carousel)
