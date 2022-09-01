import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='navbar'>
            <div>
                <img src="../assets/pngegg.png" alt="logo" />
            </div>
            <ul className='navigation'>
                <Link to='/'> <li>Home</li> </Link>
                <Link to='/menu'> <li>Menu</li> </Link>
                <Link to='/about'> <li>About</li> </Link>
            </ul>
            <div className='login'>
                <ul>
                    <Link to='/logIn'><li>Log In</li></Link>
                    <div style={{width:'1px', height:'20px', backgroundColor:'grey'}}></div>
                    <Link to='/bookTable'><li>Book Table</li></Link>
                </ul>
            </div>

        </div>
    )
}

export default Navbar