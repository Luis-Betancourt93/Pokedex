import React from 'react';

const Textbox = ({pokemon, englishDescription}) => {

  
  const pokeName = pokemon && pokemon.name ? pokemon.name: '';
  const upperCaseName = pokeName.charAt(0).toUpperCase() + pokeName.slice(1)
  return (
    <div className="relative flex justify-center items-center ">
      <img
        src="images/textBox1.png"
        alt=""
        className=""
      />
      <div className="absolute h-78 w-49 text-white text-lg font-pokemon  bg-black bg-opacity-50 ">

        <div className='flex justify-center underline  tracking-widest'> {upperCaseName}</div>
        <div className='flex '>
          <div className='w-1/2  h-44 rounded-lg flex  flex-col  items-center	'>
            <h1 className='underline mb-4'>Description</h1>
            <h2 className='text-base ml-4'>{englishDescription}</h2> 
          </div>
          <div className='w-1/2 bg-green-500 flex justify-center h-44 rounded-lg'>
           <h1 className='underline'>Stats</h1>
          
          </div>
        </div>

      </div>
    </div>


  )
};

export default Textbox;