import React from 'react'
import { connect } from 'react-redux'
import SwipeableViews from 'react-swipeable-views'

const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch, ownProps) => ({})

const styles = {
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
  slideContainer: {
    height:'50vh',
    width: '30vw'
  },
};

const createAsset = (coins) => {
    let coinListing =[]
    let previous = null;
    for( let asset in coins){
        if (previous){
          coinListing.push(
            <div>
                <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={coins[asset].image}/> -> <img style={Object.assign({}, styles.imageProfile)}alt='alt' src={coins[previous].image}/>
            </div>
          )
        }
        previous = asset;
    }
    return coinListing;
}

const Shift = ({ user, shapeShift, ...rest}) => {
  return (
    <div>
      <SwipeableViews containerStyle={Object.assign({}, styles.slide, styles.slideContainer, {})}>
         <div > {createAsset(shapeShift.coins)}</div>
      </SwipeableViews>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Shift)
