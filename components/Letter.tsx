
import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LETTERS, LETTER_CONTENT } from '../constants.tsx';

// Shared animation variants for the word-by-word typewriter effect
const containerVariants: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Speed of the typewriter effect
    },
  },
};

const wordVariants: Variants = {
  hidden: { 
    opacity: 0,
    y: 5,
  },
  visible: { 
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  },
};

const WaxSeal: React.FC = () => (
  <div className="absolute top-8 right-8 md:top-12 md:right-12 rotate-12 opacity-90 select-none">
    <div className="relative size-20 md:size-24 flex items-center justify-center">
      <svg className="w-full h-full text-pink-600/10 fill-current" viewBox="0 0 100 100">
        <circle cx="50" cy="50" fill="none" r="48" stroke="currentColor" strokeDasharray="4 2" strokeWidth="2"></circle>
        <circle cx="50" cy="50" fill="none" r="42" stroke="currentColor" strokeWidth="1"></circle>
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-pink-600/40 font-bold text-[10px] uppercase tracking-widest">
        <span>Dec</span>
        <span className="text-xl">31</span>
        <span>2025</span>
      </div>
    </div>
  </div>
);

const Polaroid: React.FC<{ src: string; caption: string; rotation: number }> = ({ src, caption, rotation }) => (
  <motion.div
    whileHover={{ rotate: 0, scale: 1.05 }}
    style={{ rotate: rotation }}
    className="float-right ml-6 mb-6 mt-2 w-48 bg-white p-3 pb-8 shadow-2xl rounded-sm border border-gray-100 hidden md:block"
  >
    <div className="w-full aspect-square overflow-hidden bg-gray-100 rounded-sm mb-2">
      <img src={src} alt={caption} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
    </div>
    <div className="font-cursive text-gray-500 text-center text-lg leading-none">{caption}</div>
  </motion.div>
);

const LetterCard: React.FC<{ letter: string; color: string; title: string; icon: string; polaroid?: { src: string; caption: string } }> = ({ letter, color, title, icon, polaroid }) => {
  const words = letter.split(' ');

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: color }}
      className="p-8 md:p-16 rounded-lg shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden mb-16"
    >
      <div className="absolute inset-0 opacity-40 bg-paper-texture pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-4 mb-8">
          <span className="text-4xl">{icon}</span>
          <h3 className="font-serif text-2xl text-pink-700 dark:text-pink-300 font-bold uppercase tracking-widest">{title}</h3>
        </div>

        {polaroid && (
          <Polaroid src={polaroid.src} caption={polaroid.caption} rotation={3} />
        )}

        <motion.div 
          className="font-cursive text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-[1.8]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};

const Letter: React.FC = () => {
  const [showSecret, setShowSecret] = useState(false);

  return (
    <section className="py-24 px-6 bg-[#f8f6f6] dark:bg-gray-900 transition-colors">
      <div className="max-w-4xl mx-auto space-y-24">
        
        {/* The Original Introductory Letter with Typewriter Reveal Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#fffdf9] dark:bg-gray-800 p-8 md:p-20 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-40 bg-paper-texture pointer-events-none mix-blend-multiply dark:mix-blend-overlay" />
          <WaxSeal />
          
          <div className="relative z-10">
            <div className="mb-12 text-center md:text-left">
              <h1 className="font-cursive text-5xl md:text-6xl text-pink-600 drop-shadow-sm mb-4">My Dearest,</h1>
              <p className="text-xs text-gray-400 uppercase tracking-widest ml-1">San Francisco • 11:59 PM</p>
            </div>

            <div className="flex justify-center md:justify-start mb-10">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setShowSecret(true)}
                className="text-pink-400 hover:text-pink-500 transition-colors"
              >
                <Heart size={32} fill="currentColor" />
              </motion.button>
            </div>

            <Polaroid 
              src="https://www.vecteezy.com/free-photos/love" 
              caption="Us in April" 
              rotation={-2} 
            />

            <motion.div 
              className="font-cursive text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-[1.9]"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {LETTER_CONTENT.split('\n').map((line, lineIdx) => (
                <div key={lineIdx} className={line === "" ? "h-6" : "mb-4"}>
                  {line.split(' ').map((word, wordIdx) => (
                    <motion.span
                      key={wordIdx}
                      variants={wordVariants}
                      className="inline-block mr-2"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>

            <div className="mt-20 text-right md:mr-12">
              <p className="font-cursive text-2xl text-gray-500 dark:text-gray-400 mb-2">With all my love,</p>
              <p className="font-cursive text-4xl md:text-5xl text-pink-600 font-bold -rotate-2">Your Admirer</p>
            </div>
          </div>
        </motion.div>

        {/* The Series of Sequentially Opened Letters */}
        <div className="space-y-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs uppercase tracking-[0.3em] text-pink-400 font-bold mb-4 block">Chapters of Love</span>
            <h2 className="text-4xl font-serif text-pink-600 dark:text-pink-300">More of What's in My Heart</h2>
            <div className="w-16 h-1 bg-pink-200 mx-auto mt-6 rounded-full" />
          </motion.div>

          {LETTERS.map((l, i) => (
            <LetterCard 
              key={l.id} 
              letter={l.content} 
              color={l.color} 
              title={l.title} 
              icon={l.icon}
              polaroid={i === 1 ? { src: "https://images.unsplash.com/photo-1518133910546-b6c2fb7d79e3?q=80&w=400", caption: "Forever" } : undefined}
            />
          ))}
        </div>

        <AnimatePresence>
          {showSecret && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-pink-500/20 backdrop-blur-sm"
              onClick={() => setShowSecret(false)}
            >
              <motion.div
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl max-w-sm text-center border-4 border-pink-200 relative overflow-hidden"
              >
                <div className="absolute inset-0 opacity-10 bg-paper-texture pointer-events-none" />
                <Heart className="mx-auto text-pink-500 mb-4 animate-pulse relative z-10" size={48} fill="currentColor" />
                <h3 className="text-2xl font-serif text-pink-600 mb-2 relative z-10">A Secret Message</h3>
                <p className="text-gray-600 dark:text-gray-300 italic relative z-10">"I love how your eyes light up when you're excited about something. It's my favorite sight in the world."</p>
                <button 
                  onClick={() => setShowSecret(false)}
                  className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full font-medium transition-colors hover:bg-pink-600 relative z-10"
                >
                  Close
                </button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Letter;
