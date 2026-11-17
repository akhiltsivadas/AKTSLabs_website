import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Wallet, 
  CheckCircle2, 
  Heart, 
  Wrench, 
  Headphones, 
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { APPS } from '../../data/apps';

export const CategoryShowcase = () => {
  const categories = [
    {
      name: 'Productivity',
      icon: CheckCircle2,
      count: APPS.filter(a => a.category === 'Productivity').length,
      color: 'from-indigo-500 to-violet-600',
      description: 'Interval timers, flow state focus sessions, and deep attention mastery.',
    },
    {
      name: 'Finance',
      icon: Wallet,
      count: APPS.filter(a => a.category === 'Finance').length,
      color: 'from-emerald-500 to-teal-600',
      description: 'Daily cashflow, budget allocations, and offline expense ledgers.',
    },
    {
      name: 'Lifestyle',
      icon: Heart,
      count: APPS.filter(a => a.category === 'Lifestyle').length,
      color: 'from-amber-500 to-orange-600',
      description: 'Atomic habit routines, daily streaks, and mindful consistency.',
    },
    {
      name: 'Utilities',
      icon: Wrench,
      count: APPS.filter(a => a.category === 'Utilities').length,
      color: 'from-cyan-500 to-blue-600',
      description: 'High-speed document digitization, system monitors, and widgets.',
    },
    {
      name: 'Entertainment',
      icon: Headphones,
      count: APPS.filter(a => a.category === 'Entertainment').length,
      color: 'from-purple-500 to-pink-600',
      description: 'Binaural sleep audio, soothing ambient soundscapes, and acoustic focus.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#080c16]/50 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Studio Focus Areas</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Application Categories
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2">
              The core domains ATS Labs builds solutions for in daily digital life.
            </p>
          </div>

          <Link
            to="/apps"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group flex-shrink-0"
          >
            <span>View Full Directory</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={`/apps?category=${encodeURIComponent(cat.name)}`}
                className="group relative p-6 rounded-2xl bg-[#0c101e]/80 border border-slate-800/80 hover:border-slate-700 hover:bg-[#10162a]/90 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${cat.color} flex items-center justify-center text-white mb-4 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1 group-hover:text-indigo-300 transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
                  <span>{cat.count > 0 ? `${cat.count} ${cat.count === 1 ? 'App' : 'Apps'}` : 'Coming Soon'}</span>
                  <span className="font-semibold text-indigo-400 group-hover:translate-x-1 transition-transform flex items-center gap-0.5">
                    Browse →
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CategoryShowcase;
