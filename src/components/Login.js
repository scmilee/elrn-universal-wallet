import React from 'react'
import { connect } from 'react-redux'
import { loginWithBlockstack } from '../actions/userActions'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: () => {
      dispatch(loginWithBlockstack())
    }
  }
}

const Login = ({onClick, ...rest}) => {
  return (
    <div className='Login'>
      <button onClick={onClick}>Log In</button>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
