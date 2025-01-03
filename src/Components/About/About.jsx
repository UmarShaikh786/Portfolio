import { RiArrowRightSLine } from "@remixicon/react";
import aboutImg from "../../assets/Selfie.jpg";
// import userImage from "../Umar.png"
// eslint-disable-next-line react/prop-types
export default function About({ darkMode }) {
  return (
    <div
      id="About"
      className={`${
        darkMode ? "text-white" : "text-black"
      } md:flex flex-col overflow-hidden items-center md:flex-wrap md:justify-center bg-black shadow-xl mx-0 md:mx-20 ${
        darkMode ? "bg-opacity-30" : "bg-opacity-15"
      } rounded-lg p-6 md:p-8`}
    >
      <div className="text-center md:text-left mb-6">
        <h2 className="text-2xl md:text-4xl font-bold">About</h2>
        <p className="text-sm md:text-lg mt-2">
          A passionate developer with experience in both frontend and backend technologies.
        </p>
        </div>
        
  
      <div className="md:flex gap-6 flex-wrap justify-center items-center">
        {/* Frontend Developer Section */}
        <div className="flex gap-3 py-4 w-full md:w-96 justify-center items-start">
          <RiArrowRightSLine size={30} className="mt-1" />
          <span>
            <h1 className="text-xl md:text-2xl font-semibold leading-normal">
              Frontend Developer
            </h1>
            <p className="text-sm md:text-md leading-tight">
              The use of HTML, CSS, JavaScript, Bootstrap, TailwindCSS, and ReactJS for building frontend applications.
            </p>
          </span>
        </div>

        {/* Backend Developer Section */}
        <div className="flex gap-3 py-4 w-full md:w-96 justify-center items-start">
          <RiArrowRightSLine size={30} className="mt-1" />
          <span>
            <h1 className="text-xl md:text-2xl font-semibold leading-normal">
              Backend Developer
            </h1>
            <p className="text-sm md:text-md leading-tight">
              The use of NodeJS, ExpressJS, REST APIs, MongoDB, and MySQL for database management and backend development.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
}
