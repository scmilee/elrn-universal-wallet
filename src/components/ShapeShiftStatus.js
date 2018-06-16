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
      <br></br>
      next step:
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
