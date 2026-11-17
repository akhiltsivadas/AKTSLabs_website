import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SearchX, RefreshCcw, Clock, Code2, PlusCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import AppCard from './AppCard';

export const AppGrid = ({ apps, onResetFilters, isFiltered = false }) => {
  // If user searched or filtered and found no matches
  if (apps.length === 0 && isFiltered) {
    return (
      <div className="py-20 text-center max-w-md mx-auto">
        <div className="w-16 h-16 rounded-2xl bg-slate-900/80 border border-slate-800 text-slate-400 flex items-center justify-center mx-auto mb-4">
          <SearchX className="w-8 h-8 text-indigo-400" />
        </div>
        <h3 className="text-xl font-bold text-white mb-2">No Matching Applications</h3>
        <p className="text-sm text-slate-400 mb-6">
          We couldn't find any apps matching your query. Try resetting your search filters.
        </p>
        {onResetFilters && (
          <button
            onClick={onResetFilters}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/20 transition-all"
          >
            <RefreshCcw className="w-4 h-4" />
            <span>Reset Search & Filters</span>
          </button>
        )}
      </div>
    );
  }

  // Base state when no apps are published yet
  if (apps.length === 0) {
    return (
      <div className="py-16">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-b from-[#0c101d] via-[#090d18] to-[#070a13] border border-slate-800 text-center max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
          {/* Subtle top glow */}
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent pointer-events-none" />

          <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 flex items-center justify-center mx-auto mb-6">
            <Clock className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-bold text-white mb-3">
            Applications In Active Development
          </h3>

          <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-6">
            ATS Labs is currently engineering our initial lineup of Android applications. As soon as each app is published on the Google Play Store, its card, screenshots, and details will be populated here automatically.
          </p>

          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-left text-xs text-slate-400 mb-8 font-mono">
            <div className="text-indigo-400 font-bold mb-1">// Ready to publish an app?</div>
            <div>Add your app details to <span className="text-white">src/data/apps.js</span> to automatically generate cards and individual detail pages.</div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Studio / Inquiries</span>
            </Link>
            <Link
              to="/about"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              <span>Learn About Our Studio</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      layout
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
    >
      <AnimatePresence>
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
};

export default AppGrid;
