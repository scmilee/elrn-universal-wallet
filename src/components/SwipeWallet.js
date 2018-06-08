import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { NavLink } from 'react-router-dom'
import { virtualize } from 'react-swipeable-views-utils';
import { mod } from 'react-swipeable-views-core';
import AssetListing from './AssetListing.js'
import Coins from './Coins.js';

import assetData from './AssetData'

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
  slide1: {
    backgroundColor: 'red',
  },
  slide2: {
    padding: '1vh AUTO',
    backgroundColor: 'black',
  },
  slide3: {
    backgroundColor: 'yellow',
  },
  slideContainer: {
    padding:'2vh AUTO',
    height:'50vh',
    width: '30vw'
  },
  imageLogo:{
    width: '10vw',
  },
  imageProfile:{
    height: '5vh',
    borderRadius: '100%'
  },
  profileDiv:{
    position: 'absolute'
  }
};

const createAsset = (coins) => {
    let coinListing =[]
    let previous = null;
    for( let asset in coins){

        if (previous){
          coinListing.push(
            <div style={Object.assign({}, styles.slide2, {})}>
                <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={coins[asset].image}/> -> <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={coins[previous].image}/>
            </div>
          )
        }
        previous = asset;
    }
    return coinListing;
}

const SwipeWallet = ({user, shapeShift, ...rest}) => {
    return (
      <div>
      SwipeWallet.js
      <SwipeableViews enableMouseEvents>
          <div style={Object.assign({}, styles.slide, {})} >
              <img style={Object.assign({}, styles.imageLogo)} alt='ELRN' src={'https://s3-us-west-2.amazonaws.com/elrn-static-files/elrn.png'}></img>
              <div>
                  <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={(user.profile)?user.profile.profile.image[0].contentUrl:null}></img>
                  <p>{user.profile.profile.name || user.profile.username}</p>
              </div>
              <br/>
              <AssetListing/>
          </div>
          <div style={Object.assign({}, styles.slide)}>Crypto Shift:
            <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
               <div > {createAsset(shapeShift.coins)}</div>
            </SwipeableViews>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>
          shapeshift coins:
          <br></br>
          <Coins></Coins>
        </div>
        <div style={Object.assign({}, styles.slide, styles.slide2)}>shift 5 whatevers for 50 something elses.<br></br><NavLink to='/logout' activeClassName='is-active'>Shift!</NavLink> (this actually will log you out)</div>
        <div style={Object.assign({}, styles.slide, styles.slide3)}><NavLink to='/logout' activeClassName='is-active'>Logout</NavLink></div>
      </SwipeableViews>
      </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(SwipeWallet)
