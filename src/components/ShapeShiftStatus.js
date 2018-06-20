import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({shapeShift}) => {
  return {
    status: shapeShift.status,
    fromSymbol: shapeShift.fromSymbol,
    shiftInFlight: shapeShift.shiftInFlight
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ShapeShiftStatus = ({status, fromSymbol, shiftInFlight, requestDateTime, ...rest}) => {
  return (
    (!status.orderId) ?
    <div>
      waiting for shapeshift to respond with quote.<br></br>
      go back and retry in 30 seconds {requestDateTime}
    </div>
    :
    <div>
      <br></br>
      shapeshift is waiting for you.
      <br></br>
      send: &nbsp; {status.depositAmount} &nbsp; {fromSymbol}
      <br></br>
      to: &nbsp; {status.deposit} <br></br>
      Quoted Rate: &nbsp; {status.quotedRate} <br></br>
      expiration: &nbsp; {status.expiration} <br></br>
      fee: &nbsp; {status.minerFee} <br></br>
      expiration: &nbsp; {status.expiration} <br></br>
      OrderID: &nbsp; {status.orderId} <br></br>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftStatus)
