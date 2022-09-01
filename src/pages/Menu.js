import React from 'react'
import '../styles/drinks.css'
import Drinks from '../components/Drinks'
import Foods from '../components/Foods'
import Opinion from '../components/Opinion'

const Menu = () => {
  return (
    <div className='menu'>

      <Drinks/>
      <Foods/>
      <Opinion/>
      
    </div>
  )
}

export default Menu