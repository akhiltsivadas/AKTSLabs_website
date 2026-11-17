import React from 'react';
import { motion } from 'framer-motion';

export const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {/* Subtle Grid overlay */}
      <div 
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)`,
          backgroundSize: '48px 48px',
        }}
      />

      {/* Primary Ambient Gradient Orbs */}
      <motion.div
        animate={{
          x: [0, 40, -30, 0],
          y: [0, -50, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-[15%] left-[10%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-indigo-600/20 via-blue-600/15 to-transparent blur-[130px]"
      />

      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -40, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-purple-600/15 via-violet-600/10 to-transparent blur-[140px]"
      />

      <motion.div
        animate={{
          x: [0, 30, -20, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.1, 1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -bottom-[10%] left-[25%] w-[550px] h-[550px] rounded-full bg-gradient-to-t from-cyan-600/10 via-blue-600/10 to-transparent blur-[120px]"
      />

      {/* Top vignette glow */}
      <div className="absolute top-0 inset-x-0 h-40 bg-gradient-to-b from-[#05070d] via-transparent to-transparent" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#05070d] via-transparent to-transparent" />
    </div>
  );
};

export default AnimatedBackground;
