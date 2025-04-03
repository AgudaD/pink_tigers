import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Testimonial from './components/testimonial'
import Herosection from './components/Herosection'
import Faq from './components/Faq'
import About from './components/About'

function App() {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Faq />
      <Testimonial />
      <Footer/>
      <About/>
    </div>
  )
}

export default App
