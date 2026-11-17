import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Sparkles, Layers, SlidersHorizontal, Smartphone } from 'lucide-react';
import { useSEO } from '../utils/seo';
import { APPS } from '../data/apps';
import SearchBar from '../components/apps/SearchBar';
import CategoryFilter from '../components/apps/CategoryFilter';
import AppGrid from '../components/apps/AppGrid';

export const AppsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'All';
  const initialQuery = searchParams.get('q') || '';

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [searchQuery, setSearchQuery] = useState(initialQuery);

  useSEO({
    title: 'Our Android Applications — ATS Labs Catalog',
    description: 'Explore the directory of innovative, privacy-first Android applications published on Google Play by ATS Labs.',
  });

  // Sync category state with URL params
  useEffect(() => {
    const cat = searchParams.get('category');
    if (cat) {
      setActiveCategory(cat);
    }
  }, [searchParams]);

  const handleCategoryChange = (category) => {
    setActiveCategory(category);
    if (category === 'All') {
      searchParams.delete('category');
    } else {
      searchParams.set('category', category);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const handleSearchChange = (query) => {
    setSearchQuery(query);
    if (!query) {
      searchParams.delete('q');
    } else {
      searchParams.set('q', query);
    }
    setSearchParams(searchParams, { replace: true });
  };

  const resetFilters = () => {
    setActiveCategory('All');
    setSearchQuery('');
    setSearchParams({}, { replace: true });
  };

  // Calculate dynamic category counts
  const categoryCounts = useMemo(() => {
    const counts = { All: APPS.length };
    APPS.forEach((app) => {
      counts[app.category] = (counts[app.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered applications
  const filteredApps = useMemo(() => {
    return APPS.filter((app) => {
      const matchesCategory =
        activeCategory === 'All' ||
        app.category.toLowerCase() === activeCategory.toLowerCase();

      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        app.name.toLowerCase().includes(q) ||
        app.tagline.toLowerCase().includes(q) ||
        app.description.toLowerCase().includes(q) ||
        app.category.toLowerCase().includes(q) ||
        (app.features && app.features.some((f) => f.toLowerCase().includes(q)));

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  const isFiltered = activeCategory !== 'All' || searchQuery.trim().length > 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="pt-32 pb-24 min-h-screen"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-4">
            <Smartphone className="w-3.5 h-3.5" />
            <span>Google Play Portfolio</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-white tracking-tight">
            Our Applications
          </h1>
          <p className="text-slate-400 text-base sm:text-lg mt-3 leading-relaxed">
            Discover thoughtfully engineered mobile experiences designed for speed, focus, and everyday simplicity.
          </p>
        </div>

        {/* Filter & Search Bar Controls (show when apps exist or search is active) */}
        {(APPS.length > 0 || isFiltered) && (
          <div className="mb-10 space-y-6">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              <SearchBar
                searchQuery={searchQuery}
                setSearchQuery={handleSearchChange}
                placeholder="Search apps by title, category, feature..."
              />
              <div className="text-xs text-slate-400 font-semibold px-2">
                Showing <span className="text-indigo-400 font-bold">{filteredApps.length}</span> of {APPS.length} apps
              </div>
            </div>

            {/* Category Filter Pills */}
            <div className="pt-2 border-t border-slate-800/60">
              <CategoryFilter
                activeCategory={activeCategory}
                onSelectCategory={handleCategoryChange}
                categoryCounts={categoryCounts}
              />
            </div>
          </div>
        )}

        {/* App Grid */}
        <AppGrid
          apps={filteredApps}
          onResetFilters={resetFilters}
          isFiltered={isFiltered}
        />
      </div>
    </motion.div>
  );
};

export default AppsPage;
