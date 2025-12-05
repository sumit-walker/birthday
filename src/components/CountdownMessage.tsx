import { Sparkles } from 'lucide-react';

export default function CountdownMessage() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-pink-100 via-rose-100 to-amber-100">
      <div className="max-w-4xl mx-auto text-center">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-amber-400 blur-2xl opacity-50 animate-pulse"></div>
          <div className="relative bg-white rounded-3xl p-12 shadow-2xl border-4 border-amber-200">
            <Sparkles className="w-16 h-16 text-amber-500 mx-auto mb-6 animate-spin-slow" />
            <h2 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-rose-500 via-pink-500 to-amber-500 text-transparent bg-clip-text animate-gradient">
              Cheers to a Wonderful Year Ahead!
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
              May every moment sparkle with joy, every day bring new adventures,
              and every dream turn into reality.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="w-3 h-3 bg-amber-400 rounded-full animate-bounce"
                  style={{ animationDelay: `${i * 0.1}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
