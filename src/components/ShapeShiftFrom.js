import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { setShapeShiftFromSymbol } from '../actions/shapeShiftActions'
import ShapeShiftFromSymbol from './ShapeShiftFromSymbol'
import ShapeShiftReturnAddressForm from './ShapeShiftReturnAddressForm'
import { generateShapeShiftReturnAddress } from '../actions/walletActions'
import styles from '../styles.js'
import Coin from './Coin'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    mnemonic: wallet.mnemonic,
    shapeShift: shapeShift,
    withdrawalAddress: wallet.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      handleButtonPush: (mnemonic, coin) => {
          dispatch(setShapeShiftFromSymbol(coin.symbol))
          dispatch(generateShapeShiftReturnAddress(mnemonic, coin))
        }
    }
}

const ShapeShiftFrom = ({ mnemonic, shapeShift, withdrawalAddress, handleButtonPush, ...rest}) => {
  return (
    <div id="shift">
      Deposit Coins
      <br></br>
      <ShapeShiftFromSymbol></ShapeShiftFromSymbol>
      <br></br>
      return address:
      <br></br>
      <ShapeShiftReturnAddressForm></ShapeShiftReturnAddressForm>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftFrom)
