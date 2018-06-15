import React from 'react'
import { connect } from 'react-redux'
import { shift } from '../actions/shapeShiftActions'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    withdrawalAddress: wallet.address,
    toSymbol: shapeShift.toSymbol,
    fromSymbol: shapeShift.fromSymbol,
    returnAddress: wallet.returnAddress,
    amount: shapeShift.amount
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleApproveShiftButton: (withdrawalAddress, fromSymbol, toSymbol, returnAddress, amount) => {
      const pair = `${fromSymbol}_${toSymbol}`
      const options = {
        returnAddress: returnAddress,
        amount: amount,
        timeout: 120
      }
      dispatch(shift(withdrawalAddress, pair, options))
    }
  }
}

const ApproveShiftButton = ({ withdrawalAddress, fromSymbol, toSymbol, returnAddress, amount, handleApproveShiftButton, ...rest }) => {
  return (
    <button onClick={() => handleApproveShiftButton( withdrawalAddress, fromSymbol, toSymbol, returnAddress, amount)}>Approve Shift</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShiftButton)
