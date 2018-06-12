import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { generateWalletAddress } from '../actions/walletActions'
import styles from '../styles.js'
import Coin from './Coin'
import Address from './Address'


const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    shapeShift: shapeShift,
    mnemonic: wallet.mnemonic,
    seed: wallet.seed,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        handleButtonPush: (seed, derivePath, coinInfo) => {
          dispatch(generateWalletAddress(seed, derivePath, coinInfo))
        }
    }
}

const Coins = ({shapeShift, seed, handleButtonPush, ...rest}) => {
  return (
    <div id="coins">
      Coins.js
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
        <div>
          {(
            shapeShift.coins.map( coin => {
              return (
                <Coin 
                  key={coin.name}
                  onClick={() => handleButtonPush(seed, coin.derivePath, coin.id)}
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

export default connect(mapStateToProps, mapDispatchToProps )(Coins)
