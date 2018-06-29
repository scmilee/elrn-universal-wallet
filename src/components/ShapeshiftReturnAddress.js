import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({wallet}) => {
  return {
    returnAddress: wallet.returnAddress
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const ShapeshiftReturnAddress = ({ returnAddress, ...rest }) => {
  return (
    <div>
      {returnAddress}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(ShapeshiftReturnAddress)
