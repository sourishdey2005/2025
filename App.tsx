
import React, { useState, useEffect, useRef } from 'react';
import Hero from './components/Hero.tsx';
import Timeline from './components/Timeline.tsx';
import Memories from './components/Memories.tsx';
import Letter from './components/Letter.tsx';
import SpecialYear from './components/SpecialYear.tsx';
import Footer from './components/Footer.tsx';
import Particles from './components/Particles.tsx';
import FloatingControls from './components/FloatingControls.tsx';
import { motion } from 'framer-motion';

const App: React.FC = () => {
  const [isDark, setIsDark] = useState(false);
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
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
      <div className="bg-white dark:bg-[#12080a] text-gray-900 dark:text-gray-100 min-h-screen relative selection:bg-pink-500/30">
        
        {/* Background Decorative Elements */}
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-pink-500/5 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-pink-500/5 rounded-full blur-[120px]"></div>
        </div>

        {/* Floating Decoration (Left) */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 0.6, x: 0 }}
          transition={{ delay: 1, duration: 1.5 }}
          className="fixed top-1/3 left-8 z-0 hidden xl:block pointer-events-none"
        >
          <div className="w-44 p-3 bg-white shadow-2xl rotate-[-2deg] transition-all duration-500 hover:opacity-100 hover:rotate-0">
            <div className="w-full aspect-[3/4] overflow-hidden bg-gray-50">
              <img 
                src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=300" 
                alt="Abstract Love" 
                className="w-full h-full object-cover opacity-80 grayscale-[20%]" 
              />
            </div>
            <p className="mt-3 font-cursive text-gray-400 text-center">Unforgettable</p>
          </div>
        </motion.div>

        {/* Floating Decoration (Right) */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 0.5, x: 0 }}
          transition={{ delay: 1.5, duration: 1.5 }}
          className="fixed bottom-1/4 right-8 z-0 hidden xl:block pointer-events-none"
        >
          <div className="w-36 p-3 bg-white shadow-2xl rotate-[3deg] transition-all duration-500 hover:opacity-100 hover:rotate-0">
            <div className="w-full aspect-square overflow-hidden bg-gray-50 rounded-full">
              <img 
                src="https://images.unsplash.com/photo-1516589174184-c68536575960?q=80&w=300" 
                alt="Memory" 
                className="w-full h-full object-cover opacity-80" 
              />
            </div>
          </div>
        </motion.div>

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
