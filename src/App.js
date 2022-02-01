import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './Style/App.css'; 
import Navigation from './Components/Navigation';
import Home from './Pages/Home'
import Flavours from './Pages/Flavours';
import Coffee from './Pages/Coffee'
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
          path="/coffees/:coffee"
          element={<Coffee />}
        />
        <Route 
          path="*"
          element={<Error />}
        />
      </Routes>
    </Router>
  );
}

export default App;
