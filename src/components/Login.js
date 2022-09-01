import React, { useState } from 'react'
import Into from './Into'
import '../styles/login.css'

const Login = () => {
  const [email, setEmail] = useState('');
  const [passwrod, setPasswrod] = useState('');
  const [show, setShow] = useState(false);
  return (
    <div className='log_in'>
      <Into/>
      <div >
          {!show && <div className='subscribe'><input type="adress" placeholder='exemple@gmail.com' onChange={(e)=>setEmail(e.target.value)}/>
          <input type="password" placeholder='Enter password' onChange={(e)=>setPasswrod(e.target.value)}/>
          <button className='login_btn'>Log in</button>
          <button className='login_btn' onClick={(e)=>setShow(true)}>Create Account</button></div>}
          { show ? <div className='subscribe register'>
            <input type="text" placeholder='name'/>
            <input type="text" placeholder='family name'/>
            <input type="number" placeholder='phone number'/>
            <input type="text" placeholder='home adress'/>
            <input type="email" placeholder='exemple@gmail.com'/>
            <input type="password" placeholder='password'/>
            <button className='login_btn'>Regitser</button>
          </div>:null}
      </div>

    </div>
  )
}

export default Login