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

const ApproveShift = ({shapeShift, ...rest}) => {
  return (
    <div style={Object.assign({},{fontSize:'24px'})}>
      <br></br>
      <ShapeShiftFromSymbol/>
      &nbsp;->&nbsp;
      <ShapeShiftToSymbol/>
      <br></br>
      Exchange <ShapeShiftFromSymbol/> from Address:
      <br></br>
      <ShapeshiftReturnAddress/>
      <br></br>
      Receive <ShapeShiftToSymbol/> at Address:
      <br></br>
      <WithdrawalAddress/>
      <br></br>
      Receive <ShapeShiftToSymbol/> Amount:
      <br></br>
      <ShapeShiftAmountForm/>
      <br></br>
      <ApproveShiftButton/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShift)
