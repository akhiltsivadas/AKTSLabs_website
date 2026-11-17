import React from 'react';
import { Sparkles, Layers, ShieldCheck, Heart } from 'lucide-react';

export const PhilosophySection = () => {
  const values = [
    {
      title: 'Thoughtful Utility',
      description: 'We build applications to solve real everyday challenges without unnecessary complexity or noise.',
      icon: Sparkles,
      color: 'text-blue-400',
    },
    {
      title: 'Simple & Focused',
      description: 'Clean layouts and intuitive interfaces designed to get the job done and let you carry on with your day.',
      icon: Layers,
      color: 'text-indigo-400',
    },
    {
      title: 'Privacy Conscious',
      description: 'We believe your personal data belongs to you. Built with respect for user privacy from day one.',
      icon: ShieldCheck,
      color: 'text-emerald-400',
    },
  ];

  return (
    <section className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-3">
            <span>Our Approach</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Designed to Make Life Simpler
          </h2>
          <p className="text-slate-400 text-base mt-3">
            Every ATS Labs application is guided by simplicity, clear purpose, and respect for the user.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((val, idx) => {
            const Icon = val.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0c101d]/70 border border-slate-800/80 hover:border-slate-700 transition-colors"
              >
                <div className={`p-3 rounded-2xl bg-slate-900 border border-slate-800 w-fit mb-5 ${val.color}`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {val.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;
