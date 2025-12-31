
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LETTERS, LETTER_CONTENT } from '../constants.tsx';

const LetterCard: React.FC<{ letter: string; color: string; title: string; icon: string }> = ({ letter, color, title, icon }) => {
  const words = letter.split(' ');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const wordVariants = {
    hidden: { 
      opacity: 0,
      y: 5,
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotate: Math.random() * 2 - 1 }}
      whileInView={{ opacity: 1, y: 0, rotate: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      style={{ backgroundColor: color }}
      className="p-8 md:p-12 rounded-lg shadow-xl border border-gray-100 dark:border-gray-700 relative overflow-hidden mb-12"
    >
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-3xl">{icon}</span>
          <h3 className="font-serif text-xl text-pink-700 dark:text-pink-300 font-bold uppercase tracking-widest">{title}</h3>
        </div>

        <motion.div 
          className="font-cursive text-xl md:text-2xl text-gray-800 dark:text-gray-200 leading-relaxed"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {words.map((word, idx) => (
            <motion.span
              key={idx}
              variants={wordVariants}
              className="inline-block mr-1.5"
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
    <section className="py-24 px-6 bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-3xl mx-auto space-y-16">
        
        {/* The Original Introductory Letter */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#fdfcf0] dark:bg-gray-800 p-8 md:p-16 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden mb-24"
        >
          <div className="absolute inset-0 opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/handmade-paper.png')]" />
          <div className="relative z-10">
            <div className="flex justify-center mb-10">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setShowSecret(true)}
                className="text-red-400 hover:text-red-500 transition-colors"
              >
                <Heart size={32} fill="currentColor" />
              </motion.button>
            </div>
            <div className="font-cursive text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed whitespace-pre-wrap">
              {LETTER_CONTENT}
            </div>
          </div>
        </motion.div>

        {/* The Series of Sequentially Opened Letters */}
        <div className="space-y-12">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif text-pink-600 dark:text-pink-300">More of What's in My Heart</h2>
            <div className="w-16 h-1 bg-pink-200 mx-auto mt-4 rounded-full" />
          </motion.div>

          {LETTERS.map((l) => (
            <LetterCard 
              key={l.id} 
              letter={l.content} 
              color={l.color} 
              title={l.title} 
              icon={l.icon} 
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
                className="bg-white dark:bg-gray-900 p-10 rounded-3xl shadow-2xl max-w-sm text-center border-4 border-pink-200"
              >
                <Heart className="mx-auto text-pink-500 mb-4 animate-pulse" size={48} fill="currentColor" />
                <h3 className="text-2xl font-serif text-pink-600 mb-2">A Secret Message</h3>
                <p className="text-gray-600 dark:text-gray-300 italic">"I love how your eyes light up when you're excited about something. It's my favorite sight in the world."</p>
                <button 
                  onClick={() => setShowSecret(false)}
                  className="mt-6 px-6 py-2 bg-pink-500 text-white rounded-full font-medium transition-colors hover:bg-pink-600"
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
