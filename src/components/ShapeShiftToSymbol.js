import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({shapeShift}) => {
  return {
    shapeShiftToSymbol: shapeShift.toSymbol
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const ShapeShiftToSymbol = ({ shapeShiftToSymbol, ...rest }) => {
  return (
    <span>
      {shapeShiftToSymbol}
    </span>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftToSymbol)
