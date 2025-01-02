import { RiCloseLine, RiMenu2Line,RiMoonFill,RiSunFill} from "@remixicon/react";
import { useState } from "react";

// eslint-disable-next-line react/prop-types
export default function Navbar({ handleDarkMode,darkMode}) {
  //State for Menu Handler
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowMenu] = useState(true);
  return (
    <nav className={`flex flex-wrap justify-between md:items-center ${darkMode?'text-white':'text-black'} px-10 pt-6 md:px-20`}>
      <a href="">
        <span className="text-xl font-bold tracking-wide cursor-pointer link-underline link-underline-black ">
          Portfolio
        </span>
      </a>
      <ul
        className={`${
          menu ? "block  absolute end-0" : "hidden"
        }  max-24 py-2 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-50 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6 `}
        onClick={() => {
          openMenu(!menu);
          setShowMenu(!showMenu);
        }} >
        <a href="#About">
          <li className="text-md  transition-all duration-300 p-1 md:p-0 link-underline link-underline-black" >
            About
          </li>
        </a>
        <a href="#Skills">
          <li className="text-md transition-all duration-300 p-1 md:p-0 link-underline link-underline-black">
            Skills
          </li>
        </a>
        <a href="#Education">
          <li className="text-md transition-all duration-300 p-1 md:p-0 link-underline link-underline-black" >
            Education
          </li>
        </a>
        <a href="#Projects">
          <li className="text-md transition-all duration-300 p-1 md:p-0 link-underline link-underline-black">
            Projects
          </li>
        </a>{" "}
        <a href="#Contact">
          <li className="text-md transition-all duration-300 p-1 md:p-0 link-underline link-underline-black ">
            Contact
          </li>
        </a>
        <button className={`text-md transition-all duration-300 p-1 md:p-0 active:rotate-45 delay-100 hover:scale-150 ${darkMode?'hover:text-orange-300':'hover:text-gray-500'}`} onClick={handleDarkMode}>
          {darkMode?<RiSunFill/>:<RiMoonFill/>}
        </button>
      </ul>
      {
        showMenu ? (
          <RiMenu2Line
            size={30}
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowMenu(!showMenu);
            }}
          /> //Close Icon
        ) : (
          <RiCloseLine
            size="30"
            className="md:hidden absolute right-10 top-6 transition-all duration-300"
            onClick={() => {
              openMenu(!menu);
              setShowMenu(!showMenu);
            }}
          />
        ) //Open Icon
      }
    </nav>
  );
}
