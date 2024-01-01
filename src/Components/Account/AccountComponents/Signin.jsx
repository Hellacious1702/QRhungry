import React from 'react'
import './Signin.css'

import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='Account-Main-Wrapper'>
        <section className='Account-Section'>
            <div className="Account-Card">
              <div className='Signin-Main-Wrapper'>
                <div className='Signin-Header'>
                    <h1>Sign In Into Your Account.</h1>
                </div>
                <form action="" className='Signin-Form-Wrapper'>
                  <div className='Signin-Inputs'>
                      <input type="email" placeholder='Account Email' required/>
                      <input type="password" placeholder='Account Password' required/>
                  </div>
                  <div className='Signin-Footer'>
                      <button id='SigninButton' type='submit'>Sign In</button>
                      <p>Dont Have a Account?<Link to="/Signup"><span> Create New Account </span></Link></p>
                  </div>
                </form>
                
              </div>
            </div>
        </section>
    </div>
  )
}

export default Signin