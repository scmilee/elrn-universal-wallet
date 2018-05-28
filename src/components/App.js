import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'
import Public from './Public'
import Navigator from './Navigator'
import Secret from './Secret'
import Wallet from './Wallet'
import Profile from './Profile'
import Networks from './Networks'
import HandleLogin from './HandleLogin'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const authenticatedPaths = () => {
  return (
      <div className='columns is-gapless'>
            <div className='column is-one-quarter'>
              <Navigator />
            </div>
            <div className='column'>
              <Authenticated path='/' exact name='home' component={Secret} />
              <Authenticated path='/wallet' exact name='home' component={Wallet} />
              <Authenticated path='/profile' exact name='home' component={Profile} />
              <Authenticated path='/networks' exact name='home' component={Networks} />
            </div>
      </div>
  )
}

const App = ({user, ...rest}) => {
  return (
    <main>
          {
            (user.isAuthenticated)
            ? authenticatedPaths()
            : <Public path='/' exact name='home' component={Home} />
          }
          <Route path='/logout' exact component={Logout} />
          <Public path='/login' exact name='login' component={Login} />
          <Public path='/handle-login' name='handle-login' component={HandleLogin} />
    </main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
