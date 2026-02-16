import ps5Pro from "../../assets/ps5-pro.webp";
import macbookPro from "../../assets/MacBook-Pro.png";
import s25Ultra from "../../assets/s25-ultra.png";

const slides = [
  {
    id: 1,
    brand: "Sony",
    title: "PlayStation 5 Pro",
    desc: "Console de nova geração",
    img: ps5Pro,
  },

  {
    id: 2,
    brand: "Apple",
    title: "MacBook Pro M3",
    desc: "Notebook profissional",
    img: macbookPro,
  },

  {
    id: 3,
    brand: "Samsung",
    title: "Galaxy S25 Ultra",
    desc: "Smartphone premium",
    img: s25Ultra,
  },
];

export function HeroSlider() {
  return (
    <div className="w-full bg-slate-900">
      <div className="container mx-auto py-20 text-white">
        {slides.map((slide) => (
          <div key={slide.id}>
            <h2>{slide.title}</h2>

            <p>{slide.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
