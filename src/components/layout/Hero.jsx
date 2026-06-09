import pic1 from "@/components/assets/images/slides/pic1.png";
import pic2 from "@/components/assets/images/slides/pic2.png";
import pic3 from "@/components/assets/images/slides/pic3.png";
import { useState } from "react";
export default function Hero() {
  const [currentslide, setCurrentslide] = useState(0);
  const slides = [
    {
      image: pic1,
      title: "Theatre",
      subtitle: "Stories that come alive on stage.",
    },
    {
      image: pic2,
      title: "Publications",
      subtitle: "A journal of theatre and culture.",
    },
    {
      image: pic3,
      title: "Community",
      subtitle: "Events and artistic expression.",
    },
  ];
  const nextslide = () => {
    setCurrentslide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };
  const prevslide = () => {
    setCurrentslide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };
  return (
    <>
      <div className="border border-b-2 border-[#C86432] relative h-[70vh] rounded-3xl max-w-7xl mx-auto  overflow-hidden">
        <img
          src={slides[currentslide].image}
          alt={slides[currentslide].title}
          className="w-full h-full object-cover"
        />
        <div>
          <div className="absolute inset-0 flex flex-col justify-end p-12">
            <h1 className="text-white text-8xl font-bold mb-7">
              {slides[currentslide].title}
            </h1>
            <p className="text-white text-4xl font-light">
              {slides[currentslide].subtitle}
            </p>
          </div>
        </div>
        <button
          onClick={prevslide}
          className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
        >
          ←
        </button>

        <button
          onClick={nextslide}
          className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 backdrop-blur-sm text-white p-3 rounded-full hover:bg-white/30 transition-all"
        >
          →
        </button>
      </div>
    </>
  );
}
