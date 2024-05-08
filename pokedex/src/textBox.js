import React from 'react';

const Textbox = ({pokemon, englishDescription}) => {
  
  const pokeName = pokemon && pokemon.name ? pokemon.name: '';
  const types = pokemon && pokemon.types ? pokemon.types.map(el => el.type.name) : []
  const typesString = types.join(', ')
  const upperCaseName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
  const hp = pokemon && pokemon.stats ? pokemon.stats[0].base_stat : []
  const attack = pokemon && pokemon.stats ? pokemon.stats[1].base_stat : []
  const defense = pokemon && pokemon.stats ? pokemon.stats[2].base_stat : []
  const speed = pokemon && pokemon.stats ? pokemon.stats[3].base_stat : []



  return (
    <div className="relative flex justify-center items-center ">
      <img
        src="images/textBox3.png"
        alt=""
        className=""
      />
      <div className="absolute h-78 w-49 text-white text-lg font-pokemon  bg-black bg-opacity-50 ">

        {pokemon && (
          <>
            <div className='flex justify-center underline  tracking-widest'> {upperCaseName}</div>
            <div className='flex '>
              <div className='w-1/2  h-44 rounded-lg flex  flex-col  items-center	'>
                <h1 className='underline mb-4'>Description</h1>
                <div className='overflow-auto'>
                <h2 className='text-base ml-4 h-32'>{englishDescription}</h2> 
                </div>
              </div>
              <div className=' w-1/2  flex  h-44 rounded-lg flex-col pl-12'>
                <h1 className='underline text-center mb-4'>Stats</h1>
                <div className="flex flex-col items-start">
                  <h3 className='ml-4 text-sm '>Type:<span className='uppercase'> {typesString}</span></h3>
                  <h3 className='ml-4 text-sm '>Hp:<span className='uppercase'> {hp}</span></h3>
                  <h3 className='ml-4 text-sm '>Attack:<span className='uppercase'> {attack}</span></h3>
                  <h3 className='ml-4 text-sm '>Defense:<span className='uppercase'> {defense}</span></h3>
                  <h3 className='ml-4 text-sm '>Speed:<span className='uppercase'> {speed}</span></h3>
                </div>
              </div>
            </div>
          </>
        )}
        
      

      </div>
      
    </div>


  )
};

export default Textbox;