import React from 'react'
import styles from '../styles.js'

const Coin = ({onClick, id, name, image}) => {
  return (
    <div>
        <button
            style={styles.coinButtonStyle}
            onClick={onClick}
        >
            <img style={styles.imgStyle} alt={id} src={image}/>
            {name}
        </button>
        <br></br>
    </div>
  )
}
export default (Coin)
