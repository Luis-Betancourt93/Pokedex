import React from 'react';

const ImageWithTextOverlay = () => {
  return (
    <div className="relative">
      <img
        src="images/pokedex.png"
        alt="Image the the pokedex"
        className="object-cover w-full h-full"
      />
      <div className="absolute top-14 left-96 ml-32 w-6/12 h-5/6 text-white text-lg font-bold bg-black bg-opacity-50 p-4">
        Text overlay content
      </div>
    </div>
  );
};

export default ImageWithTextOverlay;