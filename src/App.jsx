import { useState } from 'react';

import Navbar from './components/navbar/Navbar';
import Banner from './components/banner/Banner';
import Features from './components/feature/Features';
import About from './components/about/About';

function App() {
  return (
    <>
      <div className="w-full h-auto bg-bodyColor text-lightText px-4">
        <Navbar />
        <div className=" max-w-screen-xl mx-auto">
          <Banner />
          <About />
          <Features />
        </div>
      </div>
    </>
  );
}

export default App;
