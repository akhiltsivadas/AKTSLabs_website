import React from 'react';
import { motion } from 'framer-motion';
import { Cpu, Shield, Zap, Sparkles, Smartphone, Code } from 'lucide-react';

export const TechStackPillars = () => {
  const stackItems = [
    { title: 'Jetpack Compose', desc: 'Modern declarative Android UI framework for declarative, fluid layouts.' },
    { title: 'Kotlin Coroutines', desc: 'Asynchronous flow handling without UI stutter or thread contention.' },
    { title: 'Local SQLite / Room', desc: 'High-speed, encrypted local caching with instantaneous retrieval.' },
    { title: 'Material You Engine', desc: 'Dynamic Android wallpaper palette tinting and Material 3 design tokens.' },
    { title: 'Android Glance APIs', desc: 'Battery-friendly home screen and lockscreen widget engine.' },
    { title: 'On-Device Neural ML', desc: 'Local AI models for instant OCR, audio synthesis, and pattern detection.' },
  ];

  return (
    <section className="relative py-20 bg-[#070b16]/60 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <Code className="w-3.5 h-3.5" />
            <span>Engineering Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Built on Modern Android Standards
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-2">
            Every application published by ATS Labs adheres to the latest Android engineering guidelines.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackItems.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-[#0b0f1d]/80 border border-slate-800/80 hover:border-slate-700 transition-colors"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 mb-3" />
              <h3 className="text-base font-bold text-white mb-1.5">{item.title}</h3>
              <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackPillars;
