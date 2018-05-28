import React from 'react'
import { connect } from 'react-redux'
import { listNetworks } from '../actions/networkActions'

const mapStateToProps = ({networks}) => {
    console.log(networks);
    return {
        networks: networks.networks
     }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Networks = ({networks, ...rest}) => {
    return (
        <div>
            Networks.js
            <br></br>
            { networks.map((network) => (<div>{network}<br></br></div>)) }
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Networks)
