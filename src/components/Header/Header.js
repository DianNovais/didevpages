import { useState } from "react";
import "./Header.css";

const Header = () => {
  const [headerClass, setHeaderClass] = useState(false);

  const openCloseMenu = () => {
    const icon = document.querySelector(".icon_open_menu");
    if (headerClass) {
      icon.style.rotate = "90deg";
      setHeaderClass(false);
    } else {
      icon.style.rotate = "270deg";
      setHeaderClass(true);
    }
  };

  return (
    <header>
      <div
        className={headerClass ? "header_container" : "header_container_none"}
      >
        <a href="#inicio">Inicio</a>
        <a href="#templates">Templates</a>
        <a href="#contatos">Contatos</a>
        <a href="#sobre">Sobre Nós</a>
      </div>
      <div className="fixed_header">
      <img className="logo_img" alt="logo do site" src="/static/images/1667996190613.png"/>
        <i
          className="bi bi-play-fill icon_open_menu"
          onClick={openCloseMenu}
        ></i>
        
      </div>
    </header>
  );
};

export default Header;
