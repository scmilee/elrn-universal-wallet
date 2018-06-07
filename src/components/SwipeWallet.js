import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import AssetListing from './AssetListing.js';
import elrnImage from '../css/elrnLogo.svg';

const mapStateToProps = (state) => state
const mapDispatchToProps = (dispatch, ownProps) => ({})
const styles = {
  slide: {
    margin: '5vh 15vw',
    height: '70vh',
    width: '60vw',
    backgroundColor: '#565656',
    color: '#bab6b6'

  },
  slide1: {
    backgroundColor: 'red',
  },
  slide2: {

    // backgroundImage: `${background}`,
  },
  slide3: {
    backgroundColor: 'yellow',
  },
  image:{
    height: '15vh'

  }
};

const SwipeWallet = ({user, ...rest}) => {
    return (
      <div>
      SwipeWallet.js
      <SwipeableViews enableMouseEvents>
          <div style={Object.assign({}, styles.slide, styles.slide2)} >
              <img style={Object.assign({}, styles.image)} alt='ELRN' src={'https://s3-us-west-2.amazonaws.com/elrn-static-files/elrn.png'}></img>
              WELCOME: {user.profile.profile.name || user.profile.username}<br></br>(swipe left)
              <AssetListing/>
          </div>
          <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>source crypto:
            <SwipeableViews axis="y" resistance>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°1</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide n°2</div>
              <div style={Object.assign({}, styles.slide, styles.slide2, {height:'10vh'})}>slide 3</div>
            </SwipeableViews>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>source crypto:
          <select name="source crypto">
            <option value="volvo">Volvo</option>
            <option value="saab">Saab</option>
            <option value="mercedes">Mercedes</option>
            <option value="audi">Audi</option>
          </select>
          target crypto:
          <select name="source crypto">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
          </select>
          <br></br>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>shift 5 whatevers for 50 something elses.<br></br><NavLink to='/logout' activeClassName='is-active'>Shift!</NavLink> (this actually will log you out)</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}><NavLink to='/logout' activeClassName='is-active'>Logout</NavLink></div>
      </SwipeableViews>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeWallet)
