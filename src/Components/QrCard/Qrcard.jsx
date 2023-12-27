import React from 'react'
import GenerateQR from '../GenerateQR/GenerateQR'
import './Qrcard.css'

const Qrcard = () => {
  return (
    <div className='Qrcard-Main-Wrapper'>
        <section className='Qrcard-Section'>
            <div className="QrCodeGenerator">
                <GenerateQR/>
            </div>
        </section>
        
    </div>
  )
}

export default Qrcard