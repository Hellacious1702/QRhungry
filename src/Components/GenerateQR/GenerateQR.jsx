import React , {useState} from 'react'
import './GenerateQR.css'

import InstagramIcon from './Assets/Icons/instagram.png'
import TwitterIcon from './Assets/Icons/twitter.png'
import WhatsappIcon from './Assets/Icons/whatsapp.png'
import MailIcon from './Assets/Icons/mail.png'
import PhoneIcon from './Assets/Icons/phone.png'
import YoutubeIcon from './Assets/Icons/youtube.png'
import MessageIcon from './Assets/Icons/message.png'
import LinkIcon from './Assets/Icons/link.png'

const GenerateQR = () => {

    let Instagram = "https://www.instagram.com/";
    let Link ="";

    const [userInput,setUserInput] = useState("https://github.com/Hellacious1702/");
    const [userSize,setUserSize] = useState("");
    const [userColor,setUserColor] = useState("000");
    const [userBGColor,setUserBGColor] = useState("fff");
    const [userMargin,setUserMargin] = useState(0);
    const [destination,setDestination] = useState("");
    const [destinationTilte,setDestinationTitle] = useState("Website URL");
    const [inputType,setInputType] = useState("Text");

    let QrAPI = `https://api.qrserver.com/v1/create-qr-code/?size=400x400&data=${destination}${userInput}&color=${userColor}&bgcolor=${userBGColor}&margin=${userMargin}`;
    let QrAPIDownload = `https://api.qrserver.com/v1/create-qr-code/?size=${userSize}&data=${destination}${userInput}&color=${userColor}&bgcolor=${userBGColor}&margin=${userMargin}&download=1`

  return (
    <div className='GenerateQR-Main-Wrapper' >
      <section className="GenrateQR-Section">
        <div className="GenerateQR-Column-Wrapper">
          <div className="GenerateQR-Column" id='GenerateQR-Destination-Column'>
            <div className="GenerateQR-Destination">
              <p>Destination</p>
              <div className="Detination-Buttons-Wrapper">
                  <button onClick={() => {setDestination("");setDestinationTitle("Website URL");setInputType("Text")}} className='Detination-Choose-Buttons'><img src={LinkIcon} /></button>
                  <button onClick={() => {setDestination("https://www.instagram.com/");setDestinationTitle("Instagram Profile");setInputType("Text")}} className='Detination-Choose-Buttons'><img src={InstagramIcon} /></button>
                  <button onClick={() => {setDestination("https://twitter.com/");setDestinationTitle("Twitter Profile");setInputType("Text")}} className='Detination-Choose-Buttons'><img src={TwitterIcon} /></button>
                  <button onClick={() => {setDestination("https://wa.me/91");setDestinationTitle("Whatsapp Number");setInputType("number")}} className='Detination-Choose-Buttons'><img src={WhatsappIcon} /></button>
                  <button onClick={() => {setDestination("mailto:");setDestinationTitle("Mail Address");setInputType("email")}} className='Detination-Choose-Buttons'><img src={MailIcon} /></button>
                  <button onClick={() => {setDestination("+91");setDestinationTitle("Phone Number");setInputType("number")}} className='Detination-Choose-Buttons'><img src={PhoneIcon} /></button>
                  <button onClick={() => {setDestination("");setDestinationTitle("Youtube URL");setInputType("Text")}} className='Detination-Choose-Buttons'><img src={YoutubeIcon} /></button>
                  <button onClick={() => {setDestination("");setDestinationTitle("Message");setInputType("Text")}} className='Detination-Choose-Buttons'><img src={MessageIcon} /></button>
                </div>
            </div>
          </div>

          <div className="GenerateQR-Column">
            <div className="GenerateQR-Input">
            <p>Enter Your {destinationTilte}</p>
            <input type={inputType} onChange={(event) => {setUserInput(event.target.value)}} placeholder="Enter Here"/>
            </div>
            <div className="GenerateQR-Output" id='OutputQR-Wrappper'>
              <p>Live Preview</p>
              <div className="OutputQR-Image-Wrapper">
                <img src={QrAPI} id='OutputQR'/>
              </div>
            </div>
          </div>

          <div className="GenerateQR-Column" id='GenerateQR-Config-Column'>

            <div className="GenerateQR-Config-Size">
              <p>Enter The Size(Height X Width)</p>
              <div className="Size-Config-Buttons-Wrapper">
                <button value="200x200" onClick={(event) => {setUserSize(event.target.value)}} className='Config-Choose-Buttons'>200</button>
                <button value="300x300" onClick={(event) => {setUserSize(event.target.value)}} className='Config-Choose-Buttons'>300</button>
                <button value="400x400" onClick={(event) => {setUserSize(event.target.value)}} className='Config-Choose-Buttons'>400</button>
                <button value="500x500" onClick={(event) => {setUserSize(event.target.value)}} className='Config-Choose-Buttons'>500</button>
                <button value="600x600" onClick={(event) => {setUserSize(event.target.value)}} className='Config-Choose-Buttons'>600</button>
                <button value="700x700" onClick={(event) => {setUserSize(event.target.value)}} className='Config-Choose-Buttons'>700</button>
              </div>
            </div>

            <div className="GenerateQR-Config-Color">
              <p>Choose a Color</p>
              <div className="Color-Config-Buttons-Wrapper">
                <button value="000" style={{color:"#000"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="980000" style={{color:"#980000"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="74125C" style={{color:"#74125C"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="0C8900" style={{color:"#0C8900"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="004B83" style={{color:"#004B83"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="984000" style={{color:"#984000"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="F5C600" style={{color:"#F5C600"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="007291" style={{color:"#007291"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
              </div>
              <div className="Color-Config-Input-Wrapper">
                <input type="text" id='Color-Config-Input' onChange={(event) => {setUserColor(event.target.value)}} placeholder='Enter Custom Color Hexcode:'/>
              </div>
            </div>

            <div className="GenerateQR-Config-BGColor">
              <p>Choose a Background Color</p>
              <div className="BGColor-Config-Buttons-Wrapper">
                <button value="000" style={{color:"#000"}} onClick={(event) => {setUserColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="980000" style={{color:"#980000"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="74125C" style={{color:"#74125C"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="0C8900" style={{color:"#0C8900"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="004B83" style={{color:"#004B83"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="984000" style={{color:"#984000"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="F5C600" style={{color:"#F5C600"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
                <button value="007291" style={{color:"#007291"}} onClick={(event) => {setUserBGColor(event.target.value)}} className='Config-Choose-Buttons'>▣</button>
              </div>
              <div className="BGColor-Config-Input-Wrapper">
                <input type="text" id='BGColor-Config-Input' onChange={(event) => {setUserColor(event.target.value)}} placeholder='Enter Custom Background Color Hexcode:'/>
              </div>
            </div>

            <div className="GenerateQR-Config-Margin">
              <p>Margin: {userMargin}px</p>
              <div className="Margin-Config-Input-Wrapper">
                <input type="range" id='Margin-Config-Input' onChange={(event) => {setUserMargin(event.target.value)}} min={"0"} max={"30"}/>
              </div>
            </div>

          </div>
        </div>

        <div className="GenerateQR-Buttons">
          <button id='DownloadButton'><a href={QrAPIDownload}>Download Your QR</a></button>
          <button id='ResetButton' onClick={() => {setUserInput("https://github.com/Hellacious1702/");setUserSize("");setUserColor("000");setUserBGColor("fff");setUserMargin(0);setDestination("");setDestination("");setDestinationTitle("Website URL");setInputType("Text")}}><a>Reset QR</a></button>
        </div>
      </section>
    </div>
  )
}

export default GenerateQR