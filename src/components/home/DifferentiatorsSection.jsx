import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Cpu, EyeOff, BatteryCharging, Sparkles, RefreshCw } from 'lucide-react';

export const DifferentiatorsSection = () => {
  const differentiators = [
    {
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      glow: 'rgba(16, 185, 129, 0.2)',
      title: 'Privacy-First Architecture',
      description: 'Your personal data never leaves your device. We prioritize on-device SQLite databases, zero cloud trackers, and no invasive behavioral monetization.',
    },
    {
      icon: Cpu,
      color: 'from-blue-500 to-indigo-600',
      glow: 'rgba(59, 130, 246, 0.2)',
      title: 'Native Android Performance',
      description: 'Engineered with modern Kotlin, Jetpack Compose, and hardware-accelerated rendering for buttery 60/120fps animations and instant cold boots.',
    },
    {
      icon: EyeOff,
      color: 'from-violet-500 to-purple-600',
      glow: 'rgba(139, 92, 246, 0.2)',
      title: 'Zero Dark Patterns',
      description: 'No deceptive subscription traps, no aggressive full-screen popups, and no paywalls on essential everyday functionality.',
    },
    {
      icon: BatteryCharging,
      color: 'from-amber-500 to-orange-600',
      glow: 'rgba(245, 158, 11, 0.2)',
      title: 'Ultra-Low Battery Consumption',
      description: 'Carefully measured background wake-locks, efficient Android Glance APIs, and deep AMOLED-black theming to maximize your phone battery life.',
    },
    {
      icon: Sparkles,
      color: 'from-cyan-500 to-blue-600',
      glow: 'rgba(6, 182, 212, 0.2)',
      title: 'Linear & Apple Inspired Craft',
      description: 'Pixel-perfect typography, harmonious spacing, smooth haptic responses, and dynamic Material You system color harmony.',
    },
    {
      icon: RefreshCw,
      color: 'from-pink-500 to-rose-600',
      glow: 'rgba(236, 72, 153, 0.2)',
      title: 'Continuous Polish & Updates',
      description: 'We listen to real user reviews on Google Play and rapidly iterate with thoughtful features, speed improvements, and modern Android OS support.',
    },
  ];

  return (
    <section className="relative py-24 bg-[#070a14]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-semibold mb-3">
            <span>The ATS Labs Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered with Purpose. <br />
            Designed for Humans.
          </h2>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            In an era of bloated, ad-saturated mobile applications, we hold ourselves to a distinctly higher standard of digital craftsmanship.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {differentiators.map((diff, idx) => {
            const Icon = diff.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative p-8 rounded-3xl bg-[#0c101d]/70 border border-slate-800/80 hover:border-slate-700 backdrop-blur-xl shadow-xl transition-all duration-300"
              >
                {/* Glow backdrop on hover */}
                <div 
                  className="absolute -top-12 -right-12 w-32 h-32 rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                  style={{ backgroundColor: diff.glow }}
                />

                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${diff.color} flex items-center justify-center text-white mb-6 shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="text-xl font-bold text-white mb-2.5 group-hover:text-indigo-300 transition-colors">
                  {diff.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {diff.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DifferentiatorsSection;
