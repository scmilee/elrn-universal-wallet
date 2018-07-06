import React from 'react'
import { connect } from 'react-redux'
import styles from '../styles.js'
import {userToggleMaster} from '../actions/userActions.js'
const mapStateToProps = ({user}) => {
  return {
      user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleInputChange: () => {
      dispatch(userToggleMaster())
    }
  }
}

export const Profile = ({ user, handleInputChange, ...rest}) => {
  return (
    <div>
      <br></br>
      <br></br>
      <br></br>
      <img style={Object.assign({}, styles.imageLogo)} alt='ELRN' src={'https://s3-us-west-2.amazonaws.com/elrn-static-files/elrn.png'}></img>
      <div>
          <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={(user.profile && user.profile.profile.image != null)?user.profile.profile.image[0].contentUrl:null}></img>
          <p>{user.profile.profile.name || user.profile.username}</p>
          <br></br>
          <label>Master Mode</label>
          <input name="master" type="checkbox" onChange={handleInputChange}/>
          <br></br>
          
          (Swipe Left)
      </div>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
