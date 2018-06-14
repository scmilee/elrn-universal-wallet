import React from 'react'
import { connect } from 'react-redux'
import { setShapeShiftReturnAddress } from '../actions/walletActions'

const mapStateToProps = ({wallet}) => {
  return {
    shapeShiftReturnAddress: wallet.returnAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const val = evt.target.value;
        setShapeShiftReturnAddress(val);
    }
  }
}

const ShapeShiftReturnAddressForm = ({ shapeShiftReturnAddress, handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="shapeShiftReturnAddress"
          rows="1"
          columns="200"
          onChange={handleInputChange}
          placeholder={shapeShiftReturnAddress}
          >
      </textarea>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftReturnAddressForm)
