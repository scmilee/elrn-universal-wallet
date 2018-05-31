import React from 'react'

const Network = (network, onClick) => {
    return (
        <li>
          id: {network.id}&nbsp;
          bip44: {network.bip44}&nbsp;          
        </li>
    )
}
export default Network
