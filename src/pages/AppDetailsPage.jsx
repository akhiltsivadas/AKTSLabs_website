import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowLeft, 
  ShieldCheck, 
  Smartphone, 
  Info, 
  Mail, 
  ExternalLink, 
  CheckCircle2,
  ChevronRight,
  Copy,
  Check,
  HardDrive
} from 'lucide-react';
import { getAppById } from '../data/apps';
import { useSEO } from '../utils/seo';
import GooglePlayButton from '../components/common/GooglePlayButton';
import ScreenshotGallery from '../components/apps/ScreenshotGallery';

export const AppDetailsPage = () => {
  const { id } = useParams();
  const app = getAppById(id);
  const [copied, setCopied] = useState(false);

  useSEO({
    title: app ? `${app.name} — Android App` : 'Application Details',
    description: app ? app.description : 'Explore application details from ATS Labs.',
    ogImage: app?.icon,
  });

  const handleCopyPrivacyLink = () => {
    const url = `${window.location.origin}/privacy/${app.id}`;
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  if (!app) {
    return (
      <div className="pt-40 pb-28 text-center min-h-[70vh] flex flex-col items-center justify-center">
        <div className="w-16 h-16 rounded-2xl bg-slate-900 border border-slate-800 text-indigo-400 flex items-center justify-center mb-4">
          <Info className="w-8 h-8" />
        </div>
        <h2 className="text-2xl font-bold text-white mb-2">Application Not Found</h2>
        <p className="text-slate-400 text-sm max-w-sm mb-6">
          The requested application identifier "{id}" does not exist in the ATS Labs catalog.
        </p>
        <Link
          to="/apps"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Return to All Apps</span>
        </Link>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb Navigation */}
        <div className="mb-8 flex items-center gap-2 text-xs font-semibold text-slate-400">
          <Link to="/" className="hover:text-white transition-colors">Home</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <Link to="/apps" className="hover:text-white transition-colors">Our Apps</Link>
          <ChevronRight className="w-3.5 h-3.5 text-slate-600" />
          <span className="text-emerald-400">{app.name}</span>
        </div>

        {/* App Hero Banner */}
        <div className="relative rounded-3xl bg-gradient-to-b from-[#0c101d] via-[#090d18] to-[#070a13] border border-slate-800/90 p-6 sm:p-10 shadow-2xl overflow-hidden mb-12">
          <div className="absolute inset-x-0 top-0 h-[1.5px] bg-gradient-to-r from-transparent via-emerald-500/40 to-transparent pointer-events-none" />
          
          <div 
            className="absolute top-0 right-0 w-96 h-96 rounded-full pointer-events-none opacity-20 blur-3xl"
            style={{ backgroundColor: app.color?.primary || '#10b981' }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            {/* App Icon & Core Info */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="relative flex-shrink-0">
                <img
                  src={app.icon}
                  alt={`${app.name} icon`}
                  className="w-24 h-24 sm:w-28 sm:h-28 rounded-3xl shadow-2xl border border-white/10 object-cover bg-slate-900"
                />
                {app.badge && (
                  <span className="absolute -bottom-2 -right-1 px-2.5 py-0.5 text-[10px] font-extrabold uppercase tracking-wider rounded-full bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-md">
                    {app.badge}
                  </span>
                )}
              </div>

              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800 text-emerald-300 border border-slate-700/60">
                    {app.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3" />
                    Offline-First
                  </span>
                  {app.pricing && (
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-slate-800/80 text-slate-300 border border-slate-700/60">
                      {app.pricing}
                    </span>
                  )}
                </div>

                <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {app.name}
                </h1>
                <p className="text-sm sm:text-base font-semibold text-emerald-400 mt-1">
                  {app.tagline}
                </p>

                <div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 text-xs text-slate-300">
                  <div className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <Smartphone className="w-4 h-4 text-emerald-400" />
                    <span>Android Application</span>
                  </div>
                  <div className="flex items-center gap-1.5 font-semibold text-slate-300">
                    <HardDrive className="w-4 h-4 text-cyan-400" />
                    <span>{app.size}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Play Store Download Action */}
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 flex-shrink-0">
              <GooglePlayButton
                href={app.playStoreUrl}
                size="lg"
                triggerConfetti={true}
                textPrefix="GET IT ON"
                textTitle="Google Play"
                className="w-full justify-center"
              />
              <div className="text-center text-[11px] text-slate-400 font-medium">
                Official Google Play Store Link
              </div>
            </div>
          </div>
        </div>

        {/* 2-Column Content Layout: Info & Specifications */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Main Column */}
          <div className="lg:col-span-8 space-y-10">
            {/* About Application */}
            <section className="p-7 sm:p-8 rounded-3xl bg-[#0c101d]/70 border border-slate-800/80 backdrop-blur-xl">
              <h2 className="text-xl font-bold text-white mb-4">About the Application</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 whitespace-pre-line">
                {app.description}
              </p>

              {/* Features List */}
              {app.features && app.features.length > 0 && (
                <div className="border-t border-slate-800/80 pt-6">
                  <h3 className="text-base font-bold text-white mb-4">Key Features</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {app.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </section>

            {/* Screenshots Gallery */}
            {app.screenshots && app.screenshots.length > 0 && (
              <section className="p-7 sm:p-8 rounded-3xl bg-[#0c101d]/70 border border-slate-800/80 backdrop-blur-xl">
                <ScreenshotGallery screenshots={app.screenshots} appName={app.name} />
              </section>
            )}

            {/* Standalone Privacy Policy Box */}
            <section className="p-7 sm:p-8 rounded-3xl bg-[#0b0e1a] border border-slate-800 shadow-xl flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <div className="space-y-1">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-semibold">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Google Play Compliance</span>
                </div>
                <h3 className="text-lg font-bold text-white">
                  Privacy Policy for {app.name}
                </h3>
                <p className="text-xs text-slate-400 max-w-md">
                  View the dedicated standalone privacy policy required for the Google Play Store console.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 flex-shrink-0">
                <button
                  onClick={handleCopyPrivacyLink}
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-semibold text-slate-200 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">URL Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-indigo-400" />
                      <span>Copy Policy Link</span>
                    </>
                  )}
                </button>

                <Link
                  to={`/privacy/${app.id}`}
                  className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-xs font-bold text-white shadow-md shadow-emerald-600/20 transition-all"
                >
                  <span>Open Privacy Policy</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </Link>
              </div>
            </section>
          </div>

          {/* Sidebar Specifications */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 rounded-3xl bg-[#0c101d]/80 border border-slate-800/80 backdrop-blur-xl shadow-xl space-y-5">
              <h3 className="text-base font-bold text-white pb-3 border-b border-slate-800 flex items-center gap-2">
                <Info className="w-4 h-4 text-emerald-400" />
                App Specifications
              </h3>

              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Application Name</span>
                  <span className="font-semibold text-white">{app.name}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Category</span>
                  <span className="font-semibold text-white">{app.category}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Current Version</span>
                  <span className="font-semibold text-white">{app.version}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">App Size</span>
                  <span className="font-semibold text-white">{app.size}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Compatibility</span>
                  <span className="font-semibold text-white">{app.minAndroid}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Pricing</span>
                  <span className="font-semibold text-emerald-400">{app.pricing || 'Free'}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Developer</span>
                  <span className="font-semibold text-white">ATS Labs</span>
                </div>
              </div>

              {/* Direct Links */}
              <div className="pt-4 border-t border-slate-800 space-y-2.5">
                <Link
                  to={`/privacy/${app.id}`}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-400" />
                    Dedicated Privacy Policy
                  </span>
                  <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                </Link>

                <a
                  href={`mailto:${app.supportEmail || 'akhiltsivadas@gmail.com'}?subject=Inquiry: ${encodeURIComponent(app.name)}`}
                  className="w-full flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 hover:bg-slate-800 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-cyan-400" />
                    Developer Support
                  </span>
                  <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                </a>
              </div>
            </div>

            {/* Google Play Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-emerald-950/40 via-slate-900/40 to-slate-900/60 border border-emerald-500/30 text-center">
              <h4 className="text-sm font-bold text-white mb-1">Get on Google Play</h4>
              <p className="text-xs text-slate-400 mb-4">Download ExpenseFlow directly on your Android device.</p>
              <GooglePlayButton
                href={app.playStoreUrl}
                size="md"
                triggerConfetti={true}
                className="w-full justify-center"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default AppDetailsPage;
