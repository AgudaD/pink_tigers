import React from 'react';
const Navbar = () => {
  return (
    <nav className='bg-black h-[5rem] flex justify-between px-[12%] items-center'>
      <img src="./public/vite.svg" alt="logo" />
      <ul className='flex items-center gap-[1rem] text-white'>
        <li className='cursor-pointer hover:text-white transition duration-150 border-b-1 border-b-black hover:border-b-white'>Home</li>
        <li className='cursor-pointer hover:text-white transition duration-150 border-b-1 border-b-black hover:border-b-white'>Services</li>
        <li className='cursor-pointer hover:text-white transition duration-150 border-b-1 border-b-black hover:border-b-white'>About</li>
        <li className='cursor-pointer hover:text-white transition duration-150 border-b-1 border-b-black hover:border-b-white'>Contact</li>
      </ul>
    </nav>
  )
}

export default Navbar