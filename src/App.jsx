import React from 'react'
import Navbar from './Components/Navbar/navbar'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'

import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'


const App = () => {
      return(
          <div>
              <Navbar/>
              <Hero/>
              <About/>
              <Skills/>
              <Project/>
              <Contact/>
              
              
              
          </div>
      )
}
export default App;


