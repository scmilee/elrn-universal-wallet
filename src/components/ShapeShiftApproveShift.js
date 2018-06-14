import React from 'react'
import { connect } from 'react-redux'
import WithdrawalAddress from './WithdrawalAddress'
import ApproveShiftButton from './ApproveShiftButton'
import ShapeShiftFromSymbol from './ShapeShiftFromSymbol'
import ShapeShiftToSymbol from './ShapeShiftToSymbol'
import ShapeshiftReturnAddress from './ShapeshiftReturnAddress'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ApproveShift = ({shapeShift, ...rest}) => {
  return (
    <div>
      ApproveShift.js
      <br></br>
      <ShapeShiftFromSymbol></ShapeShiftFromSymbol>
      &nbsp;->&nbsp;
      <ShapeShiftToSymbol></ShapeShiftToSymbol>
      <br></br>
      Withdrawal Address:
      <br></br>
      <WithdrawalAddress></WithdrawalAddress>
      <br></br>
      Return Address:
      <br></br>
      <ShapeshiftReturnAddress></ShapeshiftReturnAddress>
      <br></br>
      <ApproveShiftButton></ApproveShiftButton>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShift)
