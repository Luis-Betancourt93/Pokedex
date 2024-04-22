import React from 'react';

const ImageWithTextOverlay = () => {
  return (
    

   
        <div className="relative flex justify-center items-center">
          <img
            src="images/pokedex1.png"
            alt="Image the the pokedex"
            className="h-100 ml-52 "
           
          />

        <div className="absolute top-60 -mt-11  h-30  text-white text-lg font-bold bg-green-800  p-2 mr-7 ">
            Text overlay content
          </div>
        </div>

    
  )
};

export default ImageWithTextOverlay;