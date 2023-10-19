import React from 'react'
import Navbar from './components/NavBar/navbar'
import Intro from './components/intro/intro'
import Experience from './components/experience/experience'
import Contact from './components/contact/contact'



function App() {
  return (
    <div className='App'>
     <Navbar />
     <Intro />
     <Experience />
     <Contact />
    </div>
  )
}

export default App
