import React from 'react'
import { connect } from 'react-redux'
import { loadReturnAddress } from '../actions/walletActions'
import styles from '../styles.js'
import QrReader from 'react-qr-reader'

const mapStateToProps = ({wallet}) => {
  return {
    shapeShiftReturnAddress: wallet.returnAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const val = evt.target.value;
        dispatch(loadReturnAddress(val));
    },
    handleQrcScan: (evt) => {
        //TODO: convert QRC canvas to string for redux tree
        dispatch(loadReturnAddress(evt))
    }
  }
}


export const ShapeShiftReturnAddressForm = ({ shapeShiftReturnAddress, handleInputChange, ...rest }) => {

  return (
    <div>
        <div style={styles.qrcCameraWrapper}>
          <QrReader
              delay={5000}
              onScan={handleQrcScan}
              onError = {null}
              style={{ width: '100%' }}
              />
        </div>
        <br/>
        <textarea
            id="shapeShiftReturnAddress"
            rows="2"
            columns="20"
            onChange={handleInputChange}
            placeholder="Enter your Address Here, or use camera for QRC"
            style={styles.addressInputTextArea}
            >
        </textarea>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftReturnAddressForm)
