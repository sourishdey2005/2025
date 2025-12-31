
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Timeline: React.FC = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imgY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section ref={containerRef} className="py-24 px-6 max-w-4xl mx-auto relative overflow-hidden">
      <div className="absolute left-1/2 top-0 bottom-0 w-px bg-pink-200 dark:bg-pink-900 -translate-x-1/2 hidden md:block" />
      
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-serif text-pink-600 dark:text-pink-300 mb-4">
          April 2025 – When Everything Changed
        </h2>
        <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-2xl aspect-square"
        >
          <motion.img 
            style={{ y: imgY, scale: 1.2 }}
            src="https://imgs.search.brave.com/-4BOD6KiDjPYHF1BGFRCFz-nG_hmoax8scoa9lnAvDs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvMjY5/NTgzL3BleGVscy1w/aG90by0yNjk1ODMu/anBlZz9hdXRvPWNv/bXByZXNzJmNzPXRp/bnlzcmdiJmRwcj0x/Jnc9NTAw" 
            alt="Romantic Memory" 
            className="w-full h-full object-cover" 
          />
          <div className="absolute inset-0 bg-pink-500/10 mix-blend-overlay pointer-events-none" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <div className="flex items-center gap-3 text-pink-500">
            <Sparkles size={24} />
            <span className="font-semibold tracking-wider uppercase text-sm">The Beginning</span>
          </div>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            I still remember that April breeze. Before then, the year was just another cycle of seasons. But meeting you changed the very frequency of my days. Your presence brought a color I didn't know was missing from the palette of my world.
          </p>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
            Every conversation we've had since then has been a thread in a tapestry that I now hold dearer than anything else. 2025 wasn't just another year; it was the year of *us*.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Timeline;
