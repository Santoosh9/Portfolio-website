import React from 'react';
import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/feature/Features';
import About from './components/about/About';
import Project from './components/project/Project';
import Contact from './components/contact/Contact';

import FooterBtn from './components/footer/FooterBtn';

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className=" max-w-screen-xl mx-auto">
          <Banner />
          <About />
          <Features />
          <Project />
          <Contact />
          <FooterBtn />
        </div>
      </div>
    </>
  );
}

export default App;
