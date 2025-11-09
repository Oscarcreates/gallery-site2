import { useState } from 'react'
import Navbar from './Components/Navbar'
import React from 'react'
import './index.css'
import './App.css'
import Hero from './Components/Hero'
import About from './Components/About'
import Card from './Components/Card'
import More from './Components/more'
import Video from './Components/Video'
import Footer from './Components/Footer'
import Socials from './Components/Socials'
import Contact from './Components/Contact'

function App() {

  return (
    <>
     <Navbar />
     <Hero />
     <About />
     <Card />
     <More />
     <Video />
     <Socials />
       <Contact />
     <Footer />
   

    </>
  )
}

export default App
