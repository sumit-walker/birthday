import Hero from './components/Hero';
import FloatingBalloons from './components/FloatingBalloons';
import MusicPlayer from './components/MusicPlayer';
import WishesSection from './components/WishesSection';
import MemoryCarousel from './components/MemoryCarousel';
import CountdownMessage from './components/CountdownMessage';
import AnimatedCharacter from './components/AnimatedCharacter';

function App() {
  return (
    <div className="relative overflow-x-hidden">
      <FloatingBalloons />
      <Hero />
      <MusicPlayer />
      <WishesSection />
      <MemoryCarousel />
      <CountdownMessage />
      <AnimatedCharacter />

      <footer className="bg-gradient-to-r from-pink-100 to-rose-100 py-8 text-center">
        <p className="text-gray-600 text-lg">
          Made with love for Shruti's special day
        </p>
      </footer>
    </div>
  );
}

export default App;
