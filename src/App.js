import "./App.css";

import BigCarousel from "./components/BigCarousel/BigCarousel";
import Carousel from "./components/Carousel/Carousel";
import Contatos from "./components/Contatos/Contatos";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

// hooks
import { useState, useEffect, useRef } from "react";
import ButtonBackTop from "./components/ButtonBackTop/ButtonBackTop";

function App() {
  const [data, setData] = useState([]);
  const app = useRef(null);

  useEffect(() => {
    fetch("/static/templates.json")
      .then((response) => response.json())
      .then(setData);
  }, []);

  return (
    <div className="App" ref={app}>
      <Header />
      <BigCarousel localData={data} />
      <h2 id="templates">Templates</h2>
      <Carousel localData={data} />
      <Contatos />

      <div className="sobre_container">
        <h2 id="sobre" name="sobre">
          Criamos do zero
        </h2>
        <p>
          Sou desenvolvedor front-end e venho estudando e praticando as mais
          avançadas tecnologias do mercado e aqui tenho alguns templates(sites,
          pages, leadpages...) que vendo ou programo do zero, qualquer template
          desse da nossa página posso modificar cores, alguns textos e imagens
          para servi ao seu negócio, também podemos fazer um modelo que você
          imaginar, muitos perguntam dos valores das páginas,{" "}
          <b>os templates já prontos e com algumas modificações</b> ficam mais
          em conta por que da menos trabalho então fazemos por <b>10 reais</b>{" "}
          por enquanto, <b>já criar um do zero da forma que você quer</b>, o
          orçamento deve ser maior, porém não ultrapassa os <b>40 reais</b>,
          pagamento único, a hospedagem colocamos no netlify para você que
          também é de graça, lembrando são leadpages somente para apresentar seu
          trabalho e não um sistema completo, um sistema completo á bem mais
          custos e um desenvolvimento maior.
        </p>
        <p className="warning_container">
          Comprando qualquer template aqui não significa que você vai ser o dono
          do mesmo, você só terá permissão de usa-lo e personalizar como do seu
          gosto, mas não significa ser de uso exclusivo seu, outros usuários
          podem comprar do nosso template e usufruir do mesmo template da sua
          compra.
        </p>
      </div>
      <ButtonBackTop />
      <Footer />
    </div>
  );
}

export default App;
