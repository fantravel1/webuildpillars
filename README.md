# 🏛️ We Build Pillars

**Premium Domain Philanthropy for Pillar Communities**

[![GitHub Pages](https://img.shields.io/badge/Hosted%20on-GitHub%20Pages-blue?logo=github)](https://webuildpillars.com)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Multilingual](https://img.shields.io/badge/Languages-EN%20|%20ES%20|%20FR-orange)](#multilingual-architecture)

> *Retake the Web. Build with Pillars.*

**We Build Pillars** is the social impact arm of [Pillar Media & Entertainment](https://pillarme.com), pioneering a new category of digital philanthropy: **Premium Domain Gifting**. We gift premium domains valued at $1,000 to $100,000+ to nonprofits, artists, and knowledge builders from pillar communities — completely free.

🌐 **Live Site:** [www.webuildpillars.com](https://www.webuildpillars.com)  
🏢 **Parent Company:** [pillarme.com](https://pillarme.com)  
📧 **Contact:** [Via Formspree Form](https://www.webuildpillars.com/contact)

---

## 📋 Table of Contents

- [The Vision](#-the-vision)
- [Three Pillars of Impact](#-three-pillars-of-impact)
- [Site Architecture](#-site-architecture)
- [Technical Stack](#-technical-stack)
- [SEO/AEO Strategy](#-seoaeo-strategy)
- [Mobile-First Design](#-mobile-first-design)
- [Multilingual Architecture](#-multilingual-architecture)
- [File Structure](#-file-structure)
- [Page Inventory](#-page-inventory)
- [Development Guidelines](#-development-guidelines)
- [Performance Requirements](#-performance-requirements)
- [Deployment](#-deployment)
- [Content Strategy](#-content-strategy)
- [Contributing](#-contributing)
- [License](#-license)

---

## 🎯 The Vision

The internet was supposed to democratize creation. Instead, it concentrated power. Platform algorithms decide who gets seen. Premium domains cost more than annual salaries. Technical barriers exclude billions.

**The Gap We Fill:**
- Google donates $10,000/month in ad credits — but no premium domains
- Microsoft gives free Office 365 — but no premium domains  
- AWS provides cloud credits — but no premium domains
- TechSoup offers software discounts — but no premium domains

**No one in the entire digital equity ecosystem provides premium domain names.**

We Build Pillars changes that with a $126M+ domain portfolio and AI build credits for:
- 🏛️ **Nonprofits** whose missions deserve authoritative URLs
- 🎨 **Artists** who platforms have suppressed and underpaid
- 📚 **Knowledge Builders** preserving underrepresented stories

---

## 🏛️ Three Pillars of Impact

### Pillar One: Mission-Driven Organizations
Small nonprofits, social enterprises, and community organizations serving pillar communities. No 501(c)(3) required — we verify mission, not paperwork.

### Pillar Two: Creative Visionaries  
Artists, musicians, filmmakers, and cultural producers from Black, Brown, Queer, Indigenous, neurodiverse, female, migrant, and differently abled communities.

### Pillar Three: Knowledge Champions
Educators, hobbyists, citizen scientists, and passionate experts creating knowledge repositories, wikis, courses, and reference databases.

**The Commitment Model:**
| Tier | Publishing Commitment | Domain Value | AI Credits |
|------|----------------------|--------------|------------|
| 🌱 Foundation | Monthly | Quality domain | Basic |
| 🌿 Growth | Weekly | Premium domain | Extended |
| 🌳 Impact | 3x Weekly | Ultra-premium ($5K+) | Unlimited |
| 🏔️ Legacy | Daily + Community | Highest-value | Full support |

---

## 🏗️ Site Architecture

```
webuildpillars.com/
├── index.html                 # Homepage - Vision + 3 Pillars + CTA
├── about.html                 # Story, Mission, Values, Parent Company
├── how-it-works.html          # Process, Tiers, Commitment Model
├── request-domain.html        # Unified Application (Formspree)
├── success-stories.html       # Showcase of Pillar Builders
├── works.html                 # Blog/Thought Leadership Index
├── ai-tools.html              # Recommended AI WebDev Tools
├── faq.html                   # Comprehensive FAQ
├── contact.html               # Contact Form + Info
│
├── pillars/                   # Pillar-Specific Landing Pages
│   ├── nonprofits.html        # Pillar One Deep Dive
│   ├── artists.html           # Pillar Two Deep Dive
│   └── knowledge-builders.html # Pillar Three Deep Dive
│
├── works/                     # Individual Blog Posts
│   ├── myth-of-minority.html
│   ├── who-gets-to-create.html
│   ├── differences-as-differentiation.html
│   └── [future posts]
│
├── es/                        # Spanish Language Version
│   ├── index.html
│   ├── about.html
│   └── [mirrors all pages]
│
├── fr/                        # French Language Version
│   ├── index.html
│   ├── about.html
│   └── [mirrors all pages]
│
├── assets/
│   ├── css/
│   │   ├── styles.css         # Main stylesheet
│   │   ├── responsive.css     # Mobile-specific overrides
│   │   └── print.css          # Print stylesheet
│   ├── js/
│   │   ├── main.js            # Core functionality
│   │   ├── form-validation.js # Form handling
│   │   └── analytics.js       # Privacy-respecting analytics
│   ├── images/
│   │   ├── og/                # Open Graph images (1200x630)
│   │   ├── icons/             # Favicons and app icons
│   │   └── content/           # Page content images
│   └── fonts/                 # Self-hosted fonts (if any)
│
├── _config.yml                # Jekyll configuration (if using)
├── CNAME                      # Custom domain configuration
├── robots.txt                 # Search engine directives
├── sitemap.xml                # XML sitemap for all languages
├── manifest.json              # PWA manifest
├── sw.js                      # Service worker for offline
└── README.md                  # This file
```

---

## 💻 Technical Stack

### Core Technologies
| Technology | Purpose | Notes |
|------------|---------|-------|
| **HTML5** | Structure | Semantic markup, accessibility-first |
| **CSS3** | Styling | Custom properties, Grid, Flexbox |
| **Vanilla JS** | Interactivity | No framework dependencies |
| **GitHub Pages** | Hosting | Free, fast, reliable CDN |

### External Services
| Service | Purpose | Integration |
|---------|---------|-------------|
| **Formspree** | Form handling | Contact + Application forms |
| **Google Fonts** | Typography | Playfair Display, Space Grotesk |
| **Cloudflare** | CDN/Security | Optional enhancement |
| **Plausible/Fathom** | Analytics | Privacy-respecting (optional) |

### No Build Dependencies
This site is designed to work **without build tools**:
- No npm, webpack, or bundlers required
- Edit HTML/CSS/JS directly
- Push to GitHub → Live in seconds
- Maximum simplicity for long-term maintenance

---

## 🔍 SEO/AEO Strategy

### Search Engine Optimization (SEO)

#### Technical SEO Checklist
- [ ] Semantic HTML5 structure (`<header>`, `<main>`, `<article>`, `<section>`, `<nav>`)
- [ ] Descriptive `<title>` tags (50-60 characters, keyword-front)
- [ ] Meta descriptions (150-160 characters, action-oriented)
- [ ] Canonical URLs on every page
- [ ] XML sitemap with all languages
- [ ] robots.txt allowing all crawlers
- [ ] HTTPS enforced (GitHub Pages default)
- [ ] Mobile-friendly (Google requirement)
- [ ] Core Web Vitals optimized (LCP < 2.5s, FID < 100ms, CLS < 0.1)

#### On-Page SEO Structure
```html
<!-- Every page must include: -->
<html lang="en"> <!-- or "es", "fr" -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>[Page Title] | We Build Pillars</title>
  <meta name="description" content="[150-160 char description]">
  <link rel="canonical" href="https://webuildpillars.com/[path]">
  
  <!-- Open Graph -->
  <meta property="og:title" content="[Title]">
  <meta property="og:description" content="[Description]">
  <meta property="og:image" content="https://webuildpillars.com/assets/images/og/[page].jpg">
  <meta property="og:url" content="https://webuildpillars.com/[path]">
  <meta property="og:type" content="website">
  
  <!-- Twitter Card -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="[Title]">
  <meta name="twitter:description" content="[Description]">
  <meta name="twitter:image" content="https://webuildpillars.com/assets/images/og/[page].jpg">
  
  <!-- Multilingual -->
  <link rel="alternate" hreflang="en" href="https://webuildpillars.com/[path]">
  <link rel="alternate" hreflang="es" href="https://webuildpillars.com/es/[path]">
  <link rel="alternate" hreflang="fr" href="https://webuildpillars.com/fr/[path]">
  <link rel="alternate" hreflang="x-default" href="https://webuildpillars.com/[path]">
  
  <!-- Schema.org -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "We Build Pillars",
    "url": "https://webuildpillars.com",
    "logo": "https://webuildpillars.com/assets/images/logo.png",
    "parentOrganization": {
      "@type": "Organization",
      "name": "Pillar Media & Entertainment",
      "url": "https://pillarme.com"
    }
  }
  </script>
</head>
```

#### Target Keywords by Page
| Page | Primary Keyword | Secondary Keywords |
|------|----------------|-------------------|
| Homepage | free premium domains | domain philanthropy, nonprofit domains, artist domains |
| About | premium domain gifting | digital equity, DEI technology |
| How It Works | free domain for nonprofits | domain application, AI website builder |
| For Nonprofits | free domains for nonprofits | 501c3 website, charity domain |
| For Artists | free domains for artists | creator platform, artist portfolio domain |
| For Knowledge | free educational domains | wiki hosting, knowledge repository |
| FAQ | premium domain questions | domain gifting FAQ |

### Answer Engine Optimization (AEO)

AEO optimizes for AI assistants (ChatGPT, Claude, Perplexity, Google AI Overview) that increasingly answer user queries directly.

#### AEO Implementation
1. **FAQ Schema Markup** on FAQ page and relevant sections
2. **How-To Schema** on process pages
3. **Clear, direct answers** in first paragraph of each section
4. **Question-based headings** that match natural queries
5. **Structured data** for all key content types

```html
<!-- FAQ Schema Example -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "How do I get a free premium domain?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Apply through our Request a Domain page. Tell us about your connection to pillar communities, the domain you want, and your content commitment. The more ambitious your publishing plan, the more premium the domain we'll match you with."
    }
  }]
}
</script>
```

#### Content Patterns for AEO
- Start sections with definitive statements AI can quote
- Use "What is...", "How to...", "Why..." heading patterns
- Provide specific numbers and statistics when possible
- Create clear hierarchies with H1 → H2 → H3 structure
- Include comparison tables AI can reference

---

## 📱 Mobile-First Design

### Design Philosophy
**62% of global users access the internet primarily via mobile.** In pillar communities — especially Global South and lower-income populations — this rises to near-exclusivity. Our site must be **mobile-native, not mobile-adapted.**

### Mobile Requirements
| Requirement | Implementation |
|-------------|----------------|
| Touch targets | Minimum 44x44px for all interactive elements |
| Font sizes | Minimum 16px body text (prevents iOS zoom) |
| Line height | Minimum 1.5 for readability |
| Viewport | `<meta name="viewport" content="width=device-width, initial-scale=1.0">` |
| Images | Responsive with `srcset`, WebP with fallbacks |
| Forms | Large inputs, mobile-friendly keyboards |
| Navigation | Hamburger menu with full-screen overlay |
| CTAs | Full-width buttons on mobile |

### Responsive Breakpoints
```css
/* Mobile-first approach - base styles are mobile */

/* Tablet (768px+) */
@media (min-width: 768px) { }

/* Desktop (1024px+) */
@media (min-width: 1024px) { }

/* Large Desktop (1280px+) */
@media (min-width: 1280px) { }
```

### Performance Budget (Mobile)
| Metric | Budget | Tool |
|--------|--------|------|
| Total Page Weight | < 500KB | Chrome DevTools |
| Time to Interactive | < 3s on 3G | Lighthouse |
| First Contentful Paint | < 1.5s | Lighthouse |
| Largest Contentful Paint | < 2.5s | Lighthouse |
| Cumulative Layout Shift | < 0.1 | Lighthouse |

### Offline Capability
Service worker provides:
- Cached core pages for offline viewing
- Offline indicator in navigation
- Form data preservation if submitted offline

---

## 🌍 Multilingual Architecture

### Language Structure
```
webuildpillars.com/           → English (default)
webuildpillars.com/es/        → Spanish (Latin America focus)
webuildpillars.com/fr/        → French (Africa + Quebec focus)
```

### Implementation Requirements

#### URL Structure
- Subdirectory approach (not subdomains) for SEO authority consolidation
- Each language has complete mirror of all pages
- Language switcher on every page
- User's language preference stored in localStorage

#### hreflang Implementation
Every page includes reciprocal hreflang tags:
```html
<link rel="alternate" hreflang="en" href="https://webuildpillars.com/about">
<link rel="alternate" hreflang="es" href="https://webuildpillars.com/es/about">
<link rel="alternate" hreflang="fr" href="https://webuildpillars.com/fr/about">
<link rel="alternate" hreflang="x-default" href="https://webuildpillars.com/about">
```

#### Translation Guidelines
| Content Type | Approach |
|--------------|----------|
| Legal/Policy | Direct translation |
| Navigation/UI | Direct translation |
| Mission statements | Full transcreation |
| Marketing copy | Full transcreation |
| Blog posts | Transcreation or original content |
| Form labels | Direct translation |
| Error messages | Direct translation |

#### Spanish Considerations
- **Primary variant:** Latin American Spanish (ustedes, not vosotros)
- **Vocabulary:** Use neutral terms (computadora, not ordenador)
- **Tone:** Formal but warm
- **Note:** Some content may need Spain-specific variants later

#### French Considerations
- **Primary variant:** International French with Quebec awareness
- **Avoid anglicisms:** courriel (not e-mail), fin de semaine (not week-end)
- **Punctuation:** French spacing rules (space before : ; ? !)
- **Note:** Francophone Africa represents 60% of French speakers

#### Text Expansion
French and Spanish text runs 20-30% longer than English. Design must accommodate:
- Flexible button widths
- Expandable navigation items
- Multi-line heading allowances

---

## 📁 File Structure

```
webuildpillars/
│
├── index.html                      # Homepage
├── about.html                      # About Us
├── how-it-works.html               # Process & Tiers
├── request-domain.html             # Application Form
├── success-stories.html            # Showcase
├── works.html                      # Blog Index
├── ai-tools.html                   # Tool Recommendations
├── faq.html                        # FAQ
├── contact.html                    # Contact
│
├── pillars/
│   ├── nonprofits.html             # Pillar One
│   ├── artists.html                # Pillar Two
│   └── knowledge-builders.html     # Pillar Three
│
├── works/
│   ├── myth-of-minority.html
│   ├── who-gets-to-create.html
│   ├── differences-as-differentiation.html
│   ├── understanding-cms-systems.html
│   ├── seo-strategies-2025.html
│   ├── content-creation-strategies.html
│   ├── why-no-social-media.html
│   ├── building-a-community.html
│   └── best-practices-for-databases.html
│
├── es/                             # Spanish (mirrors all above)
│   ├── index.html
│   ├── sobre-nosotros.html
│   ├── como-funciona.html
│   ├── solicitar-dominio.html
│   ├── historias-de-exito.html
│   ├── obras.html
│   ├── herramientas-ia.html
│   ├── preguntas-frecuentes.html
│   ├── contacto.html
│   ├── pilares/
│   │   ├── organizaciones.html
│   │   ├── artistas.html
│   │   └── constructores-conocimiento.html
│   └── obras/
│       └── [translated posts]
│
├── fr/                             # French (mirrors all above)
│   ├── index.html
│   ├── a-propos.html
│   ├── comment-ca-marche.html
│   ├── demander-domaine.html
│   ├── temoignages.html
│   ├── travaux.html
│   ├── outils-ia.html
│   ├── faq.html
│   ├── contact.html
│   ├── piliers/
│   │   ├── organisations.html
│   │   ├── artistes.html
│   │   └── createurs-savoir.html
│   └── travaux/
│       └── [translated posts]
│
├── assets/
│   ├── css/
│   │   ├── styles.css              # Main styles
│   │   ├── variables.css           # CSS custom properties
│   │   └── utilities.css           # Utility classes
│   │
│   ├── js/
│   │   ├── main.js                 # Core functionality
│   │   ├── navigation.js           # Mobile menu
│   │   ├── forms.js                # Form validation
│   │   ├── language.js             # Language switching
│   │   └── analytics.js            # Tracking (privacy-first)
│   │
│   ├── images/
│   │   ├── logo.svg                # Main logo
│   │   ├── logo-white.svg          # Light variant
│   │   ├── og/                     # Open Graph images
│   │   │   ├── default.jpg         # 1200x630
│   │   │   ├── nonprofits.jpg
│   │   │   ├── artists.jpg
│   │   │   └── knowledge.jpg
│   │   ├── icons/
│   │   │   ├── favicon.ico
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   ├── apple-touch-icon.png
│   │   │   └── android-chrome-*.png
│   │   └── content/
│   │       └── [page images]
│   │
│   └── fonts/                      # Self-hosted if needed
│
├── CNAME                           # webuildpillars.com
├── _config.yml                     # Jekyll config (optional)
├── robots.txt                      # Crawler directives
├── sitemap.xml                     # All URLs, all languages
├── manifest.json                   # PWA manifest
├── sw.js                           # Service worker
├── 404.html                        # Custom error page
│
├── docs/
│   ├── UNIFIED_VISION.md           # Strategic foundation
│   ├── CONTENT_GUIDE.md            # Writing guidelines
│   ├── TRANSLATION_GUIDE.md        # Translation standards
│   └── BRAND_GUIDE.md              # Visual standards
│
├── LICENSE                         # MIT License
└── README.md                       # This file
```

---

## 📄 Page Inventory

### Primary Pages (9)

| Page | URL | Purpose | Priority |
|------|-----|---------|----------|
| **Homepage** | `/` | Vision, 3 pillars, primary CTA | P0 |
| **About** | `/about` | Story, mission, parent company | P0 |
| **How It Works** | `/how-it-works` | Process, tiers, commitment model | P0 |
| **Request Domain** | `/request-domain` | Unified application form | P0 |
| **Success Stories** | `/success-stories` | Showcase of pillar builders | P1 |
| **Works** | `/works` | Blog/thought leadership index | P1 |
| **AI Tools** | `/ai-tools` | Recommended tools + resources | P1 |
| **FAQ** | `/faq` | Comprehensive Q&A | P1 |
| **Contact** | `/contact` | Contact form + info | P1 |

### Pillar-Specific Pages (3)

| Page | URL | Purpose | Priority |
|------|-----|---------|----------|
| **For Nonprofits** | `/pillars/nonprofits` | Pillar One deep dive | P1 |
| **For Artists** | `/pillars/artists` | Pillar Two deep dive | P1 |
| **For Knowledge Builders** | `/pillars/knowledge-builders` | Pillar Three deep dive | P1 |

### Blog Posts (9+)

| Post | URL | Status |
|------|-----|--------|
| The Myth of Minority | `/works/myth-of-minority` | Migrate |
| Who Gets to Create? | `/works/who-gets-to-create` | Migrate |
| Differences as Differentiation | `/works/differences-as-differentiation` | Migrate |
| Understanding CMS Systems | `/works/understanding-cms-systems` | Migrate |
| SEO Strategies for 2025 | `/works/seo-strategies-2025` | Migrate |
| Content Creation Strategies | `/works/content-creation-strategies` | Migrate |
| Why No Social Media? | `/works/why-no-social-media` | Migrate |
| Creating a Community | `/works/building-a-community` | Migrate |
| Best Practices for Databases | `/works/best-practices-for-databases` | Migrate |

### Utility Pages (2)

| Page | URL | Purpose |
|------|-----|---------|
| **404** | `/404` | Custom error page |
| **Thank You** | `/thank-you` | Post-submission confirmation |

---

## 👩‍💻 Development Guidelines

### Code Standards

#### HTML
```html
<!-- DO: Semantic, accessible markup -->
<article>
  <header>
    <h2>Article Title</h2>
    <time datetime="2025-01-15">January 15, 2025</time>
  </header>
  <p>Content...</p>
</article>

<!-- DON'T: Div soup -->
<div class="article">
  <div class="header">
    <div class="title">Article Title</div>
  </div>
</div>
```

#### CSS
```css
/* DO: Use CSS custom properties */
:root {
  --color-accent: #8b5cf6;
  --space-md: 1.5rem;
}

.button {
  background: var(--color-accent);
  padding: var(--space-md);
}

/* DON'T: Magic numbers */
.button {
  background: #8b5cf6;
  padding: 24px;
}
```

#### JavaScript
```javascript
// DO: Progressive enhancement
if ('IntersectionObserver' in window) {
  // Use modern API
} else {
  // Fallback behavior
}

// DON'T: Assume modern browser
const observer = new IntersectionObserver(callback);
```

### Accessibility Requirements

- **WCAG 2.1 Level AA** compliance minimum
- All images have descriptive alt text
- Color contrast ratio ≥ 4.5:1 for text
- Focus indicators visible on all interactive elements
- Skip links for keyboard navigation
- Form inputs have associated labels
- Error messages are descriptive and helpful
- No content relies solely on color to convey meaning

### Git Workflow

```bash
# Branch naming
feature/page-name       # New pages
fix/issue-description   # Bug fixes
content/post-name       # New content
translation/lang-page   # Translations

# Commit messages
feat: Add nonprofit pillar page
fix: Mobile navigation z-index issue
content: Add new blog post on digital equity
i18n: Spanish translation for FAQ page
```

---

## ⚡ Performance Requirements

### Core Web Vitals Targets

| Metric | Target | Measurement |
|--------|--------|-------------|
| **LCP** (Largest Contentful Paint) | < 2.5s | Lighthouse |
| **FID** (First Input Delay) | < 100ms | Lighthouse |
| **CLS** (Cumulative Layout Shift) | < 0.1 | Lighthouse |
| **TTFB** (Time to First Byte) | < 600ms | WebPageTest |

### Optimization Checklist

- [ ] Images optimized (WebP with fallbacks)
- [ ] Images lazy-loaded below fold
- [ ] CSS inlined for critical path
- [ ] JavaScript deferred/async
- [ ] Fonts preloaded with display: swap
- [ ] Gzip/Brotli compression (GitHub Pages default)
- [ ] HTTP/2 enabled (GitHub Pages default)
- [ ] No render-blocking resources
- [ ] Minimal third-party scripts

### Image Guidelines

| Use Case | Format | Max Size | Dimensions |
|----------|--------|----------|------------|
| Photos | WebP (JPEG fallback) | 150KB | Max 1920px wide |
| Icons | SVG | 5KB | Vector |
| Logos | SVG | 10KB | Vector |
| OG Images | JPEG | 100KB | 1200x630 |

---

## 🚀 Deployment

### GitHub Pages Setup

1. **Repository Settings:**
   - Go to Settings → Pages
   - Source: Deploy from branch
   - Branch: `main` / `root`

2. **Custom Domain:**
   - Add `CNAME` file with `webuildpillars.com`
   - Configure DNS:
     ```
     A     @     185.199.108.153
     A     @     185.199.109.153
     A     @     185.199.110.153
     A     @     185.199.111.153
     CNAME www   webuildpillars.github.io
     ```

3. **HTTPS:**
   - Enable "Enforce HTTPS" in repository settings
   - Wait for certificate provisioning (up to 24 hours)

### Deployment Workflow

```bash
# Make changes locally
git add .
git commit -m "feat: Add new feature"
git push origin main

# GitHub Pages automatically deploys
# Live in 1-2 minutes at webuildpillars.com
```

### Pre-Deploy Checklist

- [ ] All links tested (internal and external)
- [ ] Forms tested with Formspree
- [ ] Mobile responsiveness verified
- [ ] Lighthouse score > 90 on all metrics
- [ ] hreflang tags correct on all pages
- [ ] Open Graph images generated
- [ ] sitemap.xml updated
- [ ] No console errors

---

## 📝 Content Strategy

### Voice & Tone

**We are:**
- Confident but not arrogant
- Warm but professional
- Direct but not dismissive
- Inspiring but grounded in reality

**We write:**
- In active voice
- With short paragraphs
- Using concrete examples
- For humans first, search engines second

### Content Pillars (for Blog)

1. **Digital Equity** — The gap we're filling, systemic barriers, solutions
2. **Creator Empowerment** — Artist stories, platform alternatives, ownership
3. **Knowledge Democratization** — Open education, wiki culture, preservation
4. **How-To Guides** — Practical advice for building online presence
5. **Success Stories** — Showcasing what pillar builders create

### Publishing Cadence

| Content Type | Frequency | Responsibility |
|--------------|-----------|----------------|
| Blog posts | 2x monthly | Content team |
| Success stories | Monthly | Community team |
| Tool recommendations | Quarterly | Technical team |
| FAQ updates | As needed | Support team |

---

## 🤝 Contributing

We welcome contributions! Here's how:

### For Content
1. Fork the repository
2. Create a branch: `content/your-post-name`
3. Add your content following the style guide
4. Submit a pull request

### For Code
1. Fork the repository
2. Create a branch: `feature/your-feature`
3. Make changes following code standards
4. Test on mobile and desktop
5. Run Lighthouse audit
6. Submit a pull request

### For Translations
1. Fork the repository
2. Create a branch: `translation/lang-page`
3. Follow the Translation Guide in `/docs`
4. Have a native speaker review
5. Submit a pull request

---

## 📜 License

This project is licensed under the MIT License — see [LICENSE](LICENSE) for details.

The content (text, images, brand assets) is © 2025 Pillar Media & Entertainment. The code structure and implementation patterns are freely available for reuse.

---

## 🙏 Acknowledgments

- **Pillar Media & Entertainment** — Parent company and domain portfolio
- **All Pillar Builders** — The creators who make this mission meaningful
- **Open Source Community** — The tools and patterns that make this possible

---

<p align="center">
  <strong>We Build Pillars</strong><br>
  <em>Retake the Web. Build with Pillars.</em><br><br>
  <a href="https://webuildpillars.com">webuildpillars.com</a> · 
  <a href="https://pillarme.com">pillarme.com</a>
</p>
