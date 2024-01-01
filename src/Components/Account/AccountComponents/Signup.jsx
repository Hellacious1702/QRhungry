import React from 'react'
import './Signup.css'

import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='Account-Main-Wrapper'>
        <section className='Account-Section'>
            <div className="Account-Card">
              <div className='Signup-Main-Wrapper'>
                <div className='Signup-Header'>
                    <h1>Create a New Account.</h1>
                </div>
                <form action="" className='Signup-Form-Wrapper'>
                  <div className='Signup-Inputs'>
                      <input type="text" placeholder='First Name' />
                      <input type="text" placeholder='Last Name' />
                      <input type="email" placeholder='Account Email' required/>
                      <input type="text" placeholder='Create Password' required/>
                      <input type="password" placeholder='Confirm Password' required/>
                  </div>
                  <div className='Signup-Footer'>
                      <button id='SignupButton' type='submit'>Sign Up</button>
                      <p>Already Have An Account?<Link to="/Signin"><span> Sign In </span></Link></p>
                  </div>
                </form>
              </div> 
            </div>
        </section>
    </div>
    
  )
}

export default Signup