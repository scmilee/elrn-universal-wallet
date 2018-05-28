import React from 'react'
import { connect } from 'react-redux'
import { listNetworks } from '../actions/networkActions'
const coininfo = require('coininfo')

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
            { networks.map((network) => ((
                <div>
                id: {network.id}&nbsp;
                bip44: {network.bip44}&nbsp;
                wif: {network.wif}&nbsp;
                pubKeyHash: {network.pubKeyHash}&nbsp;
                scriptHash: {network.scriptHash}&nbsp;
                public: {network.bip32.public}&nbsp;
                private: {network.bip32.private}&nbsp;
                <br></br></div>))
            )}
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Networks)
