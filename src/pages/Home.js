import React from 'react';

import Header from '../components/Header';
import Highlights from '../components/Highlights';
// import Testimonials from '../Testimonials.js';
import About from '../components/About';
import Testimonials from '../components/Testimonials';
// import Footer from '../Footer.js';

const Home = () =>{
    return (
        <main className='main'>
          <section id='home'>
            <Header/>
          </section>
          <section id='menu'>
            <Highlights/>
          </section>
          <section id='about'>
            <About/>
          </section>
          <section id="reviews">
            <Testimonials/>
          </section>
        </main>

    )
}

export default Home;