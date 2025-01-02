import ProjectCard from "./ProjectCard";
import NotesPhoto from "../../assets/Notes.png";
import Event from "../../assets/Event.png";
import downloader from "../../assets/video-down.png";
import TextUtill from "../../assets/TextUtills.png";
import ChatApp from "../../assets/ChatApp.png";
import Music from "../../assets/music.png";

// eslint-disable-next-line react/prop-types
export default function Projects({darkMode}) {
  return (
    <div id="Projects" className={`p-10  md:p-10 ${darkMode?'text-white':'text-black'} text-center` }>
      <h1 className={`text-2xl md:text-4xl ${darkMode?'text-white':'text-black'} font-bold`}>Projects</h1>
        <div className="py-12 px-8 flex flex-wrap gap-5 justify-center">
        {[
          {
            title: "Notes Application",
main: "Developed a web-based notes application that allows users to create, edit, and delete personal notes. The app features a user-friendly interface and provides functionality like filter notes, search notes, dark mode and user profile for organizing notes efficiently",
link:"https://make-notes-app.vercel.app/",
source:"https://github.com/UmarShaikh786?tab=repositories",
photo:NotesPhoto
          },
          {
            title: "Event Managment System",
main: " A web application for simplifying Event Management.Features include : User authentication, Dynamic online Registration forms, Dynamic events booking forms, Services booking, Real-time payment gateway and More.",
link:"",
source:"https://github.com/UmarShaikh786/Event-Management-System",
photo:Event
          },
          {
            title: "Video Downloader",
main: " This website is used for Download Videos from Youtube, Facebook, Instagram, Twitter, Tiktok, and many more. It is a simple and easy-to-use website that allows you to download videos from various platforms.It displays the video in different formats and quality.",
link:"https://video-downloader-site.netlify.app/",
source:"https://github.com/UmarShaikh786/video-downloader",
photo:downloader
          },
          {
            title: "Text Utills",
main: "A simple website for analyzing text data. It provides various text analysis tools like changing the case of text, removing extra spaces, counting characters, words, and sentences, and Copy Text and feature of Dark Mode.",
link:"https://mytextutills-app.netlify.app/",
source:"https://github.com/UmarShaikh786/TextUtills",
photo:TextUtill
          },
          {
            title: "Chat Application",
main: "Developed a real-time web-based chat application that allows users to send and receive messages instantly. The app supports individual conversations, providing a dynamic and interactive user experience.",
link:"",
source:"https://github.com/UmarShaikh786/ChatAppFrontend",
photo:ChatApp
          },
          {
            title: "Music Application",
main: "Music Application is a web-based application that allows users to listen to music online. The app features a user-friendly interface and provides functionality like play, pause, download and search for songs.",
link:"https://ringtone-downloader-app.netlify.app/",
source:"https://github.com/UmarShaikh786/musicapp",
photo:Music
          },
        ].map(({title,main,link,source,photo},index)=>(
<ProjectCard
          darkMode={darkMode}
            key={index}
            title={title}
           main={main}
           link={link}
           source={source}
           photo={photo}
          />
        ))
        }
        </div>
    
    </div>
  );
}
