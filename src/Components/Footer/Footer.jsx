import React from 'react'
import './Footer.css'

import { Link } from 'react-router-dom'

import QRhungryLogo from './Assets/Logo/QRhungryLogo.png'

const Footer = () => {
  return (
    <div className='Footer-Main-Wrapper'>
        <section className="Footer-Section">
            <div className="Footer-Section1-Wrapper">
                <div className="Footer-Brand">
                    <img src={QRhungryLogo} />
                </div>
                <div className="Footer-Menu-Main-Wrapper">
                    <div className="Footer-Menu-Wrapper">
                        <h3>Platform</h3>
                        <div className="Footer-Menus">
                            <Link to="/QRhungry">Home</Link>
                            <a href="">Features</a>
                            <a href="">What's new</a>
                            <a href="">Donate</a>
                        </div>
                    </div>
                    <div className="Footer-Menu-Wrapper">
                        <h3>About Project</h3>
                        <div className="Footer-Menus">
                            <Link to="/About">About</Link>
                            <a href="https://hellacious1702.github.io/portfolio/" target='_blank'>Creator's portfolio</a>
                            <a href="https://github.com/Hellacious1702" target='_blank'>Github</a>
                            <a href="">Project repository</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="Footer-Section2-Wrapper">
                <div className="Footer-Copyright">
                    <p>© 2024 QRhungry.All rights reserved</p>
                </div>
                <div className="Footer-Terms">
                    <Link to="/Terms">Terms of Service</Link>
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Footer