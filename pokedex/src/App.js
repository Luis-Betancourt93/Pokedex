import React, { useState } from 'react';


function App() {
  
  const API_BASE = 'https://pokeapi.co/api/v2/pokemon'
  
  const [pokemonData, setPokemonData] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState('')
  const [error, setError] = useState(null)

  return (
    <div>

    </div>
   

  );
}

export default App;
