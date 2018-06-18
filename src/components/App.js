import React from 'react'
import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import Authenticated from './Authenticated'
import Public from './Public'
import Secret from './Secret'
import HandleLogin from './HandleLogin'
import Home from './Home'
import Login from './Login'
import Logout from './Logout'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const App = ({user, ...rest}) => {
  return (
    <main>
          {
            (user.isAuthenticated)
            ? <Authenticated path='/' exact name='home' component={Secret} />
            : <Public path='/' exact name='home' component={Home} />
          }
          <Route path='/logout' exact component={Logout} />
          <Public path='/login' exact name='login' component={Login} />
          <Public path='/handle-login' name='handle-login' component={HandleLogin} />
    </main>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
