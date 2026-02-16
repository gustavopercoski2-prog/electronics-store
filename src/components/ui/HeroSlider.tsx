import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import ps5Pro from '../../assets/ps5-pro.webp';
import macbookPro from '../../assets/MacBook-Pro.png';
import s25Ultra from '../../assets/s25-ultra.png';

const slides = [
  {
    id: 1,
    title: 'PlayStation 5 Pro',
    img: ps5Pro,
  },
  {
    id: 2,
    title: 'MacBook Pro M3',
    img: macbookPro,
  },
  {
    id: 3,
    title: 'Galaxy S25 Ultra',
    img: s25Ultra,
  },
];

export function HeroSlider() {

  return (

    <Swiper>

      {slides.map((slide) => (

        <SwiperSlide key={slide.id}>

          <img
            src={slide.img}
            alt={slide.title}
            className="h-[300px]"
          />

          <h2>
            {slide.title}
          </h2>

        </SwiperSlide>

      ))}

    </Swiper>

  );

}
