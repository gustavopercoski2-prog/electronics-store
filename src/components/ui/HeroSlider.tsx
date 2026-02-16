import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

import ps5Pro from "../../assets/ps5-pro.webp";
import macbookPro from "../../assets/MacBook-Pro.png";
import s25Ultra from "../../assets/s25-ultra.png";

const slides = [
  {
    id: 1,
    title: "PlayStation 5 Pro",
    desc: "Console de nova geração",
    img: ps5Pro,
  },
  {
    id: 2,
    title: "MacBook Pro M3",
    desc: "Notebook profissional",
    img: macbookPro,
  },
  {
    id: 3,
    title: "Galaxy S25 Ultra",
    desc: "Smartphone premium",
    img: s25Ultra,
  },
];

export function HeroSlider() {
  return (
    <Swiper>
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <h2>{slide.title}</h2>

          <p>{slide.desc}</p>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
