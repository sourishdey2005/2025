import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const [isClicked, setIsClicked] = useState(false);

  return (
    <section className="py-40 px-6 text-center bg-transparent relative z-10">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-pink-400 font-bold mb-8 block">
            Our Future
          </span>

          <h2 className="text-4xl md:text-6xl font-serif text-pink-600 dark:text-pink-300 mb-12 leading-tight">
            Thank you for coming into my life and making 2025 unforgettable.
          </h2>

          {/* 💌 Added Message */}
          <p className="font-serif text-lg md:text-xl text-gray-600 dark:text-gray-300 leading-relaxed mb-16">
            I’m not forcing you to love me… I just feel I deserve a reply, at least.
            <br /><br />
            Every night, I find myself craving a little conversation with you.
            Talking to you makes my day lighter, my mind calmer.
            <br /><br />
            By the way… I love you ❤️
            <br /><br />
            I’m not in a hurry, and I’m not asking for promises.
            <br />
            I’ll wait—patiently, honestly—until you’re ready.
            <br />
            Whatever you decide, I’ll respect it 🥺
          </p>

          <div className="flex flex-col items-center gap-6">
            <span className="text-[10px] uppercase tracking-widest text-gray-400 font-bold">
              Continue the journey
            </span>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsClicked(true)}
              className="group relative flex items-center justify-center gap-4 bg-white dark:bg-[#332228] text-pink-600 hover:bg-pink-600 hover:text-white border-2 border-pink-500/20 hover:border-pink-600 px-12 py-5 rounded-full transition-all duration-300 shadow-2xl shadow-pink-500/10"
            >
              <span className="font-bold text-lg uppercase tracking-wider">
                Forever Starts Here
              </span>

              <motion.div
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                <Heart className="group-hover:fill-current" size={24} />
              </motion.div>

              {isClicked && (
                <motion.div
                  initial={{ scale: 0, opacity: 1 }}
                  animate={{ scale: 30, opacity: 0 }}
                  transition={{ duration: 1.2 }}
                  className="absolute inset-0 bg-pink-500 rounded-full pointer-events-none"
                />
              )}
            </motion.button>
          </div>

          <p className="mt-32 text-pink-300 dark:text-pink-800 text-[10px] tracking-[0.5em] uppercase font-bold">
            Endless Love • 2025 & Beyond
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Footer;
