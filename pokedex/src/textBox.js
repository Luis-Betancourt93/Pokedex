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
      <div className="absolute h-78 w-49 text-white text-lg font-bold bg-black bg-opacity-50 ">

        <div className='flex justify-center underline font-extrabold tracking-widest'> {upperCaseName}</div>
        <div className='flex '>
          <div className='w-1/2 bg-red-400  h-44 rounded-lg flex justify-center'>
            <h1 className=' '>{englishDescription}</h1> 
          </div>
          <div className='w-1/2 bg-green-500 flex justify-center h-44 rounded-lg'>
           Stats
          </div>
        </div>

      </div>
    </div>


  )
};

export default Textbox;