import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { generateWalletAddress } from '../actions/walletActions'
import { setShapeShiftToSymbol } from '../actions/shapeShiftActions'
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

/*
editor:
  {content: "", isEdited: false, path: ""}
file:
  {isFetching: false, isEncrypted: false, content: null, path: null, error: null}
learner:
  {keypair: ""}
router:
  {location: {…}}
shapeShift:
  coins:
    Array(59)
    0:
      derivePath:
        "m/44'/0'/0'/0/0"
      extension:
        bech32:
          "bc"
        bip32:
          private:
            76066276
          public:
            76067358
__proto__ :
  Object
bip44:
  0
derivePath:
  "m/44'/0'/0'/0/0"
messagePrefix:
  "Bitcoin Signed Message:↵"
p2wpkh:
  {baseNetwork: "bitcoin", messagePrefix: "Bitcoin Signed Message:↵", bech32: "bc", bip32: {…}, pubKeyHash: 0, …}
p2wpkhInP2sh:
  {baseNetwork: "bitcoin", messagePrefix: "Bitcoin Signed Message:↵", bech32: "bc", bip32: {…}, pubKeyHash: 0, …}
pubKeyHash:
  0
scriptHash:
  5
symbol:
  "BTC"
type:
  "bitcoinjs"
wif:
  128
__proto__:
  Object
  id:
    "bitcoin"
  image:
    "https://shapeshift.io/images/coins/bitcoin.png"
  imageSmall:
    "https://shapeshift.io/images/coins-sm/bitcoin.png"
  minerFee:
    0.00015
  name:
    "Bitcoin"
  status:
    "available"
  symbol:
    "BTC"
*/
