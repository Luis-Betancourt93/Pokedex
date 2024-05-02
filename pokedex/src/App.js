
import React, { useState } from 'react'
import Pokemon from './Pokemon'
import ImageWithTextOverlay from './ImageOverlay'
import Textbox from './textBox'


const App = () => {
  const API_BASE = 'https://pokeapi.co/api/v2/pokemon/'
  
  const [pokemonData, setPokemonData] = useState(null)
  const [searchedPokemon, setSearchedPokemon] = useState('')
  const [error, setError] = useState(null)
  const [englishDescription, setEnglishDescription] = useState('');


  const fetchPokemon = async (e) => {
    e.preventDefault()
    try {
      const fetchData = await fetch(API_BASE + searchedPokemon.toLocaleLowerCase())
      const json = await fetchData.json()
      setError(null)
      setPokemonData(json)

       // Fetch species data
       const speciesResponse = await fetch(json.species.url);
       const speciesData = await speciesResponse.json();
       const flavorTextEntries = speciesData.flavor_text_entries;
       
      //  Getting the decription on English
       const description = flavorTextEntries.find(entry => entry.language.name === 'en');
       if (description) {
        setEnglishDescription(description.flavor_text);
      } else {
        setEnglishDescription('No description available');
      }

      
      console.log(englishDescription.flavor_text)

      setSearchedPokemon('')
    } catch (err) {
      console.log(err)
      setError('no such pokemon')
    }
  
  }

  return (
  
    <div className="h-screen w-screen  bg-[url('/public/images/background1.png')] bg-cover">

      <div className=' bg-gray-500 bg-opacity-50 h-full'>

        <form onSubmit={fetchPokemon} class="max-w-md mx-auto">   
            <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
            <div class="relative">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                    </svg>
                </div>
                <input type="text" value={searchedPokemon} onChange={e => setSearchedPokemon(e.target.value)} id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Your Pokemon" required />
                <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
            </div>
           
        </form>

        <div className=' '> 
        
        <ImageWithTextOverlay pokemon = {pokemonData}/>
        </div>
        
        <div className=''>
          <Textbox pokemon = {pokemonData} englishDescription={englishDescription}/>
        </div>
        
      {/* Pokemon Information */}
      <div>
        {error ? <div> {error} </div>: <Pokemon pokemon = {pokemonData} />} 
      </div>

      </div>

    </div>
   
   

  );

 
}

export default App;

