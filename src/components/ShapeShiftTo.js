import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { generateWalletAddress } from '../actions/walletActions'
import { setShapeShiftToSymbol } from '../actions/shapeShiftActions'
import ShapeShiftToSymbol from './ShapeShiftToSymbol'
import styles from '../styles.js'
import Coin from './Coin'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    shapeShift: shapeShift,
    seed: wallet.seed,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleButtonPush: (seed, coin) => {
          dispatch(generateWalletAddress(seed, coin))
          dispatch(setShapeShiftToSymbol(coin.symbol))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(
  ({shapeShift, seed, handleButtonPush, ...rest}) => {
  return (
    <div id="coins">
      ShapeShiftTo.js
      <br></br>
      <ShapeShiftToSymbol></ShapeShiftToSymbol>
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
        <div>
          {(
            shapeShift.coins.map( coin => {
              return (
                <Coin 
                  key={coin.name}
                  onClick={() => handleButtonPush(seed, coin)}
                  {...coin}
                  >
                </Coin>
              )
            })
          )}
        </div>
      </SwipeableViews>
    </div>
  )
})
