import React from 'react'

const Herosection = () => {
  return (
    <div className='bg-[url("https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGZ1cm5pdHVyZXxlbnwwfHwwfHx8MA%3D%3D")] bg-cover bg-no-repeat md:bg-cover bg-min-h-screen h-120 md:min-h-screen'>
        <div className='bg-black/50 h-120 md:min-h-screen'>
            <div className='pl-8 pt-16 md:p-20 space-y-5'>
              <h1 className='font-bold text-3xl max-w-[15rem] md:text-5xl md:max-w-[80rem] text-white'>Furniture That Feels Like Home</h1>
              <p className='font-medium text-sm md:text-normal text-blanchdiamond/60 w-50 md:w-115 '>Discover stylish, high-quality pieces designed to transform your space </p>
              <button className='px-6 py-2 rounded-md bg-black text-white hover:bg-white hover:text-black'>Shop the collection</button>
            </div>
        </div>
    </div>
  )
}

export default Herosection
