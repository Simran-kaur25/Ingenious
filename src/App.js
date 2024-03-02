import './App.css';
import About from './components/About'
import Features from './components/Features';
import Footer from './components/Footer';
import Home from './components/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Auth0Provider } from '@auth0/auth0-react';

function App() {
  return (
    <Auth0Provider
      domain="dev-csokjo13rjw0ji07.us.auth0.com"
      clientId="VGl8kCWazP5jeIexaOsOr8MEEXEnG9w5"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/features' element={<Features />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Auth0Provider>
  );
}

export default App;
