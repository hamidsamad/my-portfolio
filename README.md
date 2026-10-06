# Hamid Ali Baloch — Premium Portfolio

An award-worthy, professional portfolio built with **React + Vite + Tailwind CSS + GSAP 3 + Lenis**. Dark/light themes, custom GSAP cursor, smooth scrolling, rich animations.

## ✨ Premium Features

### 🎯 Design System
- **Dark + Light mode** with perfectly matched palettes (CSS custom properties for every color)
- **Glass-morphism** cards with backdrop blur
- **Subtle film-grain noise overlay** for texture
- **Refined typography** using Inter with tight letter-spacing on headings
- **Consistent spacing, radii, shadows** — true design system
- 60fps smooth theme transitions

### 🎬 GSAP Animations
- **Preloader** with animated counter + progress bar
- **Custom triple-layer cursor** (dot + ring + "View" label on project hover) with magnetic follow using different easing speeds
- **Smooth scroll** powered by Lenis (buttery, not jumpy)
- **Hero title reveal** — words slide up from below character-by-character on load
- **Mouse parallax** on hero background blobs
- **Scroll-triggered reveals** on every section element
- **Animated skill bars** that fill on scroll
- **Infinite marquee** of tech names
- **Logo spin** on hover
- **Page transitions**

### 📐 Layout & Navigation
- **Floating pill nav** with glass effect, becomes more compact on scroll
- **Full-screen mobile menu** with large typography
- **Round CTA buttons** with hover lift
- **Back-to-top button**

### 📄 Pages (6 total)
1. **Home** — Hero with animated intro, stats, marquee, about snippet, featured projects, CTA
2. **About** — Bio, info cards, values, quote section
3. **Work** — Project grid with category filter tabs, hover zoom + arrow button
4. **Skills** — Services, animated skill bars, 16 tech logos, testimonials
5. **Resume** — Experience & education timeline with certifications
6. **Contact** — Info panel + validated form with toast notifications

### 🛠 Tech
- React 18 + Vite
- React Router v6
- Tailwind CSS + CSS variables
- GSAP 3 + ScrollTrigger
- Lenis smooth scrolling
- react-icons (Lucide + Simple Icons)

## 📁 Structure
```
src/
├── components/
│   ├── cursor/Cursor.jsx    # GSAP custom cursor
│   ├── Preloader.jsx        # Loading screen
│   ├── SmoothScroll.jsx     # Lenis wrapper
│   ├── Marquee.jsx          # Infinite scroll marquee
│   ├── Navbar.jsx / MobileMenu.jsx
│   ├── Footer.jsx / BackToTop.jsx / Toast.jsx
│   ├── Layout.jsx
│   └── SectionHeader.jsx
├── context/ThemeContext.jsx # Dark/light mode
├── data/                    # All content (projects, skills, resume, testimonials)
├── hooks/useReveal.js       # Scroll-trigger animations
├── pages/                   # Home, About, Work, Skills, Resume, Contact
├── App.jsx / main.jsx
└── index.css                # Design tokens + all styles
```

## 🚀 Commands
```bash
npm install    # install
npm run dev    # dev server http://localhost:5173
npm run build  # production build
```

## ✏️ Edit Content
All content lives in `src/data/` — just edit the arrays, no component changes needed.
