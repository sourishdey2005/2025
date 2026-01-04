import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';
import HeroPetals from './HeroPetals.tsx';

const romanticQuotes = [
  "Pandey ji, every smile of yours quietly fixed parts of me I never spoke about.",
  "Some people enter your life softly—Pandey ji, you entered and stayed in my heart.",
  "If 2025 was beautiful, it’s because Pandey ji walked into my world without warning.",
  "Pandey ji, loving you felt natural, like breathing—slow, calm, and real.",
  "I didn’t plan to fall, Pandey ji… my heart just recognized you."
];

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      
      {/* 🎆 Soft Fireworks Glow */}
      <div className="absolute inset-0 pointer-events-none -z-20">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-pink-400/30 blur-3xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: [0, 1.2, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 3, repeat: Infinity, delay: i * 0.6, ease: "easeOut" }}
            style={{ top: `${Math.random() * 80}%`, left: `${Math.random() * 80}%` }}
          />
        ))}
      </div>

      {/* Parallax Background */}
      <motion.div style={{ y: y1 }} className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 via-transparent to-white dark:from-gray-900/60 dark:via-transparent dark:to-gray-900 z-10" />
        <img 
          src="https://www.vecteezy.com/free-photos/love"
          alt="Romantic Background"
          className="w-full h-[120%] object-cover opacity-30 dark:opacity-20 grayscale-[20%]"
        />
        <HeroPetals />
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ opacity }}
      >
        {/* Heart */}
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-6"
        >
          <Heart className="text-pink-400 fill-pink-400" size={48} />
        </motion.div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-serif text-pink-600 dark:text-pink-300 mb-4 drop-shadow-sm">
          You Made My 2025 Beautiful
        </h1>

        {/* New Year Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
          className="mb-6"
        >
          <span className="inline-block px-6 py-2 text-lg md:text-xl font-semibold tracking-wide 
            text-white rounded-full 
            bg-gradient-to-r from-pink-400 via-rose-400 to-pink-500 
            shadow-lg shadow-pink-300/40">
            ✨ Happy New Year 2026 Madamji ✨
          </span>
        </motion.div>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-pink-500/80 dark:text-pink-200/60 max-w-2xl mx-auto font-light italic mb-6">
          A year that became special because you came into my life
        </p>

        {/* 💖 Pandey Ji Romantic Quotes */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="max-w-3xl mx-auto space-y-3"
        >
          {romanticQuotes.map((quote, index) => (
            <p
              key={index}
              className="text-pink-600/80 dark:text-pink-200/70 text-lg md:text-xl font-light italic"
            >
              “{quote}”
            </p>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-pink-400 font-medium tracking-widest uppercase">
          Scroll
        </span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <ChevronDown className="text-pink-400" size={24} />
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;