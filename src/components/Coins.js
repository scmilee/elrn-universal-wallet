import React from 'react'
import { connect } from 'react-redux'
import Coin from './Coin'

const mapStateToProps = ({shapeShift}) => {
  return {
    coins: shapeShift.coins
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Coins = ({coins, ...rest}) => {
  if(!coins) {
    return (<div></div>)
  }
  return (
    <div>
      {Object.keys(coins).map((coin) => {
          const coinItem = Object.assign(coins[coin]);
          return (
            <Coin 
              key={coinItem.name}
              {...coinItem}
            />
          )
        }
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Coins)
