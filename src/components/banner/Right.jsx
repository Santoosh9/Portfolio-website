import React from 'react';
import { profile } from '../../assets/index';

const Right = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative md:">
      <img
        className="w-[355px] h-[430px] lgl:w-[470px] lgl:h-[600px] z-10"
        data-taos-offset="400"
        src={profile}
        alt="profile"
      />
      <div className="absolute bottom-0 w-[350px] h-[300px] lgl:w-[420px] lgl:h-[410px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center "></div>
    </div>
  );
};

export default Right;
