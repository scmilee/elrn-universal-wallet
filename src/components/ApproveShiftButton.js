import React from 'react'
import { connect } from 'react-redux'
import { shift } from '../actions/shapeShiftActions'

const mapStateToProps = ({shapeShift, wallet}) => {
  return {
    shapeShift: shapeShift,
    withdrawalAddress: wallet.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleApproveShiftButton: (withdrawalAddress) => {
      const fromSymbol='BTC'
      const toSymbol='ETH'
      const pair = `${fromSymbol}_${toSymbol}`
      const options = {
        returnAddress: '1LmoNY5vmDkNKDeRqQwSjLksVzQ9GrZysp',
        amount: '.01'
      }
      dispatch(shift(withdrawalAddress, pair, options))
    }
  }
}

const ApproveShiftButton = ({ handleApproveShiftButton, ...rest }) => {
  return (
    <button onClick={() => handleApproveShiftButton()}>Approve Shift</button>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShiftButton)
