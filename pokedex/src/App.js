
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
      setSearchedPokemon('')

    } catch (err) {
      console.log(err)
      setError('no such pokemon')
    }
  }

  return (
  
    <div className='h-screen w-screen bg-blue-500 '>
    

      <form onSubmit={fetchPokemon}>
        <input type='text'
        value={searchedPokemon}
        onChange={e => setSearchedPokemon(e.target.value)}
        />
        <input type = 'submit'/>
      </form>
      <div className='flex justify-center items-center'>
      <img src='images/pokedex.png' className='max-w-full max-h-full'/>
      </div>
      <div>
        {error ? <div> {error}</div>: <Pokemon pokemon = {pokemonData} />}
      </div>
    </div>
   
   

  );

 
}

export default App;
