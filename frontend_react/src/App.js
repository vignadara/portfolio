import React from 'react';
import { About, Testimonial, Skills, Header, Footer, Work } from './container';
import { Navbar } from './components';
import './App.scss';

const App = () => {
  return (
      <div className='app'>
          <Navbar />
          <Header/>
          <About/>
          <Work/>
          <Skills/>
          <Testimonial/>
          <Footer/>


      </div>
  )
};

export default App;