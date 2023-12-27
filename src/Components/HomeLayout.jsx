import React from 'react'
import Navbar from './Navbar/Navbar'
import Qrcard from './QrCard/Qrcard'
import Section1 from './Section1/Section1'
import Footer from './Footer/Footer'

const HomeLayout = () => {
  return (
    <div>
        <Section1/>
        <Qrcard/>
    </div>
  )
}

export default HomeLayout