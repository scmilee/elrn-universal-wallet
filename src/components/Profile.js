import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles.js'

const mapStateToProps = ({user}) => {
  return {
      user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Profile = ({ user, ...rest}) => {
  return (
    <div>
      Profile.js
      <br></br>
      <br></br>
      <img style={Object.assign({}, styles.imageLogo)} alt='ELRN' src={'https://s3-us-west-2.amazonaws.com/elrn-static-files/elrn.png'}></img>
      <div>
          <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={(user.profile)?user.profile.profile.image[0].contentUrl:null}></img>
          <p>{user.profile.profile.name || user.profile.username}</p>
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
