import React from 'react'
import styles from '../styles.js'

const Coin = ({onClick, id, name, image}) => {

  return (
    <div>
        <button
            style={styles.buttonStyle}
            onClick={onClick}
        >
        <img style={styles.imgStyle} alt={id} src={image}></img>
            {name}
        </button>
        <br></br>
    </div>
  )
}
export default (Coin)
