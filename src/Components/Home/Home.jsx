import TextChanger from "../../TextChanger"
import UmarResume from "../../assets/UmarShaikh_Resume.pdf"
import {FaDownload} from 'react-icons/fa'

// eslint-disable-next-line react/prop-types
export default function Home({darkMode}) {
  return (
    <div id="Home"className={`${darkMode?'text-white':'text-black'} flex w-full justify-between items-start p-10 md:p-20`} >
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
      <a href={UmarResume} target="_blank" download="UmarShaikh_Resume" ><button className="mt-5 gap-3 md:md-10 flex text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]">
        Download CV
        <FaDownload className="mt-1" color="white"/>
      </button></a>
      </div>
      <div>
        <img className="" src="" alt="" />
      </div>
    </div>
  )
}
