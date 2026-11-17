import React from 'react';
import { motion } from 'framer-motion';

export const GlassCard = ({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'rgba(99, 102, 241, 0.15)',
  ...props
}) => {
  return (
    <motion.div
      whileHover={hoverEffect ? { y: -4 } : {}}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={`relative overflow-hidden rounded-2xl bg-gradient-to-b from-slate-900/80 to-slate-950/80 border border-slate-800/80 backdrop-blur-xl shadow-xl transition-all duration-300 ${hoverEffect ? 'hover:border-slate-700 hover:shadow-2xl' : ''} ${className}`}
      {...props}
    >
      {/* Top subtle highlight border */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent pointer-events-none" />
      
      {/* Dynamic ambient hover glow */}
      {hoverEffect && (
        <div 
          className="absolute -top-24 -right-24 w-48 h-48 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
          style={{ backgroundColor: glowColor }}
        />
      )}

      {children}
    </motion.div>
  );
};

export default GlassCard;
