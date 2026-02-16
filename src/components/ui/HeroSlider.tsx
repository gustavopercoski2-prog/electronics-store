import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, EffectFade } from "swiper/modules";
import { ShoppingCart, Info } from "lucide-react";

import ps5Pro from "../../assets/ps5-pro.webp";
import macbookPro from "../../assets/MacBook-Pro.png";
import s25Ultra from "../../assets/s25-ultra.png";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

import "./HeroSlider.css";

const slides = [
  {
    id: 1,
    brand: "Sony",
    title: "PlayStation 5 Pro",
    desc: "O PS5 Pro é até 67% mais potente que o modelo Slim, oferecendo gráficos 4K a 60 FPS com Ray Tracing avançado.",
    img: ps5Pro,
    bg: "bg-blue-950",
    accent: "bg-blue-500",
    textColor: "text-white",
    imgClass: "h-[80%] mt-10 md:mt-14",
  },
  {
    id: 2,
    brand: "Apple",
    title: "MacBook Pro M3",
    desc: 'Performance excepcional, bateria que dura o dia todo e a tela de 16" mais brilhante já feita pela Apple.',
    img: macbookPro,
    bg: "bg-zinc-950",
    accent: "bg-white",
    textColor: "text-black",
    imgClass: "h-[65%] mt-10 md:mt-14",
  },
  {
    id: 3,
    brand: "Samsung",
    title: "Galaxy S25 Ultra",
    desc: "A nova era da inteligência móvel. Processador Snapdragon 8 Elite, câmera de 200MP e acabamento em titânio.",
    img: s25Ultra,
    bg: "bg-zinc-950",
    accent: "bg-cyan-300",
    textColor: "text-black",
    imgClass: "h-[240px] md:h-[360px] mt-10 md:mt-16",
  },
];

export function HeroSlider() {
  function handleBuy(product: string) {
    console.log("Comprar:", product);
  }

  function handleDetails(product: string) {
    console.log("Detalhes:", product);
  }

  return (
    <div className="relative w-full overflow-hidden bg-slate-900 md:h-[600px]">
      <Swiper
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        effect="fade"
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
          delay: 7000,
          disableOnInteraction: false,
        }}
        loop
        className="hero-swiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className={`relative h-full ${slide.bg}`}>
              {/* Gradiente*/}
              <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent" />

              <div className="container mx-auto grid h-full grid-cols-1 items-center px-4 md:grid-cols-2">
                <div className="flex flex-col items-center pb-8 text-center md:items-start md:pb-0 md:pl-12 md:text-left lg:pl-24 text-white">
                  <span
                    className={`mb-3 rounded-full border ${slide.accent}/30 px-3 py-1 text-xs font-bold uppercase backdrop-blur`}
                  >
                    {slide.brand}
                  </span>

                  <h2 className="text-4xl font-bold md:text-6xl">
                    {slide.title}
                  </h2>

                  <p className="mt-4 max-w-md text-white/80">{slide.desc}</p>

                  {/* Botoes */}
                  <div className="mt-6 flex gap-4">
                    <button
                      onClick={() => handleBuy(slide.title)}
                      className={`rounded-full ${slide.accent} px-6 py-3 text-sm font-bold shadow hover:opacity-90 transition ${slide.textColor}`}
                    >
                      Comprar Agora
                    </button>

                    <button
                      onClick={() => handleBuy(slide.title)}
                      className="rounded-full border border-white/20 p-3 hover:bg-white/10 transition"
                    >
                      <ShoppingCart size={20} />
                    </button>

                    <button
                      onClick={() => handleDetails(slide.title)}
                      className="flex items-center gap-2 rounded-full px-4 py-3 text-sm hover:bg-white/10 transition"
                    >
                      <Info size={18} />
                      Detalhes
                    </button>
                  </div>
                </div>

                {/* Imagem */}
                <div className="relative flex h-[300px] items-center justify-center md:h-auto">
                  {/* Glow */}
                  <div
                    className={`absolute h-[300px] w-[300px] rounded-full ${slide.accent} opacity-30 blur-[90px] md:h-[500px] md:w-[500px]`}
                  />

                  <img
                    src={slide.img}
                    alt={slide.title}
                    className={`relative z-10 object-contain drop-shadow-2xl ${slide.imgClass}`}
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
