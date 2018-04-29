import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthenticatedSidebar = ({user}) => {
  const { username } = user.profile
  return (
    <div>
      <ul className='menu-list'>
        <li><NavLink exact to='/' activeClassName='is-active'>Home</NavLink></li>
        <li><NavLink to='/logout' activeClassName='is-active'>Logout</NavLink></li>
      </ul>
    </div>
  )
}

export default AuthenticatedSidebar
