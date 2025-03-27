import React from 'react'

const Herosection = () => {
  return (
      <div className='bg-[url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D")] bg-no-repeat bg-cover min-h-screen'>
          <div className='bg-black/50 min-h-screen '>
              <div className='w-150 p-20 space-y-5'>
                <h1 className='font-bold text-6xl text-white'>Furniture That Feels Like Home</h1>
                <p className='font-medium text-normal text-blanchdiamond/60 '>Discover stylish, high quality pieces designed to transform your space</p>
                <button className='px-6 py-2 rounded-md bg-black text-white hover:bg-white hover:text-black'>Shop the collection</button>
              </div>
          </div>
      </div>
  )
}

export default Herosection
