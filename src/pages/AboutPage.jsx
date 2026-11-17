import React from 'react';
import { motion } from 'framer-motion';
import { useSEO } from '../utils/seo';
import AboutHero from '../components/about/AboutHero';
import PrinciplesSection from '../components/about/PrinciplesSection';

export const AboutPage = () => {
  useSEO({
    title: 'About ATS Labs — Independent Android App Studio',
    description: 'Learn about ATS Labs: our vision, mission, and commitment to creating thoughtful Android applications.',
  });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <AboutHero />
      <PrinciplesSection />
    </motion.div>
  );
};

export default AboutPage;
