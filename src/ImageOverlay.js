
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
        <div className="relative flex justify-center items-center">
          <img
            src="images/pokedex1.png"
            alt="Image the the pokedex"
            className="h-100 ml-52 "
           />
          {pokemon && (
          <div className={`${backgroundColorClass} absolute top-60 -mt-11  h-30 w-40 text-white text-lg font-bold   mr-7 rounded-lg`}> 
           <div className='flex justify-center items-center '><img className='h-34  auto ml-2 ' src={image}/></div> 
          </div>
         )}

        </div>

      
    
  )
};

export default ImageWithTextOverlay;