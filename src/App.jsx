import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import './App.css';
import Companies from './components/Companies/Companies';
import Residencies from './components/Residencies/Residencies';
import Value from './components/Value/Value';
import Contact from './components/Contact/Contact';
import GetStarted from './components/GetStarted/GetStarted';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <>
    <div className="App">
      <Router>
      <div>
        <div className="white-gradient" />
      <Header/>
      <Hero/>
      </div>
      <Companies />
      <Residencies/>
      <Value/>
      <Contact/>
      <GetStarted/>

  {/* <Routes>
    <Route path='/residencies' element={<Residencies />} />
    <Route path='/values' element={<Value />} />
    <Route path='/contact' element={<Contact />} />
    <Route path='/getStarted' element={<GetStarted />} />
  </Routes> */}
  <Footer/>
</Router>
      
    </div>
    </>
  );
}

export default App;
