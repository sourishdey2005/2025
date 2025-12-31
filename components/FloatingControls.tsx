
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  isDark: boolean;
  toggleDark: () => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

const FloatingControls: React.FC<Props> = ({ isDark, toggleDark, isMusicPlaying, toggleMusic }) => {
  return (
    <>
      {/* Theme Toggle - Top Right */}
      <div className="fixed top-6 right-6 z-50">
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={toggleDark}
          className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-all border ${
            isDark ? 'bg-gray-800/80 border-white/10 text-pink-100' : 'bg-white/80 border-pink-100 text-pink-600'
          }`}
        >
          <span className="material-symbols-outlined text-[20px]">
            {isDark ? 'light_mode' : 'dark_mode'}
          </span>
        </motion.button>
      </div>

      {/* Floating Audio Player - Bottom Right */}
      <div className="fixed bottom-8 right-8 z-50">
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="flex items-center gap-3 bg-white dark:bg-[#2a1b20] p-2 pr-5 rounded-full shadow-2xl shadow-pink-500/20 border border-pink-500/10 backdrop-blur-md transition-all hover:scale-105"
        >
          <div className="relative size-12 shrink-0">
            {isMusicPlaying && (
              <div className="absolute inset-0 bg-pink-500/20 rounded-full animate-ping opacity-75"></div>
            )}
            <button 
              onClick={toggleMusic}
              className="relative size-12 rounded-full bg-pink-500 text-white flex items-center justify-center overflow-hidden cursor-pointer hover:bg-pink-600 shadow-inner"
            >
              <span className="material-symbols-outlined text-[28px] fill-1">
                {isMusicPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>
          </div>
          <div className="hidden sm:flex flex-col select-none">
            <span className="text-xs font-bold text-gray-800 dark:text-white">Our Song</span>
            <span className="text-[10px] text-pink-500 font-medium tracking-wider uppercase">Instrumental</span>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default FloatingControls;
