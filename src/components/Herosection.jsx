import React from 'react'

const Herosection = () => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-no-repeat md:bg-cover bg-min-h-screen h-120 md:min-h-screen'>
        <div className='bg-black/50 h-120 md:min-h-screen'>
            <div className='px-10 pt-16 '>
              <div className='space-y-5 md:space-y-10'>
                <div className='mt-5 space-y-3'>
                  <h1 className='font-bold text-3xl md:text-5xl md:max-w-[50rem] text-white'>Furniture That Feels Like Home</h1>
                  <p className='font-medium  text-xs md:text-base md:max-w-[30rem] md:text-normal text-blanchdiamond/60 '>Discover the perfect blend of style, comfort, and craftsmanship. Our carefully curated collection of furniture is designed to elevate your home and bring your vision to life.</p>
                </div>
                <button className='px-6 py-2 rounded-md bg-black text-white hover:bg-white hover:text-black'>Shop the collection</button>
              </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection
