
import React from 'react';
import { Music, Sun, Moon, Volume2, VolumeX } from 'lucide-react';
import { motion } from 'framer-motion';

interface Props {
  isDark: boolean;
  toggleDark: () => void;
  isMusicPlaying: boolean;
  toggleMusic: () => void;
}

const FloatingControls: React.FC<Props> = ({ isDark, toggleDark, isMusicPlaying, toggleMusic }) => {
  return (
    <div className="fixed top-6 right-6 z-50 flex flex-col gap-4">
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleDark}
        className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-colors ${
          isDark ? 'bg-pink-900/40 text-pink-100' : 'bg-white/40 text-pink-600'
        }`}
      >
        {isDark ? <Sun size={20} /> : <Moon size={20} />}
      </motion.button>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleMusic}
        className={`p-3 rounded-full shadow-lg backdrop-blur-md transition-colors ${
          isDark ? 'bg-pink-900/40 text-pink-100' : 'bg-white/40 text-pink-600'
        }`}
      >
        {isMusicPlaying ? <Volume2 size={20} /> : <VolumeX size={20} />}
      </motion.button>
    </div>
  );
};

export default FloatingControls;
