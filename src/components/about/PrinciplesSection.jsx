import React from 'react';
import { Eye, Target, Heart, ShieldCheck } from 'lucide-react';

export const PrinciplesSection = () => {
  const sections = [
    {
      title: 'Our Vision',
      subtitle: 'Where we are headed',
      icon: Eye,
      color: 'from-blue-500 to-indigo-600',
      description: 'To create a collection of everyday mobile applications that people genuinely love using for their clarity, utility, and thoughtful design.',
    },
    {
      title: 'Our Mission',
      subtitle: 'Why we exist',
      icon: Target,
      color: 'from-indigo-500 to-violet-600',
      description: 'To solve practical daily challenges with smart digital experiences—keeping software straightforward, reliable, and accessible on Android.',
    },
    {
      title: 'Our Values',
      subtitle: 'What guides us',
      icon: Heart,
      color: 'from-purple-500 to-pink-600',
      description: 'We believe in honesty, clear interfaces, and building apps that respect user attention rather than trying to consume it.',
    },
    {
      title: 'Privacy by Design',
      subtitle: 'User trust first',
      icon: ShieldCheck,
      color: 'from-emerald-500 to-teal-600',
      description: 'We prioritize on-device privacy. We build apps that respect your boundaries with transparent policies and zero hidden tracking.',
    },
  ];

  return (
    <section className="relative py-20 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((sec, idx) => {
            const Icon = sec.icon;
            return (
              <div
                key={idx}
                className="p-8 rounded-3xl bg-[#0c101e]/80 border border-slate-800/80 hover:border-slate-700/80 backdrop-blur-xl shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-tr ${sec.color} flex items-center justify-center text-white shadow-lg`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{sec.title}</h3>
                      <p className="text-xs uppercase tracking-wider text-slate-400 font-semibold">{sec.subtitle}</p>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed">
                    {sec.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default PrinciplesSection;
