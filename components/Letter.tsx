
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { LETTER_CONTENT } from '../constants';

const Letter: React.FC = () => {
  const [showSecret, setShowSecret] = useState(false);

  // Split content into lines and then words for a structured reveal
  const lines = LETTER_CONTENT.split('\n');

  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.04, // Speed of the word-by-word reveal
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
        duration: 0.4,
        ease: "easeOut"
      }
    },
  };

  return (
    <section className="py-24 px-6 bg-white dark:bg-gray-900 relative">
      <div className="max-w-3xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, rotate: -1 }}
          whileInView={{ opacity: 1, rotate: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="bg-[#fdfcf0] dark:bg-gray-800 p-8 md:p-16 rounded-lg shadow-2xl border border-gray-200 dark:border-gray-700 relative overflow-hidden"
        >
          {/* Paper Texture Overlay */}
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

            <motion.div 
              className="font-cursive text-2xl md:text-3xl text-gray-800 dark:text-gray-200 leading-relaxed"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {lines.map((line, lineIdx) => (
                <div key={lineIdx} className={line.trim() === "" ? "h-6" : "mb-2"}>
                  {line.split(' ').map((word, wordIdx) => (
                    <motion.span
                      key={`${lineIdx}-${wordIdx}`}
                      variants={wordVariants}
                      className="inline-block mr-1.5"
                    >
                      {word}
                    </motion.span>
                  ))}
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

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
