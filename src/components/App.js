import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import { Link } from 'react-router-dom'
import { Route, Switch } from 'react-router'

import Sidebar from './SideBar/Sidebar'

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

export default () => (
  <ConnectedSwitch>
    <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
  </ConnectedSwitch>
)
