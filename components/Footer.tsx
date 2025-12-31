
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="py-32 px-6 text-center bg-white dark:bg-gray-900 transition-colors">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-serif text-pink-600 dark:text-pink-300 mb-8 leading-tight">
            Thank you for coming into my life and making 2025 unforgettable.
          </h2>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsClicked(true)}
            className="group relative inline-flex items-center gap-3 px-10 py-5 bg-pink-500 text-white rounded-full text-xl font-medium shadow-xl shadow-pink-200 dark:shadow-none transition-all hover:bg-pink-600"
          >
            <span>Forever Starts Here</span>
            <motion.div
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 0.8, repeat: Infinity }}
            >
              <Heart fill="white" size={24} />
            </motion.div>

            {isClicked && (
              <motion.div
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 20, opacity: 0 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 bg-pink-500 rounded-full pointer-events-none"
              />
            )}
          </motion.button>

          <p className="mt-20 text-pink-300 dark:text-pink-800 text-sm tracking-widest uppercase">
            Endless Love • 2025 & Beyond
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
