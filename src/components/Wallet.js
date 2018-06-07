import React from 'react'

import GenerateWalletSeedButton from './GenerateWalletSeedButton'
import WalletSeed from './WalletSeed'
import MnemonicForm from './MnemonicForm'
import Mnemonic from './Mnemonic'
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
