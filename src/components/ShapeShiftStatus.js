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
      Quoted Rate: &nbsp; {status.quotedRate} <br></br>
      expiration: &nbsp; {status.expiration} <br></br>
      fee: &nbsp; {status.minerFee} <br></br>
      expiratio: &nbsp; {status.expiration} <br></br>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftStatus)
