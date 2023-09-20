import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { FaReact } from 'react-icons/fa';
import { SiTailwindcss, SiFigma, SiNextdotjs } from 'react-icons/si';

const Left = () => {
  const [text] = useTypewriter({
    words: ['Web Developer', 'Frontend Developer', 'Full Stack Developer'],
    loop: true,
    typeSpeed: 15,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  const downloadPdf = () => {
    const myCv = document.createElement('a');
    myCv.href = '../../../public/Santosh Gajurel.pdf';
    myCv.download = '../../../public/Santosh Gajurel.pdf';
    myCv.style.display = 'none';
    document.body.appendChild(myCv);
    myCv.click();
    document.body.removeChild(myCv);
  };
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME TO MY PORTFOLIO</h4>
        <h2 className="text-5xl font-bold text-white">
          Hey! I'm
          <span className="text-designColor capitalize"> Santosh Gajurel</span>
        </h2>
        <h3 className="text-3xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h3>
        <p className="text-base font-bodyFont leading-6 tracking-wide flex flex-nowrap">
          I target to have a successful career as a software engineer. Being
          extremely curious and interested in front-end, web programming. MERN
          Stack, too.
        </p>
      </div>
      {/* Media */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-lg uppercase font-titleFont mb-4">
            BEST SKILL ON
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiNextdotjs />
            </span>
            <span className="bannerIcon">
              <SiTailwindcss />
            </span>
            <span className="bannerIcon">
              <SiFigma />
            </span>
          </div>
        </div>
        <div>
          <h2 className="text-lg uppercase font-titleFont mb-4 w-full">
            Download CV
          </h2>

          <button
            className="bannerIcon w-full p-3  text-sm "
            onClick={downloadPdf}
          >
            Click to Download
          </button>
        </div>
      </div>
    </div>
  );
};

export default Left;
