import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Sparkles, RefreshCw, ExternalLink } from 'lucide-react';
import confetti from 'canvas-confetti';
import { APPS } from '../../data/apps';

const GOOGLE_FORM_ACTION_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSccbWPDQ1kXBKx0aRnSszMXK9t_QWrmDVmPEFc9FL-9Otl6BA/formResponse';
const GOOGLE_FORM_VIEW_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSccbWPDQ1kXBKx0aRnSszMXK9t_QWrmDVmPEFc9FL-9Otl6BA/viewform';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    appInquiry: 'general',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // 'idle' | 'submitting' | 'success' | 'error'

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) {
      errs.name = 'Please provide your name';
    }
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please enter a valid email address';
    }
    if (!formData.subject.trim()) {
      errs.subject = 'Please enter a subject';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Please provide a message (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const getTopicLabel = (value) => {
    if (value === 'general') return 'General Studio Inquiry';
    if (value === 'beta-access') return 'Upcoming App Beta Access';
    if (value === 'feature-suggestion') return 'Idea / Feature Suggestion';
    if (value === 'partnership') return 'Business & Publishing Partnership';
    const found = APPS.find((a) => a.id === value);
    return found ? `${found.name} (${found.category})` : value;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('submitting');
    try {
      const formBody = new URLSearchParams();
      formBody.append('entry.62928583', formData.name);
      formBody.append('entry.773367957', formData.email);
      formBody.append('entry.2131733913', formData.subject);
      formBody.append('entry.469189381', getTopicLabel(formData.appInquiry));
      formBody.append('entry.332523849', formData.message);

      await fetch(GOOGLE_FORM_ACTION_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formBody.toString(),
      });

      setStatus('success');
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#38bdf8', '#818cf8', '#c084fc', '#10b981'],
      });
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback: still show success or error
      setStatus('error');
    }
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      subject: '',
      appInquiry: 'general',
      message: '',
    });
    setErrors({});
    setStatus('idle');
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="p-8 sm:p-12 rounded-3xl bg-slate-900/80 border border-emerald-500/30 text-center shadow-2xl backdrop-blur-xl"
      >
        <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Message Dispatched!</h3>
        <p className="text-slate-400 text-sm sm:text-base max-w-md mx-auto mb-8 leading-relaxed">
          Thank you for reaching out to <span className="text-white font-semibold">ATS Labs</span>. An engineering team member will review your inquiry and get back to you within 24 hours.
        </p>
        <button
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Send Another Message</span>
        </button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 sm:p-10 rounded-3xl bg-[#0b0f1b]/90 border border-slate-800/90 shadow-2xl backdrop-blur-xl space-y-5"
      noValidate
    >
      <div className="flex items-center justify-between pb-3 border-b border-slate-800">
        <div>
          <h3 className="text-xl font-bold text-white">Send Us a Direct Message</h3>
          <p className="text-xs text-slate-400">Inquire about our apps, suggest ideas, or propose a collaboration.</p>
        </div>
        <Sparkles className="w-5 h-5 text-indigo-400" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Name Field */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Your Name <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={formData.name}
            onChange={(e) => {
              setFormData({ ...formData, name: e.target.value });
              if (errors.name) setErrors({ ...errors, name: null });
            }}
            placeholder="Alex Rivera"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white text-sm outline-none transition-all ${
              errors.name ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/20' : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
            }`}
          />
          {errors.name && <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.name}</p>}
        </div>

        {/* Email Field */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Email Address <span className="text-rose-400">*</span>
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => {
              setFormData({ ...formData, email: e.target.value });
              if (errors.email) setErrors({ ...errors, email: null });
            }}
            placeholder="alex@domain.com"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white text-sm outline-none transition-all ${
              errors.email ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/20' : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
            }`}
          />
          {errors.email && <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        {/* Subject */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Subject <span className="text-rose-400">*</span>
          </label>
          <input
            type="text"
            value={formData.subject}
            onChange={(e) => {
              setFormData({ ...formData, subject: e.target.value });
              if (errors.subject) setErrors({ ...errors, subject: null });
            }}
            placeholder="e.g. Beta Access / Partnership"
            className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white text-sm outline-none transition-all ${
              errors.subject ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/20' : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
            }`}
          />
          {errors.subject && <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.subject}</p>}
        </div>

        {/* Inquiry Topic */}
        <div>
          <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
            Inquiry Topic
          </label>
          <select
            value={formData.appInquiry}
            onChange={(e) => setFormData({ ...formData, appInquiry: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-slate-900/80 border border-slate-800 text-white text-sm outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20"
          >
            <option value="general">General Studio Inquiry</option>
            <option value="beta-access">Upcoming App Beta Access</option>
            <option value="feature-suggestion">Idea / Feature Suggestion</option>
            {APPS.map((app) => (
              <option key={app.id} value={app.id}>
                {app.name} ({app.category})
              </option>
            ))}
            <option value="partnership">Business & Publishing Partnership</option>
          </select>
        </div>
      </div>

      {/* Message Area */}
      <div>
        <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
          Message <span className="text-rose-400">*</span>
        </label>
        <textarea
          rows={5}
          value={formData.message}
          onChange={(e) => {
            setFormData({ ...formData, message: e.target.value });
            if (errors.message) setErrors({ ...errors, message: null });
          }}
          placeholder="Please describe your thoughts, feature ideas, or feedback in detail..."
          className={`w-full px-4 py-3 rounded-xl bg-slate-900/80 border text-white text-sm outline-none transition-all resize-y ${
            errors.message ? 'border-rose-500/80 focus:ring-2 focus:ring-rose-500/20' : 'border-slate-800 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20'
          }`}
        />
        {errors.message && <p className="text-xs text-rose-400 mt-1.5 flex items-center gap-1"><AlertCircle className="w-3 h-3" />{errors.message}</p>}
      </div>

      {status === 'error' && (
        <div className="p-4 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-rose-400 flex-shrink-0" />
            <span>Could not submit directly. You can fill it out on Google Forms instead:</span>
          </div>
          <a
            href={GOOGLE_FORM_VIEW_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 font-bold underline hover:text-white"
          >
            <span>Google Form</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full py-3.5 px-6 rounded-xl font-bold text-base text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:via-indigo-500 hover:to-purple-500 shadow-xl shadow-indigo-600/30 transition-all duration-300 flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-50"
      >
        {status === 'submitting' ? (
          <>
            <RefreshCw className="w-5 h-5 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <Send className="w-5 h-5" />
            <span>Transmit Message</span>
          </>
        )}
      </button>

      {/* Google Form Link Indicator */}
      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-slate-400">
        <span className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Responses are recorded directly to Google Forms
        </span>
        <a
          href={GOOGLE_FORM_VIEW_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-indigo-400 hover:text-indigo-300 transition-colors font-medium"
        >
          <span>Open in Google Forms</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </form>
  );
};

export default ContactForm;
