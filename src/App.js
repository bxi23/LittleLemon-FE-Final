import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Nav from './components/Nav';
import Home from './pages/Home';
import Footer from "./components/Footer";
import Booking from './pages/Booking';
import ConfirmedBooking from './pages/ConfirmedBooking';

function App() {
  return (
    <Router>
      {/* Include the script to load api.js */}
      <head>
        <script src="https://raw.githubusercontent.com/courseraap/capstone/main/api.js"></script>
      </head>

      <section id='nav'>
        <Nav />
      </section>

      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/reserve" element={<Booking times={false} />} />
        <Route exact path='/bookingConfirmed' element={<ConfirmedBooking/>} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
