import React from 'react'
import styles from '../styles.js'

const Coin = (coin, onClick) => {
  return (
    <div>
        {coin.name}&nbsp;
        <img 
          style={Object.assign({}, styles.imageProfile)} 
          alt={coin.name} 
          src={coin.image}>
        </img>
        <br></br>
    </div>
  )
}
export default Coin
