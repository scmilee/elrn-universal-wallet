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
    mnemonic: wallet.mnemonic,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleButtonPush: (mnemonic, coin) => {
          dispatch(generateWalletAddress(mnemonic, coin))
          dispatch(setShapeShiftToSymbol(coin.symbol))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps )(
  ({shapeShift, mnemonic, handleButtonPush, ...rest}) => {
  return (
    <div id="coins">
      ShapeShiftTo.js (Receive)
      <br></br>
      <ShapeShiftToSymbol></ShapeShiftToSymbol>
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
        <div>
          {(
            shapeShift.coins.map( coin => {
              return (
                <Coin 
                  key={coin.name}
                  onClick={() => handleButtonPush(mnemonic, coin)}
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
