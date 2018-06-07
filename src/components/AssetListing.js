import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import {assetViewContentChange} from '../actions/walletActions'

const assetListing = {
  // TODO: replace with information from libary
  "BTC": {
      "name": "Bitcoin",
      "symbol": "BTC",
      "image": "https://shapeshift.io/images/coins/bitcoin.png",
      "imageSmall": "https://shapeshift.io/images/coins-sm/bitcoin.png",
      "address": "0x12ksalkdjax",
      "balance": "0.0000000141"
  },
  "ETH": {
      "name": "Ether",
      "symbol": "ETH",
      "image": "https://shapeshift.io/images/coins/ether.png",
      "imageSmall": "https://shapeshift.io/images/coins-sm/ether.png",
      "address": "0x5lwklclnoowec",
      "balance": "45.02934"
  },
  "ZEC": {
      "name": "Zcash",
      "symbol": "ZEC",
      "image": "https://shapeshift.io/images/coins/zcash.png",
      "imageSmall": "https://shapeshift.io/images/coins-sm/zcash.png",
      "address": "0x1111klfll3kl2lm3",
      "balance": "203.24493"
  },
  "CLAM": {
      "name": "Clams",
      "symbol": "CLAM",
      "image": "https://shapeshift.io/images/coins/clams.png",
      "imageSmall": "https://shapeshift.io/images/coins-sm/clams.png",
      "address": "0x3l3nfl2l3ld2dfdf",
      "balance": "12345892.392"
  },
  "DOGE": {
      "name": "Dogecoin",
      "symbol": "DOGE",
      "image": "https://shapeshift.io/images/coins/dogecoin.png",
      "imageSmall": "https://shapeshift.io/images/coins-sm/dogecoin.png",
      "address": "0x4lkj2345lkn2l3le",
      "balance": "8675309.92834"
  }
}
const individualAsset = {
    //TECH DEBT: move to some external css file
    margin:'10px 20px',
    height:'50px',
    border: '5px solid black',
    borderRadius:'5px',
    position: 'relative',
    textAlign:'left'
};
const imgStyle = {
    //TECH DEBT: move to some external css file
    height:'90%',
    position:'absolute',
    margin: '2px',
};
const titleStyle = {
    //TECH DEBT: move to some external css file
    margin:'auto 0',
    left:'60px',
    fontSize:'28px',
    position:'absolute'
};
const balanceStyle = {
    //TECH DEBT: move to some external css file
    margin:'8px 0',
    fontSize:'18px',
    right:'5px',
    position:'absolute'
};
const mapStateToProps = (state) => state

const mapDispatchToProps = (dispatch) => {
    return {
        handleAssetClick: (asset) => {
            dispatch(assetViewContentChange(asset))
        }
    }
}

const IndividualAsset = ({ clickHandler, asset}) => {
    return (
        <div
          style={individualAsset}
          onClick={() => clickHandler(asset)}
        >
          <img style={imgStyle} alt={asset.name} src={asset.image}></img>
          <p style={titleStyle}>{asset.name}</p>
          <span style={balanceStyle}>Balance: {asset.balance}</span>
        </div>
    )
}

const AssetListing = ({state,handleAssetClick}) => {
  let renderedAssets = [];
  for (let asset in assetListing){
    renderedAssets.push(
      <IndividualAsset
          key={asset}
          asset={assetListing[asset]}
          clickHandler= {handleAssetClick} />
    );
  }
  return(renderedAssets);
}

export default connect(mapStateToProps, mapDispatchToProps)(AssetListing)
