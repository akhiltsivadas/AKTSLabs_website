import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, MessageSquare } from 'lucide-react';
import { useSEO } from '../utils/seo';
import ContactForm from '../components/contact/ContactForm';
import ContactDetails from '../components/contact/ContactDetails';

export const ContactPage = () => {
  useSEO({
    title: 'Contact ATS Labs — Developer Support & Feedback',
    description: 'Get in touch with the ATS Labs application development studio. Reach our support desk, submit feature requests, or discuss partnerships.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Connect with ATS Labs</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Let's Start a Conversation
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Have a question about one of our applications, want to report a technical bug, or explore a collaboration? We’d love to hear from you.
          </p>
        </div>

        {/* 2-Column Layout: Contact Form & Studio Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
          <div className="lg:col-span-5">
            <ContactDetails />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactPage;
