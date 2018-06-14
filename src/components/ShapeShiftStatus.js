import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({shapeShift}) => {
  return {
    status: shapeShift.status
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ShapeShiftStatus = ({status, ...rest}) => {
  return (
    <div>
      ShapeShiftStatus.js <br></br>
      apiPubKey &nbsp; {status.apiPubKey} <br></br>
      deposit  &nbsp; {status.deposit} <br></br>
      depositAmount &nbsp; {status.depositAmount} <br></br>
      expiration &nbsp; {status.expiration} <br></br>
      maxLimit &nbsp; {status.maxLimit} <br></br>
      minerFee &nbsp; {status.minerFee} <br></br>
      orderId &nbsp; {status.orderId} <br></br>
      pair &nbsp; {status.pair} <br></br>
      quotedRate &nbsp; {status.quotedRate} <br></br>
      returnAddress &nbsp; {status.returnAddress} <br></br>
      withdrawal &nbsp; {status.withdrawal} <br></br>
      withdrawalAmount &nbsp; {status.withdrawalAmount} <br></br>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftStatus)
