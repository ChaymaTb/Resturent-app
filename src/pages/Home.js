import React from 'react'
import Chef from '../components/Chef'
import FindUs from '../components/FindUs'
import Header from '../components/Header'
import Into from '../components/Into'
import About from './About'

const Home = () => {
  return (
    <div>
      <Into/>
      <Header/>
      <About/>
      <Chef/>
      <FindUs/>
    </div>
  )
}

export default Home