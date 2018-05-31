import React from 'react'
import { connect } from 'react-redux'
import Network from './Network'
import GenerateWalletSeedButton from './GenerateWalletSeedButton'
import WalletSeed from './WalletSeed'

const mapStateToProps = ({networks}) => {
    return {
        networks: networks.networks
     }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Networks = ({networks, ...rest}) => {
    return (
      <div>
        Networks.js
       <GenerateWalletSeedButton></GenerateWalletSeedButton>
       <WalletSeed></WalletSeed>
            
            <br></br>
            {networks.map( network => 
            <Network 
              key={network.id}
              {...network}
            />
          )}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Networks)
