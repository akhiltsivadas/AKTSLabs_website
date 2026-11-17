import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export const AboutHero = () => {
  return (
    <section className="relative pt-36 pb-16 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[300px] bg-gradient-to-r from-blue-600/15 via-indigo-600/20 to-purple-600/15 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-semibold mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Independent App Development Studio</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight leading-[1.15] mb-8">
          About ATS Labs
        </h1>

        {/* Studio Manifesto Callout */}
        <div className="p-8 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-900/90 to-slate-950/90 border border-indigo-500/30 shadow-2xl backdrop-blur-xl relative overflow-hidden text-left">
          <p className="text-lg sm:text-xl text-slate-200 leading-relaxed font-normal">
            &ldquo;ATS Labs is an independent application development studio focused on creating useful, intuitive and innovative mobile applications. We believe technology should simplify everyday life through thoughtfully designed digital experiences.&rdquo;
          </p>
          <div className="mt-6 flex items-center justify-between border-t border-slate-800 pt-4">
            <span className="text-xs uppercase tracking-wider font-bold text-indigo-400">ATS Labs Creed</span>
            <span className="text-xs text-slate-400">Android Studio</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
