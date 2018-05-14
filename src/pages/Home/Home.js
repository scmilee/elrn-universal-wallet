import React from 'react'
import Profile from '../../components/Profile.js'
const Home = () => {
  return (
    <div className='section'>
      <section className='hero'>
        <div className='hero-body'>
          <div className='container'>
            <h1 className='title'>
                ELRN Universal Wallet
            </h1>
            <h2 className='subtitle'>
                check your balance, shapeshift your stash
            </h2>
          </div>
        </div>
      </section>
      <Profile />
    </div>
  )
}

export default Home
