import React from 'react'

const Testimonial = () => {
  const testimonies = [
    {
      id: 1,
      name: 'Sarah Mai',
      img: 'src/assets/sarah.jpg',
      attestation: 'I honestly was skeptical at first because it seemed to good to be true, still feels so but after giving it a thought and decided to try, i am happy i made that decision in the first place. I would highly recommend.'
    },
    {
      id: 2,
      name: 'Sasha Doe',
      img: 'src/assets/Sasha.jpg',
      attestation: 'Been a while since i have a company rooted to the core with principles, values and high standards and also over deliver on their promises as well.'
    },
    {
      id: 3,
      name: 'Kingsley',
      img: 'src/assets/kingsley.jpg',
      attestation: 'The world would be a better place if all or most companies function with as much efficacy and effectiveness as this company'
    }
  ]
  return (
    <div className='px-[12%] py-[2rem]'>
      <h2 className='text-[2rem] text-center'>TESTIMONIALS</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mt-8'>
      {testimonies.map(testimony => (
        <div className='bg-black/80 p-[1rem] rounded-[0.5rem] flex flex-col justify-between cursor-pointer' key={testimony.id}>
          <h2 className='italic text-white pb-[0.5rem]'>{testimony.attestation}</h2>
          <div className='flex items-center gap-[1rem]'>
            <img src={testimony.img} alt="images" className='w-[3rem] rounded-full h-[3rem] bg-cover bg-center'/>
            <p className='text-white'>{testimony.name}</p>
          </div>
        </div>
      ))}
    </div>
    </div>
  )
}

export default Testimonial