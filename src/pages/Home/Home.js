import React from 'react'
import Profile from '../../components/Profile.js'
import Login from '../../components/Login.js'
const Home = () => {
  return (
    <div className='section'>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h2 className='title'>
                ELRN Universal Wallet
            </h2>
            <Login></Login>
            <details>
                <summary>in development</summary>
                <li>create new addresses</li>
                <li>check your balance</li>
                <li>shapeshift</li>
            </details>
            <details>
                <summary>completed</summary>
                <li><strike>log in with blockstack</strike></li>
                <li><strike>seed to mnemonic (export functionality)</strike></li>
                <li><strike>mnemonic to seed</strike></li>
                <li><strike>create HD wallet seed</strike></li>
                <li><strike>seed to address</strike></li>
            </details>
          </div>
        </div>
      </section>
      <Profile />
    </div>
  )
}

export default Home
