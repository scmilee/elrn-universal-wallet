import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import { setShapeShiftFromSymbol } from '../actions/shapeShiftActions'
import styles from '../styles.js'
import Coin from './Coin'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    shapeShift: shapeShift,
    withdrawalAddress: wallet.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      handleButtonPush: (symbol) => {
          dispatch(setShapeShiftFromSymbol(symbol))
        }
    }
}

const ShapeShiftFrom = ({ shapeShift, withdrawalAddress, handleButtonPush, ...rest}) => {
  return (
    <div id="shift">
      ShapeShiftFrom.js
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
          <div>
            {(
              shapeShift.coins.map( coin => {
                return (
                  <Coin 
                    key={coin.name}
                    onClick={() => handleButtonPush(coin.symbol)}
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
