
import React, { useState } from 'react'
import Pokemon from './Pokemon'


const App = () => {
  const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'
  
  const [pokemonData, setPokemonData] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState('')
  const [error, setError] = useState(null)

  const fetchPokemon = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch(API_BASE + searchedPokemon.toLocaleLowerCase())
      const json = await fetchData.json()
      setError(null)
      setPokemonData(json)
      

    } catch (err) {
      console.log(err)
      setError('no such pokemon')
    }
  }

  return (
    <div>
      <form onSubmit={fetchPokemon}>
        <input type='text'
        value={searchedPokemon}
        onChange={e => setSearchedPokemon(e.target.value)}
        />
        <input type = 'submit'/>
      </form>

      <div>
        {error ? <div> {error}</div>: <Pokemon pokemon = {pokemonData} />}
      </div>
    </div>
   

  );
}

export default App;
