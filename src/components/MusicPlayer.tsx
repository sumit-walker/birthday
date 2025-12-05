import { Music, Square } from 'lucide-react';
import { useState, useRef } from 'react';

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const oscillatorRef = useRef<OscillatorNode | null>(null);
  const gainNodeRef = useRef<GainNode | null>(null);

  const playBirthdaySong = () => {
    if (isPlaying) {
      stopSong();
      return;
    }

    try {
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
      audioContextRef.current = audioContext;

      const notes = [
        { freq: 264, duration: 0.5 }, { freq: 264, duration: 0.5 },
        { freq: 297, duration: 1 }, { freq: 264, duration: 1 },
        { freq: 352, duration: 1 }, { freq: 330, duration: 2 },
        { freq: 264, duration: 0.5 }, { freq: 264, duration: 0.5 },
        { freq: 297, duration: 1 }, { freq: 264, duration: 1 },
        { freq: 396, duration: 1 }, { freq: 352, duration: 2 },
      ];

      let startTime = audioContext.currentTime;
      let totalDuration = 0;

      notes.forEach((note) => {
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.value = note.freq;
        oscillator.type = 'sine';

        const noteStartTime = startTime + totalDuration;
        gainNode.gain.setValueAtTime(0.3, noteStartTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, noteStartTime + note.duration);

        oscillator.start(noteStartTime);
        oscillator.stop(noteStartTime + note.duration);

        totalDuration += note.duration;
      });

      setIsPlaying(true);
      setTimeout(() => setIsPlaying(false), totalDuration * 1000 + 100);
    } catch (error) {
      console.error('Audio playback error:', error);
    }
  };

  const stopSong = () => {
    if (audioContextRef.current) {
      audioContextRef.current.close();
      audioContextRef.current = null;
    }
    if (oscillatorRef.current) {
      oscillatorRef.current.stop();
      oscillatorRef.current = null;
    }
    setIsPlaying(false);
  };

  return (
    <div className="flex justify-center my-12">
      <button
        onClick={playBirthdaySong}
        className={`group relative px-8 py-4 rounded-full font-semibold text-white shadow-2xl transform transition-all duration-300 hover:scale-110 ${
          isPlaying
            ? 'bg-gradient-to-r from-rose-500 to-pink-500 animate-pulse'
            : 'bg-gradient-to-r from-amber-400 via-rose-500 to-pink-500'
        }`}
      >
        <span className="flex items-center gap-3">
          {isPlaying ? <Square className="w-5 h-5" /> : <Music className="w-5 h-5" />}
          {isPlaying ? 'Stop Music' : 'Play Birthday Song'}
        </span>
        <div className="absolute inset-0 rounded-full bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
      </button>
    </div>
  );
}
