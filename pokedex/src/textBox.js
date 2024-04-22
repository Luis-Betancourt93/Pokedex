import React from 'react';

const Textbox = () => {
  return (
    <div className="relative flex justify-center items-center">
      <img
        src="images/textBox1.png"
        alt=""
        className=""
      />
      <div className="absolute top-14 left-auto  text-white text-lg font-bold bg-black bg-opacity-50 p-4">
        Text overlay content
      </div>
    </div>


  )
};

export default Textbox;