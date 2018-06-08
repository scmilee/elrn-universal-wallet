import React from 'react'

import GenerateWalletSeedButton from './GenerateWalletSeedButton'
import MnemonicForm from './MnemonicForm'
import Addresses from './Addresses'
import AssetListing from './AssetListing.js'

export default () => {
    return (
        <div>
            <GenerateWalletSeedButton></GenerateWalletSeedButton>
            <MnemonicForm></MnemonicForm>
            <Addresses></Addresses>
            <AssetListing />
        </div>
    )
}
