import React from 'react'
import { connect } from 'react-redux'
import { loadReturnAddress } from '../actions/walletActions'
import styles from '../styles.js'

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
    }
  }
}

export const ShapeShiftReturnAddressForm = ({ shapeShiftReturnAddress, handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="shapeShiftReturnAddress"
          rows="1"
          columns="200"
          onChange={handleInputChange}
          placeholder={shapeShiftReturnAddress}
          style={styles.textAreaStyle}
          >
      </textarea>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftReturnAddressForm)
