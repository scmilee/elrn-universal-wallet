import React from 'react'
import { connect } from 'react-redux'
const QRCode = require('qrcode.react');

const mapStateToProps = ({wallet}) => {
  return {
    returnAddress: wallet.returnAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ShapeshiftReturnAddress = ({ returnAddress, ...rest }) => {
  return (
    <div style={Object.assign({},{fontSize:'16px'})}>
      {returnAddress}
      <br/>
      {(returnAddress)?<QRCode size={75} value={returnAddress}/>:null}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeshiftReturnAddress)
