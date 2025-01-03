import {
  FaCss3,
  FaHtml5,
  FaReact,
  FaJs,
  FaSchool,
  FaNode,
  
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiBootstrap,
  SiTailwindcss,
  SiJquery,
  SiExpress,
  SiGit
} from "react-icons/si";

// eslint-disable-next-line react/prop-types
export default function Experience({ darkMode }) {
  return (
    <div id="Skills" className="p-10 md:p-24 ">
      <div className="text-center">
        <h1
          className={`text-2xl md:text-4xl ${
            darkMode ? "text-white" : "text-black"
          }  font-bold mb-8`}
        >
          Skills
        </h1>
      </div>
      <div className="flex flex-wrap justify-center gap-8">
        {[
          { Icon: FaHtml5, name: "HTML", color: "#E34F26" },
          { Icon: FaCss3, name: "CSS", color: "#1572b6" },
          { Icon: FaJs, name: "JavaScript", color: "#F7DF1E" },
          { Icon: FaReact, name: "React Js", color: "#61DAFB" },
          { Icon: FaNode, name: "Node", color: "#47A248" },
          { Icon: SiExpress, name: "Express", color: "yellow" },
          { Icon: SiBootstrap, name: "Bootstrap", color: "purple" },
          { Icon: SiTailwindcss, name: "Tailwind", color: "#61DAFB" },
          { Icon: SiJquery, name: "jQuery", color: "#E34F26" },
          { Icon: SiMysql, name: "MySQL", color: "#f29111" },
          { Icon: SiMongodb, name: "MongoDB", color: "#47A248" },
          { Icon: SiGit, name: "Git", color: "#E34F26" },
        ].map(({ Icon, name, color }, index) => (
          <div
            key={index}
            className={`p-4 ${
              darkMode ? "bg-zinc-950" : "bg-white"
            } w-24 h-28 flex flex-col items-center justify-center ${
              darkMode ? "text-white" : "text-black"
            }  rounded-2xl shadow-lg hover:scale-110 hover:shadow-xl transition-transform duration-300 ease-in-out`}
          >
            <Icon color={color} size={40} />
            <span className="mt-2 text-sm">{name}</span>
          </div>
        ))}
      </div>

      <div id="Education" className="text-center mt-16">
        <h1
          className={`text-2xl md:text-4xl ${
            darkMode ? "text-white" : "text-black"
          } font-bold mb-8`}
        >
          Education
        </h1>
        <div className="flex flex-col items-center gap-5">
          {[
            {
              school: "S.S.C Board ASHISH VIDHALAYA, PATAN",
              detail: "Percentage: 70.83%",
            },
            {
              school: "H.S.C. Board ASHISH VIDHALAYA, PATAN",
              detail: "Percentage: 77.00%",
            },
            {
              school: "BSc (CA & IT) DCIT-HNGU, PATAN",
              detail: "CGPA: 8.13",
            },
            {
              school: "MSc (CA & IT) DCIT-HNGU, PATAN",
              detail: "Currently Pursuing",
            },
          ].map(({ school, detail }, index) => (
            <div
              key={index}
              className={`flex flex-col sm:flex-row gap-6 bg-black ${
                darkMode ? "bg-slate-950" : "bg-opacity-15"
              } w-11/12 sm:w-4/5 lg:w-3/5 p-6 rounded-lg shadow-lg items-center hover:scale-105 hover:shadow-xl hover:border-black transition-transform duration-300 ease-in-out`}
            >
              <FaSchool className="text-blue-500" size={50} />
              <div
                className={`text-center sm:text-left ${
                  darkMode ? "text-white" : "text-black"
                }`}
              >
                <h2 className="text-lg sm:text-xl font-semibold">{school}</h2>
                <p className="text-sm sm:text-md font-thin">{detail}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
