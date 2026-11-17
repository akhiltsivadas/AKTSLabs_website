import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowRight, Shield, Smartphone, Heart, BatteryCharging, Wifi, Layers } from 'lucide-react';
import { Link } from 'react-router-dom';

export const PhoneMockup3D = () => {
  return (
    <div className="relative w-full max-w-lg lg:max-w-xl mx-auto flex flex-col items-center">
      {/* Background radial glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/25 via-indigo-600/20 to-purple-600/25 rounded-[50px] blur-3xl opacity-70 -z-10 animate-pulse-slow" />

      {/* 3D Perspective Phone Container */}
      <motion.div
        className="relative w-[300px] sm:w-[330px] h-[580px] sm:h-[620px] rounded-[48px] p-3.5 bg-gradient-to-b from-slate-700/80 via-slate-800/80 to-slate-950 border-[2px] border-slate-600/60 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(99,102,241,0.2)] backdrop-blur-2xl"
        animate={{
          y: [-5, 5, -5],
          rotateZ: [-0.5, 0.5, -0.5],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
        style={{
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer Phone Bezel Highlight */}
        <div className="absolute inset-0 rounded-[48px] border border-white/20 pointer-events-none" />

        {/* Screen Bezel and Inner Display */}
        <div className="relative w-full h-full rounded-[38px] bg-[#070b14] overflow-hidden flex flex-col justify-between border border-slate-800 shadow-inner p-5">
          {/* Status Bar */}
          <div className="flex items-center justify-between text-[11px] font-semibold text-slate-400 select-none -mx-2 -mt-2">
            <span>09:41</span>
            {/* Camera punch hole */}
            <div className="w-3.5 h-3.5 rounded-full bg-black border border-slate-800" />
            <div className="flex items-center gap-1.5">
              <Wifi className="w-3.5 h-3.5 text-slate-400" />
              <BatteryCharging className="w-3.5 h-3.5 text-emerald-400" />
            </div>
          </div>

          {/* Clean Studio Showcase Screen */}
          <div className="space-y-4 my-auto">
            {/* Studio Card */}
            <div className="p-5 rounded-2xl bg-gradient-to-br from-indigo-950/60 via-slate-900/80 to-slate-900/90 border border-indigo-500/30 text-center relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-tr from-blue-500 via-indigo-500 to-purple-500 p-[1.5px] mx-auto mb-3 shadow-lg shadow-indigo-500/20">
                <div className="w-full h-full bg-[#0a0e1c] rounded-[14px] flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-indigo-400" />
                </div>
              </div>
              <h3 className="text-base font-bold text-white">ATS Labs</h3>
              <p className="text-xs text-indigo-300 font-medium mt-0.5">
                Building Smart Apps for Everyday Life
              </p>
            </div>

            {/* Core Values inside Phone */}
            <div className="space-y-2.5">
              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-500/10 text-blue-400 border border-blue-500/20 flex items-center justify-center flex-shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Thoughtful Design</div>
                  <div className="text-[10px] text-slate-400">Clean, simple and intuitive</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Privacy Focused</div>
                  <div className="text-[10px] text-slate-400">Your data stays with you</div>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-500/10 text-purple-400 border border-purple-500/20 flex items-center justify-center flex-shrink-0">
                  <Heart className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-white">Everyday Utility</div>
                  <div className="text-[10px] text-slate-400">Made for daily simplicity</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Card inside phone */}
          <div className="pt-2">
            <Link
              to="/apps"
              className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold flex items-center justify-center gap-1.5 shadow-md shadow-indigo-600/30 transition-all hover:brightness-110"
            >
              <span>Explore Applications</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            
            {/* Gesture bar */}
            <div className="w-24 h-1 rounded-full bg-slate-700 mx-auto mt-4" />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PhoneMockup3D;
