import React from 'react'
import { connect } from 'react-redux'
import WithdrawalAddress from './WithdrawalAddress'
import ApproveShiftButton from './ApproveShiftButton'
import ShapeShiftFromSymbol from './ShapeShiftFromSymbol'
import ShapeShiftToSymbol from './ShapeShiftToSymbol'
import ShapeshiftReturnAddress from './ShapeshiftReturnAddress'
import ShapeShiftAmountForm from './ShapeShiftAmountForm'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const ApproveShift = ({shapeShift, ...rest}) => {
  return (
    <div>
      <br></br>
      <ShapeShiftFromSymbol></ShapeShiftFromSymbol>
      &nbsp;->&nbsp;
      <ShapeShiftToSymbol></ShapeShiftToSymbol>
      <br></br>
      Withdrawal <ShapeShiftToSymbol></ShapeShiftToSymbol> Address:
      <br></br>
      <WithdrawalAddress></WithdrawalAddress>
      <br></br>
      Return <ShapeShiftFromSymbol></ShapeShiftFromSymbol> Address:
      <br></br>
      <ShapeshiftReturnAddress></ShapeshiftReturnAddress>
      <br></br>
      Receive <ShapeShiftToSymbol></ShapeShiftToSymbol> Amount:
      <br></br>
      <ShapeShiftAmountForm></ShapeShiftAmountForm>
      <br></br>
      <ApproveShiftButton></ApproveShiftButton>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShift)
