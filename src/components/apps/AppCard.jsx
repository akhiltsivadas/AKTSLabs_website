import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck } from 'lucide-react';
import GooglePlayButton from '../common/GooglePlayButton';

export const AppCard = ({ app, featuredLayout = false }) => {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="group relative flex flex-col justify-between rounded-3xl bg-[#0b0f1a]/80 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-300 overflow-hidden p-6 sm:p-7"
    >
      {/* Top subtle inner border glow */}
      <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent pointer-events-none" />
      
      {/* Dynamic ambient hover glow in the corner */}
      <div 
        className="absolute -top-20 -right-20 w-44 h-44 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
        style={{ backgroundColor: app.color?.glow || 'rgba(99, 102, 241, 0.15)' }}
      />

      <div>
        {/* Top Header: Icon + Category + Badge */}
        <div className="flex items-start justify-between gap-4 mb-5">
          <Link to={`/apps/${app.id}`} className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-300">
            <img
              src={app.icon}
              alt={`${app.name} icon`}
              className="w-16 h-16 rounded-2xl shadow-lg border border-white/10 object-cover bg-slate-900"
              loading="lazy"
            />
            {app.badge && (
              <span className="absolute -bottom-2 -right-1 px-2 py-0.5 text-[9px] font-extrabold uppercase tracking-wider rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md">
                {app.badge}
              </span>
            )}
          </Link>

          <div className="flex flex-col items-end gap-1.5">
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800/70 text-slate-300 border border-slate-700/50">
              {app.category}
            </span>
            {app.pricing && (
              <span className="text-[11px] text-emerald-400 font-medium">
                {app.pricing}
              </span>
            )}
          </div>
        </div>

        {/* Title & Tagline */}
        <div className="mb-3">
          <Link to={`/apps/${app.id}`}>
            <h3 className="text-xl font-bold text-white group-hover:text-indigo-300 transition-colors">
              {app.name}
            </h3>
          </Link>
          <p className="text-xs font-semibold text-emerald-400 mt-0.5">
            {app.tagline}
          </p>
        </div>

        {/* Description */}
        <p className="text-sm text-slate-400 leading-relaxed line-clamp-3 mb-5">
          {app.shortDescription || app.description}
        </p>

        {/* Key Features Chips */}
        {app.features && app.features.length > 0 && (
          <div className="space-y-1.5 mb-6">
            {app.features.slice(0, 3).map((feat, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                <Sparkles className="w-3 h-3 text-emerald-400 flex-shrink-0" />
                <span className="line-clamp-1">{feat}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer Actions: View Details & Google Play Button */}
      <div className="pt-4 border-t border-slate-800/60 mt-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          to={`/apps/${app.id}`}
          className="inline-flex items-center justify-center gap-1.5 text-xs font-semibold text-slate-300 hover:text-white px-3.5 py-2 rounded-xl bg-slate-900/60 hover:bg-slate-800 border border-slate-700/60 transition-colors"
        >
          <span>View Details & Privacy</span>
          <ArrowRight className="w-3.5 h-3.5 text-indigo-400 group-hover:translate-x-0.5 transition-transform" />
        </Link>

        <GooglePlayButton
          href={app.playStoreUrl}
          size="sm"
          triggerConfetti={true}
        />
      </div>
    </motion.div>
  );
};

export default AppCard;
