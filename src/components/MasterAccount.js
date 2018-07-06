import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import GenerateAccountAddressButton from './GenerateAccountAddressButton.js'
import styles from '../styles.js'

const mapStateToProps = ({ wallet}) => {
  return {
      wallet: wallet
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({})

export const MasterAccount = ({ wallet, ...rest}) => {


  return (
    <div>
    <GenerateAccountAddressButton/>
    <br/>
  	{wallet.accountCount > 0 ? (
       <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
        <div>
          {(
           	wallet.accountAddressess.map( address => {
              return (
                <div>${address}</div>     
              )
            })
          )}
        </div>
    </SwipeableViews>
      ) : (
      <br/>
      )}
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(MasterAccount);