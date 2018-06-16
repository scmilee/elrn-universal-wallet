import React from 'react'
import { connect } from 'react-redux'
import { loadShiftAmount } from '../actions/walletActions'
import styles from '../styles.js'

const mapStateToProps = ({shapeShift}) => {
  return {
    shiftAmount: shapeShift.shiftAmount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: (evt) => {
        const val = evt.target.value;
        dispatch(loadShiftAmount(val));
    }
  }
}

const ShapeShiftAmountForm = ({ shiftAmount, handleInputChange, ...rest }) => {
  return (
    <div>
      <textarea
          id="shapeShiftAmount"
          rows="1"
          columns="200"
          onChange={handleInputChange}
          placeholder={shiftAmount}
          style={styles.textAreaStyle}
          >
      </textarea>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftAmountForm)
