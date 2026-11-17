import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, ShieldCheck, Mail, ArrowUpRight, Github, Twitter, Linkedin, ExternalLink } from 'lucide-react';
import { APPS } from '../../data/apps';
import GooglePlayButton from './GooglePlayButton';

export const Footer = () => {
  return (
    <footer className="relative border-t border-slate-800/80 bg-[#070a12]/90 backdrop-blur-xl pt-16 pb-12 overflow-hidden z-10">
      {/* Subtle top ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent" />
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[100px] bg-indigo-500/10 blur-[90px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-14">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-600 via-blue-600 to-cyan-400 p-[1.5px] shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#090d18] rounded-[10px] flex items-center justify-center">
                  <svg className="w-5 h-5 text-indigo-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="12 2 2 22 22 22" />
                    <line x1="7" y1="15" x2="17" y2="15" />
                  </svg>
                </div>
              </div>
              <span className="text-xl font-bold tracking-tight text-white">
                ATS <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">LABS</span>
              </span>
            </Link>

            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Building Smart Apps for Everyday Life. An independent digital product studio crafting high-performance, privacy-conscious Android applications for the Google Play Store.
            </p>

            <div className="pt-2">
              <GooglePlayButton
                href="https://play.google.com/store/apps/developer?id=ATS+Labs"
                size="sm"
                textPrefix="DEVELOPER PORTFOLIO"
                textTitle="Google Play"
              />
            </div>
          </div>

          {/* Applications Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Applications
            </h3>
            <ul className="space-y-2">
              {APPS.length > 0 ? (
                <>
                  {APPS.slice(0, 5).map((app) => (
                    <li key={app.id}>
                      <Link
                        to={`/apps/${app.id}`}
                        className="text-sm text-slate-400 hover:text-indigo-400 transition-colors flex items-center gap-1 group"
                      >
                        <span>{app.name}</span>
                        <ArrowUpRight className="w-3 h-3 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all text-indigo-400" />
                      </Link>
                    </li>
                  ))}
                  <li>
                    <Link
                      to="/apps"
                      className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1 pt-1"
                    >
                      View All Apps ({APPS.length}) →
                    </Link>
                  </li>
                </>
              ) : (
                <>
                  <li className="text-xs text-slate-400 leading-relaxed">
                    Suite in active development for Google Play.
                  </li>
                  <li>
                    <Link
                      to="/apps"
                      className="text-sm text-indigo-400 hover:text-indigo-300 transition-colors inline-flex items-center gap-1"
                    >
                      Browse App Catalog →
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          {/* Studio Navigation Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                  About ATS Labs
                </Link>
              </li>
              <li>
                <Link to="/about#philosophy" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                  Engineering Philosophy
                </Link>
              </li>
              <li>
                <Link to="/about#privacy" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                  Privacy First Pledge
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-slate-200 transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal & Compliance Column */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300">
              Legal & Trust
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/privacy" className="text-sm text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <a
                  href="https://support.google.com/googleplay/android-developer"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-400 hover:text-slate-200 transition-colors inline-flex items-center gap-1"
                >
                  <span>Play Developer Policies</span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-slate-400 hover:text-slate-200 transition-colors flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-slate-500" />
                  Security Disclosure
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p>© {new Date().getFullYear()} ATS Labs. All rights reserved. Crafted with precision for Android.</p>
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1 text-slate-400">
              Designed for Android & Google Play
            </span>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <Link to="/privacy" className="hover:text-slate-200 transition-colors">
              Privacy
            </Link>
            <div className="w-1 h-1 rounded-full bg-slate-600" />
            <Link to="/contact" className="hover:text-slate-200 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
