import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import imagePhoto from '../assets/image.png';
import imageCopyPhoto from '../assets/image copy.png';
import snapchatPhoto from '../assets/snapchat-1178432144.jpg';
import childhoodPhoto from '../assets/img_20201130_093851.jpg';

export default function MemoryCarousel() {
  const memories = [
    { id: 1, caption: "Childhood Wonder", subtitle: "Sweet beginnings", image: childhoodPhoto },
    { id: 2, caption: "Growing Up", subtitle: "Finding her style", image: imagePhoto },
    { id: 3, caption: "Learning & Growing", subtitle: "School days", image: snapchatPhoto },
    { id: 4, caption: "Radiant Smile", subtitle: "Joy in every moment", image: imageCopyPhoto },
    { id: 5, caption: "Beautiful Journey", subtitle: "Here's to you!", image: childhoodPhoto },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const goToNext = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % memories.length);
        setIsFlipping(false);
      }, 300);
    }
  };

  const goToPrev = () => {
    if (!isFlipping) {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev - 1 + memories.length) % memories.length);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-amber-50 to-rose-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-amber-600">
          Memory Lane
        </h2>

        <div className="relative">
          <div className="flex items-center justify-center gap-8">
            <button
              onClick={goToPrev}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-rose-500"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <div className="relative w-80 h-96">
              {memories.map((memory, index) => {
                const isActive = index === currentIndex;
                const isPrev = index === (currentIndex - 1 + memories.length) % memories.length;
                const isNext = index === (currentIndex + 1) % memories.length;

                return (
                  <div
                    key={memory.id}
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? 'z-20 scale-100 opacity-100'
                        : isPrev
                        ? 'z-10 -translate-x-12 scale-90 opacity-40'
                        : isNext
                        ? 'z-10 translate-x-12 scale-90 opacity-40'
                        : 'opacity-0 scale-75'
                    } ${isFlipping && isActive ? 'animate-card-flip' : ''}`}
                  >
                    <div className="w-full h-full bg-white rounded-3xl shadow-2xl overflow-hidden">
                      <div className="w-full h-2/3 overflow-hidden">
                        <img
                          src={memory.image}
                          alt={memory.caption}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6 text-center">
                        <h3 className="text-2xl font-semibold text-gray-800">{memory.caption}</h3>
                        <p className="text-rose-500 mt-2 font-medium">{memory.subtitle}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <button
              onClick={goToNext}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 text-rose-500"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {memories.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (!isFlipping) {
                    setIsFlipping(true);
                    setTimeout(() => {
                      setCurrentIndex(index);
                      setIsFlipping(false);
                    }, 300);
                  }
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-rose-500 w-8'
                    : 'bg-rose-200 hover:bg-rose-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
