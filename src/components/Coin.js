import React from 'react'
export default (coin, onClick) => {
  return (
    <div id={coin.name}>
      {coin.name} <img src={coin.imageSmall} alt={coin.name}></img>
    </div>
  )
}
