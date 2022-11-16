import React, { useState } from "react";
import "./ButtonBackTop.css";

const ButtonBackTop = () => {
  const [scrollButtonClass, setScrollButtonClass] = useState("btn_back_top_none");

  const backTop = () => {
    

      const scrolled = document.documentElement.scrollTop;
      
      if (scrolled > 200) {
        setScrollButtonClass("btn_back_top");
      } else {
        setScrollButtonClass("btn_back_top_none");
      }
    
  };

  const scrollTheTop = () => {
    document.documentElement.scrollTop = 0;
  }

  window.addEventListener("scroll", backTop);

  return (
    <>
      <i
        id="back-top"
        className={`bi bi-arrow-up-circle ${scrollButtonClass}`}
        onClick={scrollTheTop}
      ></i>
      ;
    </>
  );
};

export default ButtonBackTop;
