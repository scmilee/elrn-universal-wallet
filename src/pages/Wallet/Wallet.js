import React from 'react'
import { connect } from 'react-redux'
import WalletSeed from '../../components/WalletSeed'
import MnemonicForm from '../../components/MnemonicForm'
import Addresses from '../../components/Addresses'

const mapStateToProps = ({wallet}) => {
    return {
        wallet
    }
}

const mapDispatchToProps = (dispatch, nextProps) => {
    return {

    }
}

const Wallet = ({wallet, user, file, getFile, putFile, ...rest}) => {
    return (
        <div>
            <WalletSeed></WalletSeed>
            <MnemonicForm></MnemonicForm>
            <Addresses></Addresses>
        </div>
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
