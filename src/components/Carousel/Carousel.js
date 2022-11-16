// CSS
import "./Carousel.css";

// Hooks
import {useRef } from "react";

const Carousel = ({localData}) => {
  const data = [...localData];
  const carousel = useRef(null);
  const itemRef = useRef(null);

  const handleRightClick = () => {
    carousel.current.scrollLeft += itemRef.current.offsetWidth;
  }
  const handleLeftClick = () => {
    carousel.current.scrollLeft -= itemRef.current.offsetWidth;
  }
  

  const makeAWish = (title, id) => {
    const encriptMsg = encodeURI(`Desejo comprar seu template personalizado: ${title} codigo{${id}}`);
    const message = `https://api.whatsapp.com/send?phone=5577991115142&text=${encriptMsg}`;

    window.open(message);
  }

  return (
    <div className="carousel_templates">
        <i className="bi bi-play push_icon_left" onClick={handleLeftClick}></i>
      <div className="carousel_container" ref={carousel}>
        {data &&
          data.length > 0 &&
          data.map((item) => (
            <div className="item_container" ref={itemRef} key={item.id}>
              <div>
                <img src={item.img} alt={item.title} />
              </div>
              <div className="content_item">
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="buy_container">
                  <a href={item.link} target="_blank" rel="noreferrer" className="btn_demo">
                    <span>Demonstração</span>
                    <i className="bi bi-play"></i>
                  </a>
                  <button className="btn_buy" onClick={() => makeAWish(item.title, item.id)}>
                    <span>Fazer Pedido</span>
                    <i className="bi bi-whatsapp"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        
      </div>
      <i className="bi bi-play push_icon_right" onClick={handleRightClick}></i>
    </div>
  );
};

export default Carousel;
