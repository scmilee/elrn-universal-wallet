import React from 'react'
import { connect } from 'react-redux'
import { shift } from '../actions/shapeShiftActions'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    withdrawalAddress: wallet.address,
    fromSymbol: shapeShift.fromSymbol,
    toSymbol: shapeShift.toSymbol,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleApproveShiftButton: (withdrawalAddress, fromSymbol, toSymbol) => {
      const pair = `${fromSymbol}_${toSymbol}`
      const options = {
        returnAddress: '1LmoNY5vmDkNKDeRqQwSjLksVzQ9GrZysp',
        amount: '.01'
      }
      dispatch(shift(withdrawalAddress, pair, options))
    }
  }
}

const ApproveShiftButton = ({ withdrawalAddress, fromSymbol, toSymbol, handleApproveShiftButton, ...rest }) => {
  return (
    <button onClick={() => handleApproveShiftButton( withdrawalAddress, fromSymbol, toSymbol)}>Approve Shift</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShiftButton)
