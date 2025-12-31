
import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Star, Moon } from 'lucide-react';
import { REASONS } from '../constants';

const IconsMap = { Heart, Star, Moon };

const SpecialYear: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-pink-600 text-white dark:bg-purple-950 transition-colors">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-serif mb-4">Why This Year Was Special</h2>
          <p className="text-pink-100 opacity-80">Simple reasons, profound impacts</p>
        </motion.div>

        <div className="space-y-8">
          {REASONS.map((reason, idx) => {
            const IconComponent = (IconsMap as any)[reason.icon] || Heart;
            return (
              <motion.div
                key={reason.id}
                initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="flex items-center gap-6 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                  <IconComponent size={24} />
                </div>
                <p className="text-xl font-light italic">{reason.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SpecialYear;
