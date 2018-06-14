import React from 'react'
import { connect } from 'react-redux'
import { setShapeShiftAmount } from '../actions/walletActions'

const mapStateToProps = ({shapeShift}) => {
  return {
    shapeShiftAmount: shapeShift.amount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const val = evt.target.value;
        setShapeShiftAmount(val);
    }
  }
}

const ShapeShiftAmountForm = ({ shapeShiftAmount, handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="shapeShiftAmount"
          rows="1"
          columns="200"
          onChange={handleInputChange}
          placeholder={shapeShiftAmount}
          >
      </textarea>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftAmountForm)
