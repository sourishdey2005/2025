
import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Heart, Star, Moon, Flower2, Sparkles } from 'lucide-react';
import { MEMORIES } from '../constants.tsx';

const IconsMap = {
  Heart, Star, Moon, Flower2, Sparkles
};

const Memories: React.FC = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const bgY = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} className="py-24 px-6 relative overflow-hidden bg-pink-50/50 dark:bg-gray-800/30 transition-colors">
      {/* Parallax Background Decorative Icons */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 pointer-events-none opacity-[0.03] dark:opacity-[0.05] flex flex-wrap justify-around items-center z-0">
        {Array.from({ length: 12 }).map((_, i) => (
          <Heart key={i} size={120} className="m-10" />
        ))}
      </motion.div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif text-pink-600 dark:text-pink-300 mb-4">Fragments of Us</h2>
          <p className="text-pink-400 dark:text-pink-200/60 italic">Moments I'll carry in my heart forever</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {MEMORIES.map((memory, idx) => {
            const IconComponent = (IconsMap as any)[memory.icon] || Heart;
            return (
              <motion.div
                key={memory.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm p-8 rounded-3xl shadow-xl shadow-pink-100 dark:shadow-none border border-pink-100 dark:border-pink-900/30 text-center"
              >
                <div className="inline-flex p-4 bg-pink-50 dark:bg-pink-900/40 rounded-2xl text-pink-500 mb-6">
                  <IconComponent size={32} />
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                  {memory.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Memories;
