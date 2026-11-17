import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Maximize2, X, ChevronLeft, ChevronRight, Smartphone } from 'lucide-react';

export const ScreenshotGallery = ({ screenshots = [], appName = "Application" }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (selectedIdx === null) return;
      if (e.key === 'Escape') setSelectedIdx(null);
      if (e.key === 'ArrowRight') setSelectedIdx((prev) => (prev + 1) % screenshots.length);
      if (e.key === 'ArrowLeft') setSelectedIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIdx, screenshots.length]);

  if (!screenshots || screenshots.length === 0) return null;

  return (
    <>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Smartphone className="w-5 h-5 text-indigo-400" />
            <h3 className="text-xl font-bold text-white tracking-tight">Screenshots & Interface</h3>
          </div>
          <span className="text-xs text-slate-400 font-medium">Click any preview to expand</span>
        </div>

        {/* Horizontal scrollable screenshot track */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
          {screenshots.map((screen, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -6, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedIdx(idx)}
              className="group relative cursor-pointer rounded-2xl sm:rounded-3xl p-1.5 bg-gradient-to-b from-slate-700/60 to-slate-900/80 border border-slate-700/60 shadow-xl overflow-hidden"
            >
              <div className="relative rounded-xl sm:rounded-2xl overflow-hidden bg-black aspect-[9/18]">
                <img
                  src={screen}
                  alt={`${appName} screenshot ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-indigo-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="p-2.5 rounded-full bg-slate-900/90 text-white border border-slate-700 shadow-xl transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 className="w-4 h-4 text-indigo-400" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {selectedIdx !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8"
            onClick={() => setSelectedIdx(null)}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedIdx(null)}
              className="absolute top-6 right-6 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors z-50"
              aria-label="Close Preview"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev - 1 + screenshots.length) % screenshots.length);
              }}
              className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors z-50"
              aria-label="Previous Screenshot"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedIdx((prev) => (prev + 1) % screenshots.length);
              }}
              className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 p-3 rounded-full bg-slate-800/80 hover:bg-slate-700 text-white border border-slate-700 transition-colors z-50"
              aria-label="Next Screenshot"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Active Preview Content */}
            <div
              className="relative max-h-[85vh] max-w-sm sm:max-w-md w-full aspect-[9/18] rounded-[36px] p-2 bg-gradient-to-b from-slate-600 to-slate-900 border border-slate-500/50 shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={screenshots[selectedIdx]}
                alt={`${appName} screenshot fullscreen`}
                className="w-full h-full object-cover rounded-[30px]"
              />
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-black/75 backdrop-blur-md text-white text-xs font-semibold">
                {selectedIdx + 1} of {screenshots.length}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ScreenshotGallery;
