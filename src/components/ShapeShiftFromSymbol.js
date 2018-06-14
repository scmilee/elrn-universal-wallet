import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({shapeShift}) => {
  return {
    shapeShiftFromSymbol: shapeShift.fromSymbol
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const ShapeShiftFromSymbol = ({ shapeShiftFromSymbol, ...rest }) => {
  return (
    <span>
      {shapeShiftFromSymbol}
    </span>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeShiftFromSymbol)
