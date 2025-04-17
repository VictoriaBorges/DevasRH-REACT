import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

const acoes = [
  "Ter o controle total do seu quadro de funcionários",
  "Reduzir falhas no cadastro e duplicidade de informações",
  "Agilizar a rotina administrativa do RH",
  "Tomar decisões com base em dados atualizados em tempo real",
];

export function CarrosselAcoes() {
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    loop: true,
    mode: "snap",
    slides: {
      perView: 1,
      spacing: 20,
    },
  });

  const handlePrev = (): void => instanceRef.current?.prev();
  const handleNext = (): void => instanceRef.current?.next();

  return (
    <section className="w-full max-w-5xl mx-auto px-4 py-24">
      <h3 className="text-3xl md:text-4xl text-[#C58BAA] font-semibold mb-12 text-center font-serif">
        O que você pode fazer com o Devas RH?
      </h3>

      <div className="relative">
  
        <div ref={sliderRef} className="keen-slider">
          {acoes.map((texto, index) => (
            <div
              key={index}
              className="keen-slider__slide bg-[#F8F1EC] px-10 py-12 rounded-2xl shadow-lg text-center text-xl md:text-2xl text-gray-800 font-medium leading-relaxed transition-all duration-300 hover:scale-105 hover:shadow-xl"
            >
              {texto}
            </div>
          ))}
        </div>

      
        <button
          onClick={handlePrev}
          className="absolute left-[-20px] top-1/2 transform -translate-y-1/2 bg-[#EEC9D2] text-white w-10 h-10 rounded-full shadow hover:bg-[#dba4b6] transition duration-300"
          aria-label="Slide anterior"
        >
          ‹
        </button>

       
        <button
  onClick={handleNext}
  className="absolute right-[-20px] top-1/2 transform -translate-y-1/2 bg-[#EEC9D2] text-white w-10 h-10 rounded-full shadow hover:bg-[#dba4b6] transition duration-300"
  aria-label="Próximo slide"
>
  ›
</button>
</div>
</section>
  );
}
