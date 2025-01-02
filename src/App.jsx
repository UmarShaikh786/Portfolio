
import { useState } from "react"
import About from "./Components/About/About"
import Experience from "./Components/Experience/Experience"
import Footer from "./Components/Footer/Footer"
import Home from "./Components/Home/Home"
import Navbar from "./Components/Navbar/Navbar"
import Projects from "./Components/Projects/Projects"


function App() {
  // const [count, setCount] = useState(0)
const[darkMode,setDarkMode]=useState(true)
const handleDarkMode=()=>{
    
    setDarkMode(!darkMode)
  
}
  return (
    <>
     <div className={`bg-gradient-to-b ${darkMode?'from-gray-800 to-black':'bg-white text-black'} h-auto w-full overflow-hidden`}>
    <Navbar handleDarkMode={handleDarkMode} darkMode={darkMode}/>
    <Home darkMode={darkMode}/>
    <About darkMode={darkMode}/>
    <Experience darkMode={darkMode}/>
    <Projects darkMode={darkMode}/>
    <Footer/>
     </div>
    </>
  )
}

export default App
