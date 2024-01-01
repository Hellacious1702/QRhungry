import './App.css';
import HomeLayout from './Components/HomeLayout';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter , Route , Routes } from 'react-router-dom';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import Termsandconditions from './Components/Pages/Termsandconditions';
import About from './Components/Pages/About';
import Signin from './Components/Account/AccountComponents/Signin';
import Signup from './Components/Account/AccountComponents/Signup';
import Features from './Components/Pages/Features';
import Whatsnew from './Components/Pages/Whatsnew';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/QRhungry' element={<HomeLayout/>}/>
          <Route path='Terms' element={<Termsandconditions/>}/>
          <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Features' element={<Features/>}/>
          <Route path='WhatsNew' element={<Whatsnew/>}/>
          <Route path='Signin' element={<Signin/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='Testing' element={<HomeLayout/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
