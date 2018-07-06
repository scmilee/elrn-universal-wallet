import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({wallet}) => {
  return {
    mnemonic: wallet.mnemonic
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const Mnemonic = ({ mnemonic, ...rest }) => {
  return (
    <div>
      {mnemonic}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Mnemonic)
