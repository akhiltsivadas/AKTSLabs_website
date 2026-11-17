import React from 'react';
import { motion } from 'framer-motion';
import { 
  Sparkles, 
  Wallet, 
  CheckCircle2, 
  Heart, 
  Wrench, 
  Headphones, 
  GraduationCap, 
  MessageSquare,
  Layers
} from 'lucide-react';
import { CATEGORIES } from '../../data/categories';

export const CategoryFilter = ({ activeCategory, onSelectCategory, categoryCounts = {} }) => {
  const iconMap = {
    Sparkles,
    Wallet,
    CheckCircle2,
    Heart,
    Wrench,
    Headphones,
    GraduationCap,
    MessageSquare,
  };

  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none no-scrollbar py-1">
      {CATEGORIES.map((cat) => {
        const IconComponent = iconMap[cat.icon] || Layers;
        const isSelected = activeCategory === cat.id;
        const count = categoryCounts[cat.id] ?? cat.count;

        return (
          <button
            key={cat.id}
            onClick={() => onSelectCategory(cat.id)}
            className={`relative flex-shrink-0 flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 border ${
              isSelected
                ? 'text-white border-indigo-500/50 shadow-md shadow-indigo-500/20'
                : 'text-slate-400 hover:text-slate-200 bg-slate-900/60 hover:bg-slate-800/80 border-slate-800/80'
            }`}
          >
            {isSelected && (
              <motion.div
                layoutId="active-category-bg"
                className="absolute inset-0 rounded-xl bg-gradient-to-r from-indigo-600 via-blue-600 to-purple-600 z-0"
                transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              />
            )}
            <span className="relative z-10 flex items-center gap-1.5">
              <IconComponent className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
              {count > 0 && (
                <span className={`ml-1 text-[10px] px-1.5 py-0.2 rounded-full ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-slate-800 text-slate-400'
                }`}>
                  {count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;
