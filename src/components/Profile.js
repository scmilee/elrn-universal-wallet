import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({user}) => {
  return {
      user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {}

const styles = {
  imageProfile:{
    height: '5vh',
    borderRadius: '100%'
  },
  profileDiv:{
    position: 'absolute'
  }
};

const Profile = ({ user, handleLookupProfileButton , ...rest}) => {
  return (
    <div>
        <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={(user.profile)?user.profile.profile.image[0].contentUrl:null}></img>
        <p>{user.profile.profile.name || user.profile.username}</p>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
