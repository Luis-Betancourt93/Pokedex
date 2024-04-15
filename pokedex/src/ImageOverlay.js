import React from 'react';

const ImageWithTextOverlay = () => {
  return (
    <div className="relative">
      <img
        src="images/pokedex1.png"
        alt="Image the the pokedex"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-60 left-56 pr-6 ml-24 mt-2.5  h-40  text-white text-lg font-bold bg-green-800  p-4">
        Text overlay content
      </div>
    </div>


  )
};

export default ImageWithTextOverlay;