import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShieldCheck, Lock, ArrowLeft, Mail, ExternalLink, HardDrive, Info, Copy, Check } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { getAppById } from '../data/apps';

export const PrivacyPolicyPage = () => {
  const { appId, id } = useParams();
  const currentAppId = appId || id;
  const app = currentAppId ? getAppById(currentAppId) : null;
  const [copied, setCopied] = useState(false);

  useSEO({
    title: app 
      ? `Privacy Policy for ${app.name}` 
      : 'Privacy Policy — ATS Labs',
    description: app 
      ? `Official Google Play Privacy Policy for ${app.name} by ATS Labs.` 
      : 'Official Privacy Policy for ATS Labs studio.',
  });

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  /* ========================================================
   * STANDALONE APP-SPECIFIC PRIVACY POLICY (for Google Play)
   * When an app ID is provided in the URL (e.g. /privacy/expense-flow),
   * this renders ONLY the privacy policy for that specific app.
   * ======================================================== */
  if (app) {
    return (
      <div className="pt-28 pb-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Top Bar: Back Link & Quick Copy URL */}
          <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <Link
              to={`/apps/${app.id}`}
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to {app.name}</span>
            </Link>

            <button
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-900 border border-slate-700 hover:border-slate-500 text-xs font-semibold text-slate-200 transition-colors w-fit"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">URL Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Copy Link for Google Play Console</span>
                </>
              )}
            </button>
          </div>

          {/* Standalone Legal Document Container */}
          <article className="p-8 sm:p-12 rounded-3xl bg-[#0b0f19] border border-slate-800 shadow-2xl space-y-8">
            {/* Header */}
            <div className="space-y-3 pb-6 border-b border-slate-800/80">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>Google Play Compliance Document</span>
              </div>

              <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                {app.privacyPolicyData?.title || `Privacy Policy for ${app.name}`}
              </h1>

              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-400 pt-1">
                <span><strong>Developer:</strong> ATS Labs</span>
                <span>•</span>
                <span><strong>Application:</strong> {app.name}</span>
                <span>•</span>
                <span><strong>Pricing:</strong> {app.pricing || "Free / Ad-Supported"}</span>
              </div>
            </div>

            {/* Policy Body */}
            <div className="text-sm text-slate-300 leading-relaxed space-y-6">
              <p>
                ATS Labs built the <strong className="text-white">ExpenseTracker</strong> app as a Free/Ad-Supported app. This SERVICE is provided by ATS Labs at no cost and is intended for use as is.
              </p>

              {/* Section 1 */}
              <section className="space-y-2.5">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Lock className="w-4 h-4 text-emerald-400" />
                  Information Collection and Use
                </h2>
                <p className="text-slate-300">
                  The core functionality of ExpenseTracker works offline. Your financial data (transactions, accounts, categories) is stored locally on your device. We (the developers) do not collect, transmit, or have access to your personal financial data.
                </p>
              </section>

              {/* Section 2 */}
              <section className="space-y-2.5">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <HardDrive className="w-4 h-4 text-blue-400" />
                  Google Drive Backup
                </h2>
                <p className="text-slate-300">
                  The app offers an optional backup feature using Google Drive. If you choose to use this feature, the app will request access to your Google Account.
                </p>
                <ul className="list-disc list-inside space-y-1.5 text-slate-400 ml-2">
                  <li>The app only uses this access to read and write a specific backup file (<code className="text-emerald-300 bg-slate-900 px-1 py-0.5 rounded">expenseflow_backup.json</code>) to your personal Google Drive.</li>
                  <li>We (the developers) cannot see, access, or collect this data. It remains entirely under your control.</li>
                </ul>
              </section>

              {/* Section 3 */}
              <section className="space-y-2.5">
                <h2 className="text-base font-bold text-white flex items-center gap-2">
                  <Info className="w-4 h-4 text-purple-400" />
                  Third-Party Services (Advertisements)
                </h2>
                <p className="text-slate-300">
                  The app uses third-party services that may collect information used to identify you. We use Google AdMob to display advertisements. AdMob may collect your device's Advertising ID and IP address to serve personalized or non-personalized ads.
                </p>
                <div className="pt-2 text-slate-400 text-xs">
                  <div className="font-semibold text-slate-300 mb-1.5">
                    Link to privacy policy of third party service providers used by the app:
                  </div>
                  <ul className="list-disc list-inside space-y-1 text-indigo-400 font-medium">
                    <li>
                      <a 
                        href="https://www.google.com/policies/privacy/" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline inline-flex items-center gap-1"
                      >
                        Google Play Services <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                    <li>
                      <a 
                        href="https://support.google.com/admob/answer/6128543" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:underline inline-flex items-center gap-1"
                      >
                        AdMob <ExternalLink className="w-3 h-3" />
                      </a>
                    </li>
                  </ul>
                </div>
              </section>

              {/* Section 4 */}
              <section className="space-y-2 pt-2 border-t border-slate-800/80">
                <h2 className="text-base font-bold text-white">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm">
                  We may update our Privacy Policy from time to time. Thus, you are advised to review this page periodically for any changes.
                </p>
              </section>

              {/* Section 5 */}
              <section className="space-y-2 pt-2 border-t border-slate-800/80">
                <h2 className="text-base font-bold text-white">
                  Contact Us
                </h2>
                <p className="text-slate-400 text-xs sm:text-sm">
                  If you have any questions or suggestions about our Privacy Policy, do not hesitate to contact us at{' '}
                  <a href={`mailto:${app.supportEmail || 'akhiltsivadas@gmail.com'}`} className="text-emerald-400 hover:underline">
                    {app.supportEmail || 'akhiltsivadas@gmail.com'}
                  </a>.
                </p>
              </section>
            </div>
          </article>
        </div>
      </div>
    );
  }

  /* ========================================================
   * GENERAL STUDIO PRIVACY POLICY (when no specific app is selected)
   * ======================================================== */
  return (
    <div className="pt-28 pb-20 min-h-screen">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Link
            to="/apps"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Applications</span>
          </Link>
        </div>

        <article className="p-8 sm:p-12 rounded-3xl bg-[#0b0f19] border border-slate-800 shadow-2xl space-y-8">
          <div className="pb-6 border-b border-slate-800/80">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold mb-3">
              <ShieldCheck className="w-3.5 h-3.5" />
              <span>Studio Privacy Policy</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Privacy Policy
            </h1>
            <p className="text-slate-400 text-sm mt-2">
              ATS Labs Mobile Development Studio
            </p>
          </div>

          <div className="space-y-6 text-sm text-slate-300 leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">1. Data Storage</h2>
              <p className="text-slate-400">
                Our applications are built with an on-device first approach. Your information, notes, and preferences remain stored directly on your phone. We do not harvest personal records.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">2. Device Permissions</h2>
              <p className="text-slate-400">
                Our apps only ask for Android permissions that are strictly necessary to provide the features you choose to use. Permissions can be adjusted or revoked at any time in your device settings.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-base font-bold text-white">3. Third-Party Sharing</h2>
              <p className="text-slate-400">
                ATS Labs does not sell, rent, or trade your personal information to third parties or data brokers.
              </p>
            </section>

            <section className="space-y-2 pt-2 border-t border-slate-800/80">
              <h2 className="text-base font-bold text-white">4. Questions & Contact</h2>
              <p className="text-slate-400">
                If you have any questions about our Privacy Policy or any of our applications, please contact us at{' '}
                <a href="mailto:akhiltsivadas@gmail.com" className="text-emerald-400 hover:underline">
                  akhiltsivadas@gmail.com
                </a>.
              </p>
            </section>
          </div>
        </article>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
