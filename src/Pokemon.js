import React from 'react'

const Pokemon = ({pokemon}) => {
  if(pokemon === null) return
  const name = pokemon.name
  const image = pokemon.sprites.front_default
  const types = pokemon.types.map(el => el.type.name)
  const typesString = types.join(', ')
  
  return (
    <div>
    
     
     
    </div>
    
  )
}


export default Pokemon