import React from 'react'
import { Horse, Heart, Cube } from "@phosphor-icons/react";

const Footer = () => {
  return (
    <footer className="bg-slate-400 text-white h-80">
      <div>

      <div className='flex justify-evenly gap-3'>
        <div className='space-y-1.5' >
          <h2>Quick Links</h2>
          <ul className='hover:underline cursor-pointer'>
            <li>Home</li>
            <li>About</li>
            <li>Service</li>
            <li>Others</li>
          </ul>
        </div>

        <div className='space-y-1.5' >
          <h2>Opening Hours</h2>
          <p>Mondays - Fridays: 9am - 5pm</p>
          <p>Saturdays - Sunday: 10am - 3pm</p>
        </div>

        <div>
          <h2>Socials</h2>
          <Horse/>
          <Heart/>
          <Cube />
        </div>
      </div>

      </div>
      <p className='text-center'>@copyright Pink Tigers 2025</p>

    </footer>
  )
}

export default Footer