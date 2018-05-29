import React from 'react'
import { connect } from 'react-redux'
import { listNetworks } from '../actions/networkActions'
import Network from './Network'

const mapStateToProps = ({networks}) => {
    console.log(networks);
    return {
        networks: networks.networks
     }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Networks = ({networks, onClick, ...rest}) => {
    return (
        <div>
            Networks.js
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
