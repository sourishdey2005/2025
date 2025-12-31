
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const Particles: React.FC = () => {
  const [particles, setParticles] = useState<{ id: number; x: number; size: number; duration: number; type: 'heart' | 'petal' }[]>([]);

  useEffect(() => {
    const newParticles = Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 15 + 10,
      duration: Math.random() * 10 + 10,
      type: Math.random() > 0.5 ? 'heart' : ('petal' as const)
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ y: '110vh', opacity: 0, x: `${p.x}vw` }}
          animate={{
            y: '-10vh',
            opacity: [0, 0.8, 0],
            x: `${p.x + (Math.random() * 10 - 5)}vw`,
            rotate: 360,
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            ease: 'linear',
            delay: Math.random() * 10,
          }}
          style={{ position: 'absolute' }}
        >
          {p.type === 'heart' ? (
            <svg width={p.size} height={p.size} viewBox="0 0 24 24" fill="rgba(255, 182, 193, 0.4)" stroke="none">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          ) : (
            <div
              style={{
                width: p.size,
                height: p.size / 1.5,
                backgroundColor: 'rgba(255, 240, 245, 0.5)',
                borderRadius: '50% 0 50% 0',
                transform: 'rotate(45deg)',
              }}
            />
          )}
        </motion.div>
      ))}
    </div>
  );
};

export default Particles;
