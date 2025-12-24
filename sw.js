/**
 * We Build Pillars - Service Worker
 * Provides offline capability and caching for improved performance
 */

const CACHE_NAME = 'wbp-cache-v1';
const OFFLINE_PAGE = '/404.html';

// Core assets to cache immediately
const CORE_ASSETS = [
  '/',
  '/index.html',
  '/about.html',
  '/how-it-works.html',
  '/request-domain.html',
  '/faq.html',
  '/contact.html',
  '/works.html',
  '/ai-tools.html',
  '/success-stories.html',
  '/pillars/nonprofits.html',
  '/pillars/artists.html',
  '/pillars/knowledge-builders.html',
  '/privacy.html',
  '/terms.html',
  '/404.html',
  '/assets/css/variables.css',
  '/assets/css/styles.css',
  '/assets/js/main.js',
  '/assets/js/language.js',
  '/assets/images/icons/favicon.svg',
  '/assets/images/icons/logo.svg',
  '/manifest.json'
];

// Install event - cache core assets
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        console.log('Caching core assets');
        return cache.addAll(CORE_ASSETS);
      })
      .then(() => self.skipWaiting())
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((cacheNames) => {
        return Promise.all(
          cacheNames
            .filter((name) => name !== CACHE_NAME)
            .map((name) => caches.delete(name))
        );
      })
      .then(() => self.clients.claim())
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') {
    return;
  }

  // Skip cross-origin requests
  if (!event.request.url.startsWith(self.location.origin)) {
    return;
  }

  // Skip Formspree and analytics requests
  if (event.request.url.includes('formspree.io') ||
      event.request.url.includes('analytics') ||
      event.request.url.includes('fonts.googleapis.com') ||
      event.request.url.includes('fonts.gstatic.com')) {
    return;
  }

  event.respondWith(
    caches.match(event.request)
      .then((cachedResponse) => {
        // Return cached response if available
        if (cachedResponse) {
          // Fetch fresh version in background
          fetchAndCache(event.request);
          return cachedResponse;
        }

        // Otherwise fetch from network
        return fetchAndCache(event.request);
      })
      .catch(() => {
        // If both cache and network fail, show offline page for HTML requests
        if (event.request.headers.get('accept').includes('text/html')) {
          return caches.match(OFFLINE_PAGE);
        }
      })
  );
});

// Helper function to fetch and cache
function fetchAndCache(request) {
  return fetch(request)
    .then((response) => {
      // Don't cache non-successful responses
      if (!response || response.status !== 200 || response.type !== 'basic') {
        return response;
      }

      // Clone the response
      const responseToCache = response.clone();

      // Cache the fresh response
      caches.open(CACHE_NAME)
        .then((cache) => {
          cache.put(request, responseToCache);
        });

      return response;
    });
}

// Handle messages from clients
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
