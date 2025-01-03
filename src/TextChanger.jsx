import { useEffect,useState } from "react";

function TextChanger() {
    const texts=['Hi,I am Umar Shaikh','Hi,I am Umar Shaikh','Hi,I am Umar Shaikh']
    const [currentText, setcurrentText] = useState("");
    const [endValue,setEndValue]=useState(true)
    const [isForward,setIsForward]=useState(true)
    const [index,setIndex]=useState(0)

    useEffect(() => {
        const interval=setInterval(()=>{
            setcurrentText(texts[index].substring(0,endValue));
            if(isForward)
            {
                setEndValue((prev)=>prev+1)
            }else{
                setEndValue((prev)=>prev-1)
            }
            if(endValue>texts[index].length+10)
            {
                setIsForward(false)
            }
            if(endValue<2.1)
            {
                setIsForward(true)
                setIndex((prev)=>prev%texts.length)
            }
},50)
        return ()=>clearInterval(interval)
    },[endValue,isForward,index,texts])
  return (
    <div className="transition ease duration-300">
        {
currentText
        }
      
    </div>
  )
}

export default TextChanger
