import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthenticatedNavigator = ({user}) => {
  return (
    <div>
      <ul className='menu-list'>
        <li><NavLink exact to='/' activeClassName='is-active'>Home</NavLink></li>
        <li><NavLink to='/wallet' activeClassName='is-active'>Wallet</NavLink></li>
        <li><NavLink to='/profile' activeClassName='is-active'>Profile</NavLink></li>
        <br />
        <br />
        <li><NavLink to='/logout' activeClassName='is-active'>Logout</NavLink></li>
      </ul>
    </div>
  )
}

export default AuthenticatedNavigator
