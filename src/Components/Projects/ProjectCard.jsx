import { ToastContainer, toast } from 'react-toastify';

// eslint-disable-next-line react/prop-types
export default function ProjectCard({title,main,link,source,photo,darkMode}) {
  
  const handleDemo=(e)=>{
    if(link=="")
    {
      e.preventDefault()
      toast.error("Demo is not Available");
    }
    
    
  }
  return (
    <>
    <ToastContainer  />
    <div className={`p-3 md:p-6 flex flex-col w-80 mb-5 ${darkMode?'bg-[#0e1e3ed3] shadow-xl shadow-slate-900':'bg-black bg-opacity-15 shadow-slate-900'} rounded-2xl hover:scale-105 transition-all ease-in-out duration-150 hover:border-2 ${darkMode?'border-white':'border-black'}  `}>
        <img className="p-4 h-52" src={photo} alt="Banner Image" />
        <h3 className="px-4 text-xl md:text-2xl font-bold leading-normal">
            {title}
        </h3>
        <p className="px-4 text-sm md:text-md leading-tight py-2">{main}</p>
        
        <div className="mt-2 p-2 md:p-4 flex relative gap-2 md:gap-4">
          <a href={link} target="_blank"><button onClick={handleDemo} className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300  font-semibold rounded-3xl bg-[#465697]">
                Demo
            </button></a>
           <a href={source}> <button className="md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300  font-semibold rounded-3xl bg-[#465697]">
                Source Code
            </button></a>
        </div>
    </div>
    </>
  )
}
