import React from 'react'
import '../styles/header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div className='header'>
        <div className='header-title'>
          <p className='title'>Chase the new flavour</p>
          <img src="./assets/spoon.png" alt="spoon_img" />
          <h2>The key to fine dining</h2>
          <p>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
          <Link to='/menu'><button type='button'>Explore menu</button></Link>
        </div>

        <div className='welcome-img'>
          <img src="./assets/welcome.png" alt="welcome_img" />
        </div>
    </div>
  )
}

export default Header