/**
 * We Build Pillars - Main JavaScript
 * Mobile-first, accessible, progressive enhancement
 */

(function() {
  'use strict';

  // ==========================================================================
  // Mobile Navigation
  // ==========================================================================

  const initNavigation = () => {
    const navToggle = document.querySelector('.nav-toggle');
    const nav = document.querySelector('.nav');
    const navOverlay = document.querySelector('.nav-overlay');
    const navLinks = document.querySelectorAll('.nav__link');

    if (!navToggle || !nav) return;

    const toggleNav = (open) => {
      const isOpen = open !== undefined ? open : nav.dataset.visible !== 'true';

      nav.dataset.visible = isOpen;
      navToggle.setAttribute('aria-expanded', isOpen);

      if (navOverlay) {
        navOverlay.dataset.visible = isOpen;
      }

      // Prevent body scroll when nav is open
      document.body.style.overflow = isOpen ? 'hidden' : '';

      // Focus management
      if (isOpen) {
        nav.querySelector('a')?.focus();
      } else {
        navToggle.focus();
      }
    };

    navToggle.addEventListener('click', () => toggleNav());

    if (navOverlay) {
      navOverlay.addEventListener('click', () => toggleNav(false));
    }

    // Close nav on link click (mobile)
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (window.innerWidth < 1024) {
          toggleNav(false);
        }
      });
    });

    // Close nav on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && nav.dataset.visible === 'true') {
        toggleNav(false);
      }
    });

    // Handle resize
    let resizeTimeout;
    window.addEventListener('resize', () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (window.innerWidth >= 1024 && nav.dataset.visible === 'true') {
          toggleNav(false);
        }
      }, 100);
    });
  };

  // ==========================================================================
  // FAQ Accordion
  // ==========================================================================

  const initFAQ = () => {
    const faqItems = document.querySelectorAll('.faq__item');

    faqItems.forEach(item => {
      const question = item.querySelector('.faq__question');

      if (question) {
        question.addEventListener('click', () => {
          const isOpen = item.hasAttribute('open');

          // Close other items (optional - for accordion behavior)
          // faqItems.forEach(other => {
          //   if (other !== item) other.removeAttribute('open');
          // });

          if (isOpen) {
            item.removeAttribute('open');
          } else {
            item.setAttribute('open', '');
          }
        });
      }
    });
  };

  // ==========================================================================
  // Smooth Scroll for Anchor Links
  // ==========================================================================

  const initSmoothScroll = () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();

          // Account for sticky header
          const header = document.querySelector('.header');
          const headerHeight = header ? header.offsetHeight : 0;
          const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - headerHeight - 20;

          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });

          // Update URL without jumping
          history.pushState(null, '', targetId);

          // Focus target for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  };

  // ==========================================================================
  // Form Validation
  // ==========================================================================

  const initFormValidation = () => {
    const forms = document.querySelectorAll('form[data-validate]');

    forms.forEach(form => {
      const inputs = form.querySelectorAll('input, textarea, select');

      // Real-time validation
      inputs.forEach(input => {
        input.addEventListener('blur', () => validateField(input));
        input.addEventListener('input', () => {
          if (input.classList.contains('form__input--error')) {
            validateField(input);
          }
        });
      });

      // Form submission
      form.addEventListener('submit', (e) => {
        let isValid = true;

        inputs.forEach(input => {
          if (!validateField(input)) {
            isValid = false;
          }
        });

        if (!isValid) {
          e.preventDefault();
          // Focus first error
          const firstError = form.querySelector('.form__input--error');
          if (firstError) firstError.focus();
        }
      });
    });

    function validateField(input) {
      const errorElement = input.parentElement.querySelector('.form__error');
      let isValid = true;
      let errorMessage = '';

      // Required validation
      if (input.hasAttribute('required') && !input.value.trim()) {
        isValid = false;
        errorMessage = 'This field is required';
      }

      // Email validation
      if (input.type === 'email' && input.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(input.value)) {
          isValid = false;
          errorMessage = 'Please enter a valid email address';
        }
      }

      // URL validation
      if (input.type === 'url' && input.value) {
        try {
          new URL(input.value);
        } catch {
          isValid = false;
          errorMessage = 'Please enter a valid URL';
        }
      }

      // Update UI
      if (isValid) {
        input.classList.remove('form__input--error');
        if (errorElement) errorElement.textContent = '';
      } else {
        input.classList.add('form__input--error');
        if (errorElement) errorElement.textContent = errorMessage;
      }

      return isValid;
    }
  };

  // ==========================================================================
  // Intersection Observer for Animations
  // ==========================================================================

  const initAnimations = () => {
    if (!('IntersectionObserver' in window)) return;

    const animatedElements = document.querySelectorAll('[data-animate]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
  };

  // ==========================================================================
  // Active Navigation State
  // ==========================================================================

  const initActiveNav = () => {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav__link');

    navLinks.forEach(link => {
      const linkPath = link.getAttribute('href');

      // Handle both exact match and partial match for language prefixes
      if (linkPath === currentPath ||
          (currentPath.endsWith('/') && linkPath === currentPath.slice(0, -1)) ||
          (currentPath === linkPath + '.html')) {
        link.classList.add('nav__link--active');
        link.setAttribute('aria-current', 'page');
      }
    });
  };

  // ==========================================================================
  // Copy to Clipboard (for sharing)
  // ==========================================================================

  const initCopyLinks = () => {
    const copyButtons = document.querySelectorAll('[data-copy]');

    copyButtons.forEach(button => {
      button.addEventListener('click', async () => {
        const textToCopy = button.dataset.copy || window.location.href;

        try {
          await navigator.clipboard.writeText(textToCopy);

          const originalText = button.textContent;
          button.textContent = 'Copied!';
          button.disabled = true;

          setTimeout(() => {
            button.textContent = originalText;
            button.disabled = false;
          }, 2000);
        } catch (err) {
          console.error('Failed to copy:', err);
        }
      });
    });
  };

  // ==========================================================================
  // Lazy Loading Images
  // ==========================================================================

  const initLazyLoading = () => {
    if ('loading' in HTMLImageElement.prototype) {
      // Native lazy loading supported
      const images = document.querySelectorAll('img[loading="lazy"]');
      images.forEach(img => {
        if (img.dataset.src) {
          img.src = img.dataset.src;
        }
      });
    } else if ('IntersectionObserver' in window) {
      // Fallback to IntersectionObserver
      const images = document.querySelectorAll('img[data-src]');

      const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        });
      });

      images.forEach(img => imageObserver.observe(img));
    }
  };

  // ==========================================================================
  // External Link Handler
  // ==========================================================================

  const initExternalLinks = () => {
    const links = document.querySelectorAll('a[href^="http"]');
    const currentHost = window.location.host;

    links.forEach(link => {
      const linkHost = new URL(link.href).host;

      if (linkHost !== currentHost) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');

        // Add visual indicator for screen readers
        if (!link.querySelector('.sr-only')) {
          const srText = document.createElement('span');
          srText.className = 'sr-only';
          srText.textContent = ' (opens in new tab)';
          link.appendChild(srText);
        }
      }
    });
  };

  // ==========================================================================
  // Service Worker Registration
  // ==========================================================================

  const initServiceWorker = () => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then((registration) => {
            console.log('SW registered:', registration.scope);

            // Check for updates
            registration.addEventListener('updatefound', () => {
              const newWorker = registration.installing;
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New content available, show refresh prompt
                  console.log('New content available, refresh to update.');
                }
              });
            });
          })
          .catch((error) => {
            console.log('SW registration failed:', error);
          });
      });
    }
  };

  // ==========================================================================
  // Initialize
  // ==========================================================================

  const init = () => {
    initNavigation();
    initFAQ();
    initSmoothScroll();
    initFormValidation();
    initAnimations();
    initActiveNav();
    initCopyLinks();
    initLazyLoading();
    initExternalLinks();
    initServiceWorker();
  };

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
