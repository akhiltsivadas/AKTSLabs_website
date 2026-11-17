import React from 'react';
import confetti from 'canvas-confetti';

export const GooglePlayButton = ({
  href,
  size = 'md',
  className = '',
  triggerConfetti = false,
  textPrefix = "GET IT ON",
  textTitle = "Google Play",
}) => {
  const handleClick = (e) => {
    if (triggerConfetti) {
      confetti({
        particleCount: 40,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38bdf8', '#818cf8', '#c084fc', '#34d399'],
      });
    }
  };

  const sizeClasses = {
    sm: 'px-3.5 py-1.5 text-xs',
    md: 'px-4.5 py-2.5 text-sm',
    lg: 'px-6 py-3 text-base',
  };

  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  return (
    <a
      href={href || '#'}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={`group relative inline-flex items-center gap-3 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 text-white border border-slate-700/60 hover:border-slate-500 shadow-md hover:shadow-indigo-500/20 backdrop-blur-md transition-all duration-300 transform active:scale-95 ${sizeClasses[size] || sizeClasses.md} ${className}`}
    >
      {/* Google Play Vector Icon */}
      <svg
        className={`flex-shrink-0 transition-transform duration-300 group-hover:scale-110 ${iconSizes[size] || iconSizes.md}`}
        viewBox="0 0 512 512"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M325.3 234.3L104.6 13l280.8 161.2-60.1 60.1z"
          fill="#EA4335"
        />
        <path
          d="M47 38.6c-5.5 8.9-8.7 20-8.7 32.8v369.2c0 12.8 3.2 23.9 8.7 32.8L281.3 256 47 38.6z"
          fill="#4285F4"
        />
        <path
          d="M325.3 277.7l60.1 60.1L104.6 499l220.7-221.3z"
          fill="#34A853"
        />
        <path
          d="M475.2 232.8L385.4 181l-60.1 53.3 60.1 60.1 89.8-51.8c12.3-7.1 20-19.8 20-34.9s-7.7-27.8-20-34.9z"
          fill="#FBBC04"
        />
      </svg>

      <div className="flex flex-col text-left leading-none">
        <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium mb-0.5">
          {textPrefix}
        </span>
        <span className="font-semibold tracking-wide text-white text-[13px] sm:text-[14px]">
          {textTitle}
        </span>
      </div>

      {/* Subtle shine highlight */}
      <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />
    </a>
  );
};

export default GooglePlayButton;
