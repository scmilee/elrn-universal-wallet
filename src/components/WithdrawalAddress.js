import React from 'react'
import { connect } from 'react-redux'
const QRCode = require('qrcode.react');

const mapStateToProps = ({wallet}) => {
  return {
    address: wallet.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const WithdrawalAddress = ({ address, ...rest }) => {
  return (
    <div style={Object.assign({},{fontSize:'16px'})}>
      {address}
    <br/>
      {(address)?<QRCode size={75} value={address}/>:null}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(WithdrawalAddress)
