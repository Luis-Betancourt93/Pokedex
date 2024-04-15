import React from 'react';

const Textbox = () => {
  return (
    <div className="relative">
      <img
        src="images/textBox1.png"
        alt="Image the the pokedex"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-14 left-96  text-white text-lg font-bold bg-black bg-opacity-50 p-4">
        Text overlay content
      </div>
    </div>


  )
};

export default Textbox;