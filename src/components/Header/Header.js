import React from 'react'
import { connect } from 'react-redux'

import AuthenticatedHeader from './AuthenticatedHeader'
import PublicHeader from './PublicHeader'

const mapStateToProps = ({user, router}) => {
  return {
    user,
    router
  }
}

const Header = ({user, ...rest}) => {
  return (
    <div>
      {
        (user.isAuthenticated)
        ? <AuthenticatedHeader user={user} {...rest} />
        : <PublicHeader {...rest} />
      }
    </div>
  )
}

const HeaderContainer = connect(mapStateToProps)(Header)

export default HeaderContainer
