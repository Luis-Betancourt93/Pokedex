
import React from 'react';


const ImageWithTextOverlay = ({pokemon}) => {

  
  const image = pokemon ? pokemon.sprites.front_default : '';

 
  
  return (

    
        <div className="relative flex justify-center items-center">

          <img
            src="images/pokedex1.png"
            alt="Image the the pokedex"
            className="h-100 ml-52 "
           />

          {pokemon && (
           
          <div className="absolute top-60 -mt-11  h-30 w-40 text-white text-lg font-bold bg-green-800  p-2 mr-7 rounded-lg">
           <div className='flex justify-center items-center '><img className='h-36 mb-10 auto ml-2 ' src={image}/></div>  
          </div>
         )}

        </div>
      
    
  )
};

export default ImageWithTextOverlay;