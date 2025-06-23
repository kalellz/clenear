import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import styles from "./Carousel.module.scss";

export default function Carousel() {
  const produtos = [
    {
      nome: "Desengraxante Delta 5L",
      descricao: "Descrição do produto",
      img: "/produto.png",
    },
    {
      nome: "Desengraxante Delta 5L",
      descricao: "Descrição do produto",
      img: "/produto.png",
    },
    {
      nome: "Desengraxante Delta 5L",
      descricao: "Descrição do produto",
      img: "/produto.png",
    },
  ];

  return (
    <div className={styles.container}>
      {/* Blur nas pontas */}
      <div className={styles["fade-left"]} />
      <div className={styles["fade-right"]} />

      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {produtos.map((item, index) => (
          <SwiperSlide key={index}>
            <div className={styles.card}>
              <img src={item.img} alt={item.nome} />
              <div>
                <h2>{item.nome}</h2>
                <p>{item.descricao}</p>
                <button>Adicionar Pedido</button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
