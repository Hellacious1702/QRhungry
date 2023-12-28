import React from 'react'
import './Navbar.css'

import { Link } from 'react-router-dom';

import QRhungryLogo from './Assets/Logo/QRhungryLogo.png'

const Navbar = () => {
  return (
    <div className='Nav-Main-Wrapper'>
        <section className='Nav-Section'>
            <div className="Nav-Brand">
                <img src={QRhungryLogo} />
            </div>
            <div className="Nav-Menu-Wrapper">
                <Link to="/QRhungry">Home</Link>
                <Link to="/About">About</Link>
                <a href="https://github.com/Hellacious1702" target='_blank'>Github</a>
                <a href="">Donate</a>
            </div>
            <div className="Nav-Button-Wrapper">
              <button id='Signin'>Sign In</button>
              <button id='Signup'>Sign Up</button>
            </div>
        </section>
    </div>
  )
}

export default Navbar