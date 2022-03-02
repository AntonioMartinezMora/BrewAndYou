import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style/App.css'; 
import Navigation from './Components/Navigation';
import Footer from './Components/Footer';
import Home from './Pages/Home'
// Pages
import Flavours from './Pages/Flavours';
import Coffee from './Pages/Coffee'
import About from './Pages/About'
import Terms from './Pages/Terms'
import Contact from './Pages/Contact'
import Error from './Pages/Error'

function App() {
  return (
    <Router>
      <Navigation/>
      <Routes>
        <Route 
          path="/"
          element={<Home />}
        />
        <Route 
          path="/type/:flavour"
          element={<Flavours />}
        />
        <Route 
          path="/coffees/:id"
          element={<Coffee />}
        />
        <Route 
          path="/about"
          element={<About />}
        />
        <Route 
          path="/terms"
          element={<Terms />}
        />
        <Route 
          path="/contact"
          element={<Contact />}
        />
        <Route 
          path="*"
          element={<Error />}
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
