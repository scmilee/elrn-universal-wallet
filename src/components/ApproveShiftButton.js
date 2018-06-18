import React from 'react'
import { connect } from 'react-redux'
import { shift } from '../actions/shapeShiftActions'
import styles from '../styles.js'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    withdrawalAddress: wallet.address,
    toSymbol: shapeShift.toSymbol,
    fromSymbol: shapeShift.fromSymbol,
    returnAddress: wallet.returnAddress,
    shiftAmount: shapeShift.shiftAmount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleApproveShiftButton: (withdrawalAddress, fromSymbol, toSymbol, returnAddress, shiftAmount) => {
      const pair = `${fromSymbol}_${toSymbol}`
      const options = {
        returnAddress: returnAddress,
        amount: shiftAmount
      }
      dispatch(shift(withdrawalAddress, pair, options))
    }
  }
}

const ApproveShiftButton = ({ withdrawalAddress, fromSymbol, toSymbol, returnAddress, shiftAmount, handleApproveShiftButton, ...rest }) => {
  return (
    <button style={styles.buttonStyle} onClick={() => handleApproveShiftButton( withdrawalAddress, fromSymbol, toSymbol, returnAddress, shiftAmount)}>Request Quote</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShiftButton)
