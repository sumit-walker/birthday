import { useEffect, useState } from 'react';

export default function Hero() {
  const [confetti, setConfetti] = useState<Array<{ id: number; left: number; delay: number; duration: number }>>([]);

  useEffect(() => {
    const pieces = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 2,
      duration: 3 + Math.random() * 2,
    }));
    setConfetti(pieces);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-rose-50 to-amber-50">
      {confetti.map((piece) => (
        <div
          key={piece.id}
          className="absolute w-2 h-2 rounded-full animate-confetti-fall"
          style={{
            left: `${piece.left}%`,
            backgroundColor: ['#FFD700', '#FF69B4', '#FFA500', '#FF1493', '#FFB6C1'][Math.floor(Math.random() * 5)],
            animationDelay: `${piece.delay}s`,
            animationDuration: `${piece.duration}s`,
          }}
        />
      ))}

      <div className="relative z-10 text-center px-4">
        <div className="inline-block">
          <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-bounce-slow">
            <span className="bg-gradient-to-r from-pink-400 via-rose-500 to-amber-400 text-transparent bg-clip-text drop-shadow-lg animate-gradient">
              Happy Birthday
            </span>
          </h1>
          <h2 className="text-5xl md:text-7xl font-bold text-rose-600 animate-scale-in mb-8 sparkle-text">
            Shruti!
          </h2>
        </div>

        <div className="flex gap-4 justify-center mt-8">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-4 h-4 bg-amber-400 rounded-full animate-sparkle"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
