import { useState } from "react";
import "../../styles/lp.scss";
import Carousel from "./carousel/carousel";

export default function LandingPage() {
  return (
    <main>
      <div className="Faixa-1">
        <div>
          <h1>Clenear</h1>
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
    </main>
  );
}
