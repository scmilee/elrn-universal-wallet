import React from 'react'
import { connect } from 'react-redux'
import Address from './Address'
import ApproveShiftButton from './ApproveShiftButton'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ApproveShift = ({shapeShift, ...rest}) => {
  return (
    <div>
      ApproveShift.js
      <br></br>
      Withdrawal Address:&nbsp;<Address></Address>
    <ApproveShiftButton></ApproveShiftButton>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShift)
