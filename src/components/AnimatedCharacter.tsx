import { Cake } from 'lucide-react';

export default function AnimatedCharacter() {
  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative animate-bounce-gentle">
        <div className="relative group cursor-pointer">
          <div className="absolute inset-0 bg-gradient-to-r from-pink-400 to-rose-500 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>

          <div className="relative bg-white p-6 rounded-full shadow-2xl border-4 border-pink-300 group-hover:border-rose-400 transition-colors duration-300">
            <Cake className="w-12 h-12 text-rose-500 animate-wiggle" />
          </div>

          <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full animate-ping"></div>
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-amber-400 rounded-full"></div>
        </div>

        <div className="absolute bottom-full right-0 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="bg-white rounded-lg px-4 py-2 shadow-lg border-2 border-pink-200 whitespace-nowrap">
            <p className="text-sm font-semibold text-gray-700">Click me!</p>
          </div>
        </div>
      </div>
    </div>
  );
}
