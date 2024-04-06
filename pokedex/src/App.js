import React, { useState } from 'react';


function App() {
  
  const API_BASE = 'https://pokeapi.co/api/v2/pokemon'
  
  const [pokemonData, setPokemonData] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState('')
  const [error, setError] = useState(null)

  const fetchPokemon = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch(API_BASE + searchedPokemon)
      const json = await fetchData.json()
      setPokemonData(json)


    } catch (err) {

      

    }
  }

  return (
    <div>
      <form onSubmit={fetchPokemon}>
        <input type='text'
        
        />
        <input type = 'submit'/>
      </form>
    </div>
   

  );
}

export default App;
