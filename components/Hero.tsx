
import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  return (
    <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden px-6 text-center">
      {/* Parallax Background Image */}
      <motion.div 
        style={{ y: y1 }}
        className="absolute inset-0 -z-10"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-pink-100/40 via-transparent to-white dark:from-gray-900/60 dark:via-transparent dark:to-gray-900 z-10" />
        <img 
          src="https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=2000&auto=format&fit=crop" 
          alt="Romantic Background" 
          className="w-full h-[120%] object-cover opacity-30 dark:opacity-20 grayscale-[20%]"
        />
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ opacity }}
      >
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center mb-6"
        >
          <Heart className="text-pink-400 fill-pink-400" size={48} />
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-serif text-pink-600 dark:text-pink-300 mb-6 drop-shadow-sm">
          You Made My 2025 Beautiful
        </h1>
        
        <p className="text-xl md:text-2xl text-pink-500/80 dark:text-pink-200/60 max-w-2xl mx-auto font-light italic">
          A year that became special because you came into my life
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-sm text-pink-400 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="text-pink-400" size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
