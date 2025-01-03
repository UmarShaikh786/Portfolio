import TextChanger from "../../TextChanger"
import UmarResume from "../../assets/UmarShaikh_Resume.pdf"
import {FaDownload} from 'react-icons/fa'
import myImage from '../../assets/Umar.png'
import { toast, ToastContainer } from "react-toastify"

// eslint-disable-next-line react/prop-types
export default function Home({darkMode}) {
  const handleToast=()=>{
    toast.success("Resume Downloading...")
  }
  return (
    <div id="Home"className={`${darkMode?'text-white':'text-black'} flex flex-wrap w-full justify-between items-start p-10 md:p-20`} >
      <ToastContainer  />
      <div className="md:w-2/4 md:pt-10">
      <h1 className="text-3xl md:text-6xl font-bold flex leading-normal tracking-tighter">
        {/* This component display transition on Name */}
       <TextChanger/>
      </h1>
      <p className="text-sm md:text-xl md:mt-3 tracking-tighter"> Equipped with a 5-year Master`s degree in Computer Applications and IT, I
 bring proficiency in JavaScript, React, NodeJs, MongoDb and other modern
 web technologies. I am enthusiastic about leveraging my technical
 expertise to drive success at your organization
      </p>
      <a href={UmarResume} target="_blank" download="UmarShaikh_Resume" ><button className="mt-5 gap-3 md:md-10 flex text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]" onClick={handleToast}>
        Download CV
        <FaDownload className="mt-1" color="white"/>
      </button></a>
      </div>
      {/* Image Section */}
      <div className="flex justify-center items-center w-full md:w-1/2 mt-10 md:mt-0">
        
          {/* Image */}
          <img
            className="relative w-96 h-96 md:w-[30rem] md:h-[30rem] object-cover rounded-full border-4 border-[#465697] shadow-2xl hover:shadow-[#465697] hover:shadow-lg hover:scale-105 transition-all duration-300"
            src={myImage}
            alt="Umar Shaikh"
          />
        </div>
    </div>
  )
}
