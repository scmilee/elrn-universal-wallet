import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const AuthenticatedNavigator = (location, ...rest) => {
  return (
    <div>
      <ul className='menu-list'>
        <li><NavLink exact to='/' activeClassName='is-active'>Home</NavLink></li>
        <li><NavLink to='/wallet' activeClassName='is-active'>Wallet</NavLink></li>
        <li><NavLink to='/profile' activeClassName='is-active'>Profile</NavLink></li>
        <li><NavLink to='/networks' activeClassName='is-active'>Networks</NavLink></li>
        <br />
        <li><NavLink to='/logout' activeClassName='is-active'>Logout</NavLink></li>
      </ul>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticatedNavigator)
