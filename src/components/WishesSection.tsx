import { useEffect, useState } from 'react';
import { Heart } from 'lucide-react';

export default function WishesSection() {
  const wishes = [
    "May your day be filled with endless joy and laughter!",
    "Wishing you a year ahead full of exciting adventures.",
    "May all your dreams come true this year.",
    "Here's to celebrating the amazing person you are!",
    "May this birthday bring you closer to everything you desire.",
    "Sending you love, happiness, and warm wishes!",
  ];

  const [visibleWishes, setVisibleWishes] = useState<number[]>([]);

  useEffect(() => {
    wishes.forEach((_, index) => {
      setTimeout(() => {
        setVisibleWishes((prev) => [...prev, index]);
      }, index * 600);
    });
  }, []);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-rose-600">
          Birthday Wishes
        </h2>
        <div className="space-y-6">
          {wishes.map((wish, index) => (
            <div
              key={index}
              className={`transform transition-all duration-700 ${
                visibleWishes.includes(index)
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-shadow duration-300 border-2 border-pink-100">
                <div className="flex items-start gap-4">
                  <Heart className="w-6 h-6 text-rose-500 flex-shrink-0 mt-1" fill="currentColor" />
                  <p className="text-lg text-gray-700 leading-relaxed">{wish}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
