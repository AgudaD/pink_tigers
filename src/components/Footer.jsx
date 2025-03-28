import React from 'react'
import { FacebookLogo, XLogo, YoutubeLogo, TiktokLogo, InstagramLogo } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-black/60 text-white p-5 h-fit">

{/* Footer top part */}
      <div className='grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-3 mx-5'>

        <div className='flex flex-col md:pl-7 lg:pl-7'>
          <p>PKT </p>
          <p>Furniture That Feels Like Home</p>
        </div>

{/* Quick links section */}
        <div className='space-y-1.5 md:px-15 lg:px-15' >
          <h2 className='text-lg font-semibold '>Quick Links</h2>
          <ul>
            <li className='hover:underline cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out'>Home</li>
            <li className='hover:underline cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out'>About</li>
            <li className='hover:underline cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out'>Service</li>
            <li className='hover:underline cursor-pointer hover:scale-105 transition-all duration-100 ease-in-out'>Contact</li>
          </ul>
        </div>

{/* Opening hours section */}
        <div className='space-y-1.5 ' >
          <h2 className='text-lg font-semibold'>Opening Hours</h2>
          <p>Mondays - Fridays: 9am - 5pm</p>
          <p>Saturdays - Sunday: 10am - 3pm</p>
        </div>

{/* Socials section */}
        <div className='space-y-1.5 md:px-15 lg:px-15'>
          <h2 className='text-lg font-semibold'>Socials</h2>
          <div className='flex gap-2'>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105  transition-all duration-100 ease-in-out '>
          <FacebookLogo size={22} weight="bold" />
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105  transition-all duration-100 ease-in-out '>
          <XLogo size={22}  weight="bold" />
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105  transition-all duration-100 ease-in-out '>
          <InstagramLogo size={22}/>
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105  transition-all duration-100 ease-in-out '>
          <TiktokLogo size={22} weight="fill" className='' />
          </div>
          </div>
        </div>
        
      </div>

      
{/* footer bottom part*/}
      <hr className='text-blanchdiamond/60 md:mx-18 lg:mx-18 mx-5  mt-4'/>
      <p className='text-center mt-2'>Copyright&copy;2025 Pink Tigers </p>
    </footer>
  )
}

export default Footer