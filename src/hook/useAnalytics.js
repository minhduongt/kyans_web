/* eslint-disable no-undef */
import { useEffect } from 'react';

const useAnalytics = () => {
  // Initialize GA4
  useEffect(() => {
    // Load GA4 script
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${import.meta.env.VITE_GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', import.meta.env.VITE_GA_MEASUREMENT_ID, {
      send_page_view: true,
      cookie_flags: 'max-age=7200;secure;samesite=none',
    });

    // Track initial page view
    gtag('event', 'page_view', {
      page_title: document.title,
      page_location: window.location.href,
      user_agent: navigator.userAgent,
      language: navigator.language,
    });

    // Cleanup
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  // Custom event tracking function
  const trackEvent = (eventName, parameters = {}) => {
    if (!window.gtag) return;

    window.gtag('event', eventName, parameters);
  };

  return { trackEvent };
};

export default useAnalytics;
