
import React from 'react';


const ImageWithTextOverlay = ({pokemon}) => {
  
  const types = pokemon && pokemon.types ? pokemon.types.map(el => el.type.name) : [];
  const image = pokemon ? pokemon.sprites.front_default : '';

  // default background color
  let backgroundColorClass = 'bg-black'

  // diffrent color depending on pokemon 'types'
  const backgroundColors = {
    normal: 'bg-normal',
    fire: 'bg-fire',
    water: 'bg-water',
    electric: 'bg-electric',
    grass: 'bg-grass',
    ice: 'bg-ice',
    fighting: 'bg-fighting',
    poison: 'bg-poison',
    ground: 'bg-ground',
    flying: 'bg-flying',
    psychic: 'bg-psychic',
    bug: 'bg-bug',
    rock: 'bg-rock',
    ghost: 'bg-ghost',
    dragon: 'bg-dragon',
    dark: 'steel',
    fairy: 'bg-fairy'

  }
  
  // checking if 'types' is equal to one of the types listed in backgroundColors. 
  for (const type of types) {
    if (type in backgroundColors) {
      backgroundColorClass = backgroundColors[type]
      break;
    }
  }


  return (

        // Pokedex and Poke Image
        <div className="relative flex justify-center items-center md:w-screen">
          <img
            src="images/pokedex1.png"
            alt="Image the the pokedex"
            className=" pl-36 md:p-0 md:ml-40  md:h-100"
           />
          {pokemon && (
          <div className={`${backgroundColorClass} absolute md:top-60 md:-mt-11 ml-10 md:-ml-2 lg:-ml-10 h-24 md:h-30  w-32 md:w-40 lg:w-44 text-white text-lg font-bold   mr-7 rounded-lg`}> 
           <div className='flex justify-center items-center '><img className=' md:h-34  auto ml-2 ' src={image}/></div> 
          </div>
         )}

        </div>

      
    
  )
};

export default ImageWithTextOverlay;