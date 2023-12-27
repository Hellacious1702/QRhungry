import './App.css';
import HomeLayout from './Components/HomeLayout';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';

import { BrowserRouter , Route , Routes } from 'react-router-dom';
import PrivacyPolicy from './Components/Pages/PrivacyPolicy';
import Termsandconditions from './Components/Pages/Termsandconditions';
import About from './Components/Pages/About';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/QRhungry' element={<HomeLayout/>}/>
          <Route path='Terms' element={<Termsandconditions/>}/>
          <Route path='PrivacyPolicy' element={<PrivacyPolicy/>}/>
          <Route path='About' element={<About/>}/>
          <Route path='Testing' element={<HomeLayout/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
