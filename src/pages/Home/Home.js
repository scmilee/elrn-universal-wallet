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
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
