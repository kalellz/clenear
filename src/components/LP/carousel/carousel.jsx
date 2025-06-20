import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

import styles from './Carousel.module.scss';

export default function Carousel() {
  const produtos = [
    { nome: 'Desengraxante Delta 5L', descricao: 'Descrição do produto', img: '/produto.png' },
    { nome: 'Desengraxante Delta 5L', descricao: 'Descrição do produto', img: '/produto.png' },
    { nome: 'Desengraxante Delta 5L', descricao: 'Descrição do produto', img: '/produto.png' },
  ];

  return (
    <div className={styles.container}>
      <Swiper
        slidesPerView={1.2}
        spaceBetween={20}
        centeredSlides={true}
        pagination={{ clickable: true }}
        modules={[Pagination]}
      >
        {produtos.map((item, index) => (
          <SwiperSlide key={index}>
            <img src={item.img} alt={item.nome} />
            <h2>{item.nome}</h2>
            <p>{item.descricao}</p>
            <button>Adicionar Pedido</button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
