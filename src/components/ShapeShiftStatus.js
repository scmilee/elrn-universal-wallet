import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ShapeShiftStatus = ({shapeShift, ...rest}) => {
  return (
    <div>ShapeShiftStatus.js</div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftStatus)
