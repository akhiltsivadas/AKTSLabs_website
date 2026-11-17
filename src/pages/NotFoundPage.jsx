import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Compass, ArrowLeft, Smartphone, Home } from 'lucide-react';
import { useSEO } from '../utils/seo';

export const NotFoundPage = () => {
  useSEO({
    title: '404 — Screen Not Found | ATS Labs',
    description: 'The requested page or application could not be found.',
  });

  return (
    <div className="min-h-[85vh] flex items-center justify-center px-4 pt-32 pb-20 text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-lg mx-auto"
      >
        <div className="relative mb-6">
          <span className="text-8xl sm:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 opacity-30 select-none">
            404
          </span>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center backdrop-blur-md">
              <Compass className="w-8 h-8 animate-spin-slow" />
            </div>
          </div>
        </div>

        <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Lost in the Digital Ether
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed mb-8">
          The route you are attempting to access does not exist or may have been relocated in a recent ATS Labs release.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link
            to="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-sm text-white bg-indigo-600 hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-600/20"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>
          <Link
            to="/apps"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 transition-colors"
          >
            <Smartphone className="w-4 h-4" />
            <span>Browse All Apps</span>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default NotFoundPage;
