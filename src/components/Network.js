import React from 'react'

const Network = (network, onClick) => {
    return (
        <li>
          id: {network.id}&nbsp;
          bip44: {network.bip44}&nbsp;
          wif: {network.wif}&nbsp;
          pubKeyHash: {network.pubKeyHash}&nbsp;
          scriptHash: {network.scriptHash}&nbsp;
          public: {network.bip32.public}&nbsp;
          private: {network.bip32.private}&nbsp;
        </li>
    )
}
export default Network
