import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({wallet}) => {
  return {
    address: wallet.address
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Address = ({ address, ...rest }) => {
  return (
    <div>
      {address}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Address)
