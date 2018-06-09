import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import styles from '../styles.js'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const createAsset = (coins) => {
    let coinListing =[]
    for( let asset in coins){
      coinListing.push(
        <div id={asset}>
            {coins[asset].name}&nbsp;<img style={Object.assign({}, styles.imageProfile)} alt={asset.name} src={coins[asset].image}></img>
        </div>
      )
    }
    return coinListing;
}

const Shift = ({ user, shapeShift, ...rest}) => {
  return (
    <div id="shift">
      Coins.js
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
         <div id="1">{createAsset(shapeShift.coins)}</div>
      </SwipeableViews>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Shift)
