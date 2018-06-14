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
    seed: wallet.seed,
    shapeShift: shapeShift,
    withdrawalAddress: wallet.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      handleButtonPush: (seed, coin) => {
          dispatch(setShapeShiftFromSymbol(coin.symbol))
          dispatch(generateShapeShiftReturnAddress(seed, coin)) 
        }
    }
}

const ShapeShiftFrom = ({ seed, shapeShift, withdrawalAddress, handleButtonPush, ...rest}) => {
  return (
    <div id="shift">
      ShapeShiftFrom.js (Deposit)
      <br></br>
      <ShapeShiftFromSymbol></ShapeShiftFromSymbol>
      <ShapeShiftReturnAddressForm></ShapeShiftReturnAddressForm>
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
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftFrom)

/*
test('shift', function() {
    this.timeout(60000);
    const config = require(__dirname + '/../config/options.js');
    const elrnClient = new Elrn(config)
    const withdrawalAddress = '0x7229225164025b545f52a3b4c1dfba6c4e34cb1d'
    const options = {
      returnAddress: '1LmoNY5vmDkNKDeRqQwSjLksVzQ9GrZysp',
      amount: '.01'
    }
    return elrnClient.shift(withdrawalAddress, 'BTC_ETH', options)
    .then((data) => {
        assert.isNotNull(data.orderId)
    })
});
*/
