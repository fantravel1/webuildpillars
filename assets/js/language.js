/**
 * We Build Pillars - Language Switching
 * Handles multilingual navigation (EN, ES, FR)
 */

(function() {
  'use strict';

  // Language configuration
  const LANGUAGES = {
    en: {
      code: 'en',
      name: 'English',
      prefix: '',
      dir: 'ltr'
    },
    es: {
      code: 'es',
      name: 'Español',
      prefix: '/es',
      dir: 'ltr'
    },
    fr: {
      code: 'fr',
      name: 'Français',
      prefix: '/fr',
      dir: 'ltr'
    }
  };

  // Page path mappings (English to other languages)
  const PAGE_MAPPINGS = {
    en: {
      '/': '/',
      '/about': '/about',
      '/how-it-works': '/how-it-works',
      '/request-domain': '/request-domain',
      '/success-stories': '/success-stories',
      '/works': '/works',
      '/ai-tools': '/ai-tools',
      '/faq': '/faq',
      '/contact': '/contact',
      '/pillars/nonprofits': '/pillars/nonprofits',
      '/pillars/artists': '/pillars/artists',
      '/pillars/knowledge-builders': '/pillars/knowledge-builders'
    },
    es: {
      '/': '/',
      '/about': '/sobre-nosotros',
      '/how-it-works': '/como-funciona',
      '/request-domain': '/solicitar-dominio',
      '/success-stories': '/historias-de-exito',
      '/works': '/obras',
      '/ai-tools': '/herramientas-ia',
      '/faq': '/preguntas-frecuentes',
      '/contact': '/contacto',
      '/pillars/nonprofits': '/pilares/organizaciones',
      '/pillars/artists': '/pilares/artistas',
      '/pillars/knowledge-builders': '/pilares/constructores-conocimiento'
    },
    fr: {
      '/': '/',
      '/about': '/a-propos',
      '/how-it-works': '/comment-ca-marche',
      '/request-domain': '/demander-domaine',
      '/success-stories': '/temoignages',
      '/works': '/travaux',
      '/ai-tools': '/outils-ia',
      '/faq': '/faq',
      '/contact': '/contact',
      '/pillars/nonprofits': '/piliers/organisations',
      '/pillars/artists': '/piliers/artistes',
      '/pillars/knowledge-builders': '/piliers/createurs-savoir'
    }
  };

  // Storage key for language preference
  const STORAGE_KEY = 'wbp-lang';

  /**
   * Get current language from URL
   */
  const getCurrentLanguage = () => {
    const path = window.location.pathname;

    if (path.startsWith('/es/') || path === '/es') {
      return 'es';
    }
    if (path.startsWith('/fr/') || path === '/fr') {
      return 'fr';
    }

    return 'en';
  };

  /**
   * Get current page path without language prefix
   */
  const getCurrentPagePath = () => {
    let path = window.location.pathname;

    // Remove language prefix
    if (path.startsWith('/es')) {
      path = path.replace('/es', '') || '/';
    } else if (path.startsWith('/fr')) {
      path = path.replace('/fr', '') || '/';
    }

    // Remove .html extension for comparison
    path = path.replace('.html', '');

    // Handle trailing slash
    if (path !== '/' && path.endsWith('/')) {
      path = path.slice(0, -1);
    }

    return path;
  };

  /**
   * Get equivalent page path in target language
   */
  const getTranslatedPath = (targetLang) => {
    const currentLang = getCurrentLanguage();
    const currentPath = getCurrentPagePath();

    // Find English equivalent of current path
    let englishPath = currentPath;

    if (currentLang !== 'en') {
      // Find the English key that maps to current path
      const langMappings = PAGE_MAPPINGS[currentLang];
      for (const [enPath, localPath] of Object.entries(langMappings)) {
        if (localPath === currentPath) {
          englishPath = enPath;
          break;
        }
      }
    }

    // Get target language path
    const targetPath = PAGE_MAPPINGS[targetLang][englishPath] || englishPath;
    const prefix = LANGUAGES[targetLang].prefix;

    // Construct full URL
    let fullPath = prefix + targetPath;

    // Add .html extension if not index
    if (fullPath !== '/' && fullPath !== '/es/' && fullPath !== '/fr/' &&
        !fullPath.endsWith('/')) {
      fullPath += '.html';
    }

    return fullPath;
  };

  /**
   * Save language preference
   */
  const saveLanguagePreference = (lang) => {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage not available
    }
  };

  /**
   * Get saved language preference
   */
  const getSavedLanguage = () => {
    try {
      return localStorage.getItem(STORAGE_KEY);
    } catch (e) {
      return null;
    }
  };

  /**
   * Initialize language switcher buttons
   */
  const initLanguageSwitcher = () => {
    const switchers = document.querySelectorAll('.lang-switch');
    const currentLang = getCurrentLanguage();

    switchers.forEach(switcher => {
      const buttons = switcher.querySelectorAll('.lang-switch__btn');

      buttons.forEach(btn => {
        const lang = btn.dataset.lang;

        // Mark current language as active
        if (lang === currentLang) {
          btn.classList.add('lang-switch__btn--active');
          btn.setAttribute('aria-current', 'true');
        }

        // Handle click
        btn.addEventListener('click', (e) => {
          e.preventDefault();

          if (lang !== currentLang) {
            saveLanguagePreference(lang);
            window.location.href = getTranslatedPath(lang);
          }
        });
      });
    });
  };

  /**
   * Update document language attribute
   */
  const updateDocumentLang = () => {
    const currentLang = getCurrentLanguage();
    document.documentElement.lang = currentLang;
    document.documentElement.dir = LANGUAGES[currentLang].dir;
  };

  /**
   * Auto-redirect based on saved preference (optional)
   * Only on first visit to root
   */
  const checkLanguageRedirect = () => {
    const savedLang = getSavedLanguage();
    const currentLang = getCurrentLanguage();
    const currentPath = window.location.pathname;

    // Only redirect from homepage if preference differs
    if (savedLang && savedLang !== currentLang && currentPath === '/') {
      // Don't auto-redirect - let user choose
      // Uncomment below to enable auto-redirect:
      // window.location.href = LANGUAGES[savedLang].prefix + '/';
    }
  };

  /**
   * Initialize
   */
  const init = () => {
    updateDocumentLang();
    initLanguageSwitcher();
    checkLanguageRedirect();
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

  // Export for use in other scripts
  window.WBPLanguage = {
    getCurrentLanguage,
    getTranslatedPath,
    LANGUAGES
  };

})();
