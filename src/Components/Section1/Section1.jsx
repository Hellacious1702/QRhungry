import React from 'react'
import './Section1.css'

const Section1 = () => {
  return (
    <div className='Section1-Main-Wrapper'>
      <section className='Section1-Section'>
        <div className="Section1-Content-Wrapper">
          <div className="Section1-Heading">
            <h1>Generate and Publish <br /> <span>Dynamic</span> QR Codes.</h1>
          </div>
          <div className="Section1-Paragraph">
            <p>QRHungry is a dynamic QR Code Generator . It Allows user to easily create customized QR Code for sharing and embedding on their website. <br /> A Project By <span>Varad Sandeep Naik</span></p>
          </div>
          <div className="Section1-Buttons">
            <button id='GetStarted'>Get Started</button>
            <button id='WatchDemo'>Watch Demo</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Section1