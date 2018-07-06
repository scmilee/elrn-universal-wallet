import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { setShapeShiftFromSymbol, setManualAddressInput } from '../actions/shapeShiftActions'
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
      },
      manualAddressInputSelector: (bool) => {
          dispatch(setManualAddressInput(bool))
          dispatch(setShapeShiftFromSymbol('?'))
      }
    }
}


export const ShapeShiftFrom = ({ mnemonic, shapeShift, withdrawalAddress, handleButtonPush, manualAddressInputSelector, ...rest}) => {

  return (
    <div id="shift">
      Exchange
      <br></br>
      <button
          style={styles.buttonStyle}
          onClick={() => manualAddressInputSelector(false)}
      >
          Coin Select List
      </button>
      <button
          style={styles.buttonStyle}
          onClick={() => manualAddressInputSelector(true)}
      >
          Manual Address Input
      </button>
      {(shapeShift.manualAddressInput)
            ? <ShapeShiftReturnAddressForm></ShapeShiftReturnAddressForm>
            : <div>
                  <ShapeShiftFromSymbol></ShapeShiftFromSymbol>
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
      }
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftFrom)
