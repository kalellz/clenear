import { useState } from "react";
import "../../styles/lp.scss";
import Carousel from "./carousel/carousel";
import TopCard from "./cards/topCard";
import BottomCard from "./cards/bottomCard";

export default function LandingPage() {
  return (
    <main>
      <div className="Faixa-1">
        <div>
          <img src="./logo1.png" className="logo" />
          <p>Limpeza eficaz para todas as necessidades</p>
        </div>
        <img src="./baldes.png" className="image" />
      </div>
      <div className="Faixa-2">
        <div className="texts">
          <h1>
            Fale com a Clenear e <br />
            <span>Descubra a Diferença</span>
          </h1>
          <button>Entre em contato</button>
        </div>
        <div>
          <Carousel />
        </div>
      </div>
      <div className="Faixa-3">
        <div className="cards">
          <TopCard title="Sobre a Clenear" desc="Desde 2006, a Clenear desenvolve produtos de limpeza com foco em qualidade, responsabilidade e respeito ao meio ambiente. Cada fórmula carrega o compromisso da empresa com a sustentabilidade e a eficácia." img='./icon1.png'/>
          <TopCard title="Produtos" desc="A Clenear oferece uma linha de produtos poderosos, práticos e eficazes, com destaque para opções biodegradáveis. Esses produtos são ideais para transformar espaços sujos em ambientes impecáveis, promovendo limpeza e bem-estar." img='./icon2.png'/>
          <BottomCard title="Contato" desc="Tire dúvidas, peça orçamentos ou conheça nossos produtos com um clique!" img='./icon3.png' button="Atendimento WhatsApp"/>
          <BottomCard title="Sustentabilidade" desc="A Clenear se preocupa com o impacto ambiental em cada etapa, reforçando o compromisso com um futuro mais limpo e consciente." img='./icon4.png' button="Conheça nossas ações"/>
        </div>
      </div>
      <img src="./pic3.png" className="pic3"/>
    </main>
  );
}
