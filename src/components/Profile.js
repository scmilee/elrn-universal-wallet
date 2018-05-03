import React from 'react'
import { connect } from 'react-redux'

import * as blockstack from 'blockstack'

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleLookupProfileButton: () => {
      let options = {
        username: 'colealbon.id',
        app: 'http://localhost:3000',
        decrypt: false,
        zoneFileLookupUrl: 'http://localhost:6270/v1/names/'
      }
      // blockstack.lookupProfile('colealbon.id')
      // .then((profileresponse) => alert(profileresponse))

      // blockstack.getFile("learnerPublicKey", options)
      // .then((fileContents) => {
      //    // get the contents of the file /message.txt
      //    // assert(fileContents === "hello world!")
      //    console.log(fileContents)
      // });

      blockstack.getUserAppFileUrl('learnerPublicKey',
        'colealbon.id',
        'http://localhost:3000',
        'http://localhost:6270/v1/names/')
        .then((url) => {
          console.log(url);
        })
        blockstack.getUserAppFileUrl('learnerPrivateKey',
          'colealbon.id',
          'http://localhost:3000',
          'http://localhost:6270/v1/names/')
          .then((url) => {
            console.log(url);
          })

    }
  }
}

const Profile = ({ handleLookupProfileButton }) => {
  return (
    <div>Placeholder for User Profile</div>
    // <button onClick={() => handleLookupProfileButton()}>heyo!</button>
  )
}

const ProfileContainer = connect((state) => ({}), mapDispatchToProps)(Profile)

export default ProfileContainer
