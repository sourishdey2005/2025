
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero.tsx';
import Timeline from './components/Timeline.tsx';
import Memories from './components/Memories.tsx';
import Letter from './components/Letter.tsx';
import SpecialYear from './components/SpecialYear.tsx';
import Footer from './components/Footer.tsx';
import Particles from './components/Particles.tsx';
import FloatingControls from './components/FloatingControls.tsx';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Initialize audio (using a romantic instrumental placeholder)
    audioRef.current = new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3');
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    return () => {
      audioRef.current?.pause();
      audioRef.current = null;
    };
  }, []);

  const toggleDark = () => setIsDark(!isDark);
  
  const toggleMusic = () => {
    if (audioRef.current) {
      if (isMusicPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log("Auto-play blocked", e));
      }
      setIsMusicPlaying(!isMusicPlaying);
    }
  };

  return (
    <div className={`${isDark ? 'dark' : ''} transition-colors duration-500`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 min-h-screen relative overflow-x-hidden">
        <Particles />
        
        <FloatingControls 
          isDark={isDark} 
          toggleDark={toggleDark} 
          isMusicPlaying={isMusicPlaying} 
          toggleMusic={toggleMusic} 
        />

        <main className="relative z-10">
          <Hero />
          <Timeline />
          <Memories />
          <Letter />
          <SpecialYear />
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
