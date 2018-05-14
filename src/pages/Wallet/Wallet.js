import React from 'react'
import { connect } from 'react-redux'
import WalletSeed from '../../components/WalletSeed'


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
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Wallet)
