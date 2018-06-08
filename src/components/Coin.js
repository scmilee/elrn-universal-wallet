import React from 'react'
export default (coin, onClick) => {
  return (
    <div>
      {coin.name} <img src={coin.imageSmall} alt={coin.name}></img>
    </div>
  )
}
