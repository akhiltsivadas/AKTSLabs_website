import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, ShieldCheck, Cpu, Code2 } from 'lucide-react';

export const StatsCounter = () => {
  const stats = [
    {
      value: '100%',
      label: 'Native Android',
      detail: 'Built with Kotlin & Compose',
      icon: Code2,
      color: 'text-blue-400',
    },
    {
      value: 'Zero',
      label: 'Cloud Telemetry',
      detail: 'Strict on-device SQLite storage',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
    {
      value: '60/120',
      label: 'Target Frame Rate',
      detail: 'Silky smooth Android animations',
      icon: Cpu,
      color: 'text-purple-400',
    },
    {
      value: 'Android 15',
      label: 'Modern OS Standards',
      detail: 'Glance & Material You ready',
      icon: Smartphone,
      color: 'text-amber-400',
    },
  ];

  return (
    <section className="relative py-20 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, idx) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={idx}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                className="p-6 rounded-2xl bg-[#0b0f1b]/70 border border-slate-800/80 backdrop-blur-md shadow-lg"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 rounded-lg bg-slate-800/80 text-slate-300">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <span className={`text-2xl sm:text-3xl font-extrabold tracking-tight ${stat.color}`}>
                    {stat.value}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-0.5">
                  {stat.label}
                </h3>
                <p className="text-xs text-slate-400">
                  {stat.detail}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsCounter;
