import React, { useState } from 'react';

import { List } from 'lucide-react';

const Navbar = () => {

const [hidden, setHidden] = useState(false)

const handleHidden = () =>{
  setHidden(!hidden)
}

  return (
    <nav className='bg-black/60 flex justify-between h-[3rem] px-8 items-center'>
      <img src="https://static-00.iconduck.com/assets.00/armchair-furniture-icon-512x488-c7l653qr.png" alt="Logo" className='h-8 w-8 '/>

      <div>
      <List size={32} weight="bold" className='md:hidden block text-white' onClick={handleHidden}/>
      </div>

      <ul className='md:flex items-center gap-[1rem] text-white font-semibold hidden'>
        <li className='cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white'>Home</li>
        <li className='cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white'>Services</li>
        <li className='cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white'>About</li>
        <li className='cursor-pointer hover:text-white transition duration-150 hover:border-b-1 hover:border-b-white'>Contact</li>
      </ul>

    {hidden && (
      
    <div className='h-fit w-29 bg-transparent absolute right-0 p-1 top-16' >
      <ul className='text-white font-semibold'>
        <li className='px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150'>Home</li>
        <li className='px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150'>Services</li>
        <li className='px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150'>About</li>
        <li className='px-3 cursor-pointer hover:border-b-white hover:border-b-1 w-max transition duration-150'>Contact</li>
      </ul>
      
    </div>
    )}

    </nav>
  )
}

export default Navbar