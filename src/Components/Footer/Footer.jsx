import { MdOutlineEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub} from "react-icons/fa";
import {
  RiWhatsappLine,
} from "@remixicon/react";

function Footer() {
  return (
    <div
      id="Contact"
      className="flex flex-col md:flex-row justify-around bg-[#465697] text-white p-10 md:p-12 items-center"
    >
      {/* Contact Heading */}
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h1 className="text-2xl md:text-6xl font-bold">Contact</h1>
        <h3 className="text-sm md:text-2xl font-normal mt-2">
          Feel free to reach out!
        </h3>
      </div>

      {/* Contact Links */}
      <ul className="text-sm md:text-xl space-y-4">
        {/* Email */}
        <li className="flex gap-2 items-center group">
          <MdOutlineEmail
            size={25}
            className="text-white group-hover:text-yellow-400 transition duration-300"
          />
          <a
            href="mailto:umarshaikh641@gmail.com"
            className="hover:underline decoration-white hover:decoration-yellow-400 transition-all duration-300"
          >
            umarshaikh641@gmail.com
          </a>
        </li>

        {/* LinkedIn */}
        <li className="flex gap-2 items-center group">
          <CiLinkedin
            size={25}
            className="text-white group-hover:text-blue-500 transition duration-300"
          />
          <a
            href="https://www.linkedin.com/in/umar-shaikh-a51948243/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-white hover:decoration-blue-500 transition-all duration-300"
          >
            LinkedIn Profile
          </a>
        </li>

        {/* GitHub */}
        <li className="flex gap-2 items-center group">
          <FaGithub
            size={25}
            className="text-white group-hover:text-gray-400 transition duration-300"
          />
          <a
            href="https://github.com/UmarShaikh786"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline decoration-white hover:decoration-gray-400 transition-all duration-300"
          >
            GitHub Profile
          </a>
        </li>

        <li className="flex gap-2 items-center group">
          <RiWhatsappLine
            color="#25D366"
            size={30}
            className="group-hover:cursor-pointer transition duration-300"
          />
          <a
            href="https://wa.me/+919714566958?text=hello"
            target="_blank"
            className="hover:cursor-pointer"
          >
            +91 9714566958
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
