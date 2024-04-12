import React from 'react';

const FooterBtn = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className="w-full py-10">
      <p className="text-center text-gray-500 text-base">
        © {currentYear}. All rights reserved by Santosh Gajurel
      </p>
    </div>
  );
};

export default FooterBtn;
