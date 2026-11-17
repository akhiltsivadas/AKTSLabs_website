import React from 'react';

export const GlowBadge = ({
  children,
  variant = 'indigo',
  size = 'md',
  icon: Icon,
  className = '',
}) => {
  const variantStyles = {
    indigo: 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30 shadow-indigo-500/10',
    blue: 'bg-blue-500/10 text-blue-300 border-blue-500/30 shadow-blue-500/10',
    emerald: 'bg-emerald-500/10 text-emerald-300 border-emerald-500/30 shadow-emerald-500/10',
    amber: 'bg-amber-500/10 text-amber-300 border-amber-500/30 shadow-amber-500/10',
    purple: 'bg-purple-500/10 text-purple-300 border-purple-500/30 shadow-purple-500/10',
    cyan: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30 shadow-cyan-500/10',
    rose: 'bg-rose-500/10 text-rose-300 border-rose-500/30 shadow-rose-500/10',
    neutral: 'bg-slate-800/60 text-slate-300 border-slate-700/60 shadow-none',
  };

  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs sm:text-sm px-3 py-1',
    lg: 'text-sm px-3.5 py-1.5',
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-medium rounded-full border shadow-sm backdrop-blur-md transition-all ${variantStyles[variant] || variantStyles.indigo} ${sizeStyles[size] || sizeStyles.md} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 flex-shrink-0" />}
      {children}
    </span>
  );
};

export default GlowBadge;
