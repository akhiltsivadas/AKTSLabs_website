import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MessageSquare, ChevronDown, ExternalLink, HelpCircle } from 'lucide-react';
import GooglePlayButton from '../common/GooglePlayButton';

export const ContactDetails = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const faqs = [
    {
      q: 'How can I stay updated on new ATS Labs app releases?',
      a: 'We publish updates directly on this website and on our official Google Play developer page. You can also reach out via our contact form to request early beta notifications.',
    },
    {
      q: 'How does ATS Labs handle user privacy?',
      a: 'We follow a strict privacy-first model. We do not sell or monetize personal data, and we design our applications to keep data on your device.',
    },
    {
      q: 'How do I suggest a feature or report an issue?',
      a: 'Send us a message using the form or email us at akhiltsivadas@gmail.com. We appreciate and review all community ideas and bug reports.',
    },
  ];

  return (
    <div className="space-y-6">
      {/* Studio Info Card */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0c101d]/80 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-1">ATS Labs Studio</h3>
          <p className="text-xs text-slate-400">Independent Android Application Development</p>
        </div>

        <div className="space-y-4 text-sm">
          <div className="flex items-start gap-3 text-slate-300">
            <Mail className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-white">General Inquiries</div>
              <a href="mailto:akhiltsivadas@gmail.com" className="text-indigo-400 hover:underline">
                akhiltsivadas@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-start gap-3 text-slate-300">
            <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
            <div>
              <div className="font-semibold text-white">Support & Feedback</div>
              <a href="mailto:akhiltsivadas@gmail.com" className="text-emerald-400 hover:underline">
                akhiltsivadas@gmail.com
              </a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-slate-800/80">
          <GooglePlayButton
            href="https://play.google.com/store/apps/developer?id=ATS+Labs"
            size="md"
            textPrefix="OFFICIAL DEVELOPER PAGE"
            textTitle="ATS Labs on Google Play"
            className="w-full justify-center"
          />
        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#0c101d]/80 border border-slate-800/80 backdrop-blur-xl shadow-xl">
        <div className="flex items-center gap-2 mb-5">
          <HelpCircle className="w-5 h-5 text-indigo-400" />
          <h3 className="text-base font-bold text-white">Common Questions</h3>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="rounded-xl border border-slate-800/80 bg-slate-900/40 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full px-4 py-3 text-left flex items-center justify-between gap-3 text-sm font-semibold text-slate-200 hover:text-white"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 flex-shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-indigo-400' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-4 pb-4 pt-1 text-xs text-slate-400 leading-relaxed border-t border-slate-800/40">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ContactDetails;
