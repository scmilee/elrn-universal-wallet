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
  },
  imageLogo:{
    width: '10vw',
  },
  slideContainer: {
    padding:'2vh AUTO',
    height:'50vh',
    width: '30vw'
  },
  slide: {
    margin: '5vh 15vw',
    padding: '2vh 0',
    height: '70vh',
    width: '60vw',
    backgroundColor: '#565656',
    color: '#bab6b6',
    position: 'relative',
    textAlign: 'center',
    fontSize: '3vh',
  },
};

const Profile = ({ user, ...rest}) => {
  return (
    <div>
      <img style={Object.assign({}, styles.imageLogo)} alt='ELRN' src={'https://s3-us-west-2.amazonaws.com/elrn-static-files/elrn.png'}></img>
      <div>
          <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={(user.profile)?user.profile.profile.image[0].contentUrl:null}></img>
          <p>{user.profile.profile.name || user.profile.username}</p>
      </div>
      <br/>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)
