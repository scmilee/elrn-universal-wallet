import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({shapeShift}) => {
  return {
    status: shapeShift.status,
    fromSymbol: shapeShift.fromSymbol
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ShapeShiftStatus = ({status, fromSymbol, ...rest}) => {
  return (
    <div>
      ShapeShiftStatus.js <br></br>
      next step:
      <br></br>
      send: &nbsp; {status.depositAmount} &nbsp; {fromSymbol}
      <br></br>
      to: &nbsp; {status.deposit} <br></br>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftStatus)
