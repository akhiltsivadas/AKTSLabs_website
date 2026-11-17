import React from 'react';
import { Search, X } from 'lucide-react';

export const SearchBar = ({ searchQuery, setSearchQuery, placeholder = "Search apps by name, feature, or keyword..." }) => {
  return (
    <div className="relative w-full max-w-xl">
      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-400">
        <Search className="w-5 h-5 text-slate-400" />
      </div>

      <input
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder={placeholder}
        className="w-full pl-11 pr-10 py-3.5 rounded-2xl bg-slate-900/80 border border-slate-700/70 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 text-white placeholder-slate-400 text-sm sm:text-base outline-none transition-all shadow-inner backdrop-blur-md"
      />

      {searchQuery && (
        <button
          onClick={() => setSearchQuery('')}
          className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-slate-400 hover:text-white transition-colors"
          aria-label="Clear search"
        >
          <X className="w-4 h-4 p-0.5 rounded-full bg-slate-800 hover:bg-slate-700" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
