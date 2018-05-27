import React from 'react'
import { connect } from 'react-redux'
import WalletSeed from './WalletSeed'
import MnemonicForm from './MnemonicForm'
import Addresses from './Addresses'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Wallet = ({...rest}) => {
    return (
        <div>
            <WalletSeed></WalletSeed>
            <MnemonicForm></MnemonicForm>
            <Addresses></Addresses>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
