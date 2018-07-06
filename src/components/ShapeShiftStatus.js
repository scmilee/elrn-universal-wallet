import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({shapeShift}) => {
  return {
    status: shapeShift.status,
    fromSymbol: shapeShift.fromSymbol,
    shiftInFlight: shapeShift.shiftInFlight,
    shiftError: shapeShift.shiftError
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})


export const ShapeShiftStatus = ({status, shiftError, fromSymbol, shiftInFlight, requestDateTime, ...rest}) => {


  if (status.orderId) {
    return (
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
  if (shiftError) {
    return (
      <div>
        Shapeshift error<br></br>
        {JSON.stringify(shiftError)}<br></br>
        Swipe right and try again
      </div>
    )
  }
  if (!status.orderId)
  return (
    <div>
      waiting for shapeshift to respond with quote.<br></br>
      go back and retry in 30 seconds {requestDateTime}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftStatus)
