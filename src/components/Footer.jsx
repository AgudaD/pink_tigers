import React from 'react'
import { FacebookLogo, XLogo, YoutubeLogo, WhatsappLogo, TiktokLogo } from "@phosphor-icons/react";

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
            <li className='hover:underline cursor-pointer hover:text-amber-400 transition-all duration-100 ease-in-out'>Home</li>
            <li className='hover:underline cursor-pointer hover:text-amber-400 transition-all duration-100 ease-in-out'>About</li>
            <li className='hover:underline cursor-pointer hover:text-amber-400 transition-all duration-100 ease-in-out'>Service</li>
            <li className='hover:underline cursor-pointer hover:text-amber-400 transition-all duration-100 ease-in-out'>Contact</li>
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
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105 hover:text-amber-400 transition-all duration-100 ease-in-out'>
          <FacebookLogo size={22} weight="bold" />
          <p>Facebook</p>
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105 hover:text-amber-400 transition-all duration-100 ease-in-out'>
          <XLogo size={22}  weight="bold" />
          <p>Twitter</p>
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105 hover:text-amber-400 transition-all duration-100 ease-in-out'>
          <YoutubeLogo size={22}  weight="fill" />
          <p>Youtube</p>
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105 hover:text-amber-400 transition-all duration-100 ease-in-out'>
          <WhatsappLogo size={22}/>
          <p>Whatsapp</p>
          </div>
          <div className='flex space-x-1.5 items-center cursor-pointer hover:scale-105 hover:text-amber-400 transition-all duration-100 ease-in-out'>
          <TiktokLogo size={22} weight="fill" className='' />
          <p>Tiktok</p>
          </div>
        </div>
        
      </div>

      
{/* footer bottom part*/}
      <hr className='text-amber-400 mx-18 mt-4'/>
      <p className='text-center mt-2'>@copyright Pink Tigers 2025</p>
    </footer>
  )
}

export default Footer