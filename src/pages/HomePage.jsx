import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../utils/seo';
import HeroSection from '../components/home/HeroSection';
import FeaturedApps from '../components/home/FeaturedApps';
import CategoryShowcase from '../components/home/CategoryShowcase';

export const HomePage = () => {
  useSEO({
    title: 'ATS Labs — Building Smart Apps for Everyday Life',
    description: 'ATS Labs is an independent Android app development studio creating useful, intuitive and innovative mobile apps for Google Play Store.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <HeroSection />
      <FeaturedApps />
      <CategoryShowcase />
    </motion.div>
  );
};

export default HomePage;
