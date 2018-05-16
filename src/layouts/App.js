import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'

import Authenticated from '../components/Authenticated/Authenticated'
import Public from '../components/Public/Public'
import Navigator from '../components/Navigator/Navigator'

import HandleLogin from '../pages/Login/HandleLogin'
import Home from '../pages/Home/Home'
import Login from '../pages/Login/Login'
import Logout from '../pages/Logout/Logout'
import Secret from '../pages/Secret/Secret'
import Wallet from '../pages/Wallet/Wallet'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const authenticatedPaths = () => {
  return (
    <div>
      <Authenticated path='/' exact name='home' component={Secret} />
      <Authenticated path='/wallet' exact name='home' component={Wallet} />
    </div>
  )
}

const App = ({user, ...rest}) => {
  return (
    <main>
      <div className='columns is-gapless'>
        <div className='column is-one-quarter'>
          <Navigator />
        </div>
        <div className='column'>
          {
            (user.isAuthenticated)
            ? authenticatedPaths()
            : <Public path='/' exact name='home' component={Home} />
          }
          <Route path='/logout' exact component={Logout} />
          <Public path='/login' exact name='login' component={Login} />
          <Public path='/handle-login' name='handle-login' component={HandleLogin} />
        </div>
      </div>
    </main>
  )
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(App)
