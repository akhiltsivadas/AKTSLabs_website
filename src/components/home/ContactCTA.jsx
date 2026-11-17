import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Mail, Sparkles } from 'lucide-react';

export const ContactCTA = () => {
  return (
    <section className="relative py-20 border-t border-slate-800/80 overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative rounded-3xl bg-gradient-to-b from-[#111728] via-[#0d1222] to-[#090d18] border border-indigo-500/30 p-8 sm:p-12 text-center shadow-2xl overflow-hidden">
          {/* Top highlight border */}
          <div className="absolute inset-x-0 top-0 h-[2px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent pointer-events-none" />

          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/30 text-indigo-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect with Us</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight max-w-xl mx-auto">
            Ready to Connect with ATS Labs?
          </h2>

          <p className="text-slate-400 text-base max-w-lg mx-auto mt-3 mb-8 leading-relaxed">
            Have a question, feedback, or a partnership inquiry? We’d love to hear from you.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/apps"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl font-bold text-sm text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all duration-300"
            >
              <Smartphone className="w-4 h-4" />
              <span>Browse Applications</span>
            </Link>

            <Link
              to="/contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-slate-200 bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-slate-500 transition-all duration-300"
            >
              <Mail className="w-4 h-4 text-indigo-400" />
              <span>Contact Us</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
