import React from 'react'
import { connect } from 'react-redux'
import Address from './Address'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ApproveShift = ({shapeShift, ...rest}) => {
  return (
    <div>
      ApproveShift.js
      <br></br>
      Target Address:&nbsp;<Address></Address>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShift)
