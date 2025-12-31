
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Petal {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  swing: number;
}

const HeroPetals: React.FC = () => {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const petalCount = 15;
    const newPetals = Array.from({ length: petalCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 10 + 10,
      duration: Math.random() * 15 + 15,
      delay: Math.random() * 10,
      rotation: Math.random() * 360,
      swing: Math.random() * 50 + 20,
    }));
    setPetals(newPetals);
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: -50, opacity: 0, x: `${p.x}%` }}
          animate={{
            y: '110vh',
            opacity: [0, 0.6, 0.6, 0],
            x: [`${p.x}%`, `${p.x + (Math.random() * 10 - 5)}%`, `${p.x}%`],
            rotate: p.rotation + 360,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: p.delay,
          }}
          style={{ position: 'absolute' }}
        >
          <div
            style={{
              width: p.size,
              height: p.size * 0.7,
              backgroundColor: '#ffdae0',
              borderRadius: '50% 0 50% 0',
              boxShadow: '0 0 10px rgba(255, 192, 203, 0.3)',
              transform: 'rotate(45deg)',
              opacity: 0.7,
            }}
          />
        </motion.div>
      ))}
    </div>
  );
};

export default HeroPetals;
