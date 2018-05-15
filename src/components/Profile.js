import React from 'react'
import { connect } from 'react-redux'

const mapStateToProps = ({user}) => {
  return {
      user
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    /* commented until we move blockstack errata to lib-elrn-identity-js */

    // handleLookupProfileButton: (user) => {
    //   let options = {
    //     username: user.profile.username,
    //     app: 'http://localhost:3000',
    //     decrypt: false,
    //     zoneFileLookupUrl: 'http://localhost:6270/v1/names/'
    //   }
      // blockstack.lookupProfile(user.profile.username)
      // .then((profileresponse) => alert(profileresponse))

      // blockstack.getFile("walletSeed", options)
      // .then((fileContents) => {
      //    // get the contents of the file /message.txt
      //    // assert(fileContents === "hello world!")
      //    console.log(fileContents)
      // });
      //
      // blockstack.getFile("learnerPublicKey", options)
      // .then((fileContents) => {
      //    // get the contents of the file /message.txt
      //    // assert(fileContents === "hello world!")
      //    console.log(fileContents)
      // });
      //
      // blockstack.getUserAppFileUrl('learnerPublicKey',
      //   'colealbon.id',
      //   'http://localhost:3000',
      //   'http://localhost:6270/v1/names/')
      //   .then((url) => {
      //     console.log(url);
      //   })
      //   blockstack.getUserAppFileUrl('learnerPrivateKey',
      //     'colealbon.id',
      //     'http://localhost:3000',
      //     'http://localhost:6270/v1/names/')
      //     .then((url) => {
      //       console.log(url);
      //     })

    //}
  }
}

const Profile = ({ user, handleLookupProfileButton , ...rest}) => {
  return (
    <div>
    <h2>logged in as:&nbsp;{JSON.stringify(user.profile.name ? user.profile.name : {})}</h2>
    { /*<button onClick={() => handleLookupProfileButton(user)}>lookup profile</button> */ }
    </div>
  )
}

const ProfileContainer = connect(mapStateToProps, mapDispatchToProps)(Profile)

export default ProfileContainer
