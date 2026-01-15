// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag: (...args: unknown[]) => void;
  }
}

export const trackEvent = (
  eventName: string,
  parameters?: Record<string, string | number | boolean>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Pre-defined events for common actions
export const analytics = {
  // CTA clicks
  ctaClick: (ctaName: string, location: string) => {
    trackEvent('cta_click', { cta_name: ctaName, location });
  },

  // Navigation
  navClick: (section: string) => {
    trackEvent('navigation_click', { section });
  },

  // Social links
  socialClick: (platform: string, person?: string) => {
    trackEvent('social_click', { platform, person: person || 'brand' });
  },

  // Contact actions
  contactClick: (method: string) => {
    trackEvent('contact_click', { method });
  },

  // Section views (for scroll tracking)
  sectionView: (section: string) => {
    trackEvent('section_view', { section });
  },
};
