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

  // Page views
  pageView: (pageName: string, path: string) => {
    trackEvent('page_view', { page_name: pageName, page_path: path });
  },

  // External links
  externalLink: (url: string, label: string) => {
    trackEvent('external_link_click', { url, label });
  },

  // Scroll depth
  scrollDepth: (percentage: number) => {
    trackEvent('scroll_depth', { percentage });
  },

  // Carousel interactions
  carouselInteraction: (action: 'next' | 'prev' | 'slide', slideIndex: number, section: string) => {
    trackEvent('carousel_interaction', { action, slide_index: slideIndex, section });
  },

  // Mobile menu
  mobileMenuToggle: (isOpen: boolean) => {
    trackEvent('mobile_menu_toggle', { is_open: isOpen });
  },

  // WhatsApp click
  whatsappClick: (location: string) => {
    trackEvent('whatsapp_click', { location });
  },

  // Approach page navigation
  approachSlideView: (slideIndex: number, slideName: string) => {
    trackEvent('approach_slide_view', { slide_index: slideIndex, slide_name: slideName });
  },
};
