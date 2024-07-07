import React from 'react'
import Herosect from "./Components/Herosect"
import {About} from "./Components/About"
import {Skill} from "./Components/Skill"
import Projects from "./Components/Projects"
import Footer from "./Components/Footer"
function page() {
  return (
    <div>
   <Herosect/>
   <About/>
   <Skill/>
   <Projects/>
   <Footer/>
    </div>
  )
}

export default page
