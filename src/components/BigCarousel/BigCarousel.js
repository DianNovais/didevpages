import { useEffect, useRef, useState } from "react";
import "./BigCarousel.css"

const BigCarousel = ({localData}) => {
    const bigContainer = useRef(null);
    const [step, setStep] = useState(1);
    const data = [...localData];
    const dataFilter = data.filter((item) => {
        return item.id < 4;
    });


    setTimeout(() => {
        if(bigContainer){
            if( step > 2){
                bigContainer.current.scrollLeft -= bigContainer.current.offsetWidth * 3;
                setStep(1);
            } else{
                bigContainer.current.scrollLeft += bigContainer.current.offsetWidth;
                setStep(step + 1);
            }
        }
    }, 5000);

    
    
  return (
    <div className="big_container" id="inicio" ref={bigContainer}>
       {dataFilter && dataFilter.map((item) => (
        <div key={item.id} style={{background: `url(${item.img})`, backgroundSize: "cover",
        backgroundRepeat: "no-repeat"}} className="big_img">
            <h2>{item.title}</h2>
        </div>
       ))}
    </div>
  )
}

export default BigCarousel