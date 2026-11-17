import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles } from 'lucide-react';
import { getFeaturedApps, APPS } from '../../data/apps';
import AppCard from '../apps/AppCard';

export const FeaturedApps = () => {
  const featuredApps = getFeaturedApps();

  // If no apps are marked as featured, do not render this section on the homepage
  if (featuredApps.length === 0) {
    return null;
  }

  return (
    <section className="relative py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Flagship Applications</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Featured Creations
            </h2>
            <p className="text-slate-400 text-base sm:text-lg mt-2 leading-relaxed">
              Our thoughtfully engineered tools built to streamline your daily routines.
            </p>
          </div>

          <Link
            to="/apps"
            className="inline-flex items-center gap-2 text-sm font-bold text-indigo-400 hover:text-indigo-300 transition-colors group flex-shrink-0"
          >
            <span>Explore All Apps ({APPS.length})</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredApps.map((app) => (
            <AppCard key={app.id} app={app} featuredLayout={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedApps;
