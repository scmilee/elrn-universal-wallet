import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ApproveShift = ({shapeShift, ...rest}) => {
  return (
    <div>ApproveShift.js</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ApproveShift)
