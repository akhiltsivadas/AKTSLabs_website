import { useEffect } from 'react';

export const useSEO = ({ title, description, ogImage }) => {
  useEffect(() => {
    const defaultTitle = 'ATS Labs — Building Smart Apps for Everyday Life';
    const siteTitle = title ? `${title} | ATS Labs` : defaultTitle;
    document.title = siteTitle;

    if (description) {
      let metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute('content', description);
      }
      let ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) {
        ogDesc.setAttribute('content', description);
      }
    }

    if (title) {
      let ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) {
        ogTitle.setAttribute('content', siteTitle);
      }
    }

    if (ogImage) {
      let metaOgImage = document.querySelector('meta[property="og:image"]');
      if (metaOgImage) {
        metaOgImage.setAttribute('content', ogImage);
      }
    }
  }, [title, description, ogImage]);
};
