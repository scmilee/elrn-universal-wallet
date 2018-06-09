import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'
import styles from '../styles.js'
import Coin from './Coin'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const Shift = ({ user, shapeShift, ...rest}) => {
  return (
    <div id="shift">
      Shift.js
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
          <div>
            {(
              shapeShift.coins.map( coin => {
                return (<Coin key={coin.name}{...coin}></Coin>)
              })
            )}
          </div>
      </SwipeableViews>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Shift)
