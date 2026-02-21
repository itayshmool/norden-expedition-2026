# Website Features

## Design Philosophy

**Industrial-Expedition Brutalism meets Nordic Minimalism**

The design captures the raw, rugged nature of adventure motorcycling while maintaining sophisticated restraint. Every element serves the story of exploration and technical excellence.

## Key Design Elements

### Typography
- **Bebas Neue**: Condensed display font for massive impact (hero title, section titles)
- **Archivo Black**: Bold headlines for spec categories and features
- **Space Mono**: Technical monospace font for body text and data

This combination creates a distinctive hierarchy that balances aggression with precision.

### Color Palette
- **Background**: Deep blacks (#0a0a0a, #1a1a1a) for industrial atmosphere
- **Accent**: Burnt orange (#ff6b35) for energy and action
- **Steel**: Cool grey-blue (#7d8791) for technical elements
- **Text**: High-contrast white with dimmed variations for hierarchy

### Animation & Motion
- **Hero**: Staggered fade-in sequence with dramatic timing
- **Parallax**: Hero content moves slower than scroll for depth
- **Scroll Animations**: Intersection Observer triggers for sections
- **Hover Effects**: Subtle transforms and glow effects
- **Float Animation**: Main bike image has continuous floating motion
- **Mouse Tracking**: CTA background responds to cursor position

### Layout & Composition
- **Mobile-First**: Designed for portrait phones, scales up beautifully
- **Asymmetry**: Diagonal flows and unexpected image placements
- **Negative Space**: Generous padding creates breathing room
- **Grid Breaking**: Elements overlap and break grid for visual interest

## Technical Features

### Performance
✅ **Lazy Loading**: Images load only when entering viewport
✅ **Reduced Motion**: Respects `prefers-reduced-motion` accessibility setting
✅ **Hardware Detection**: Reduces animations on low-end devices
✅ **Optimized Assets**: External CDN for images, minimal dependencies

### Accessibility
✅ **Semantic HTML**: Proper heading hierarchy and landmarks
✅ **Keyboard Navigation**: Full keyboard support for all interactive elements
✅ **Color Contrast**: WCAG AA compliant contrast ratios
✅ **Screen Reader**: Descriptive alt text and ARIA labels
✅ **Focus States**: Clear visual indicators for keyboard users

### SEO & Meta
✅ **Meta Description**: Optimized for search engines
✅ **Semantic Structure**: Proper HTML5 elements
✅ **Page Title**: Descriptive and keyword-rich
✅ **Fast Loading**: Minimal dependencies, optimized code

### Browser Support
✅ Modern Chrome, Firefox, Safari, Edge
✅ Mobile Safari (iOS)
✅ Chrome Mobile (Android)
✅ Progressive enhancement for older browsers

## Interactive Elements

### Hero Section
- Animated statistics (CC, HP, MM Travel)
- Scroll indicator with pulsing animation
- Parallax effect on scroll

### Spec Cards
- Hover animations with accent border reveal
- Staggered entrance animations
- Technical grid layout with monospace numbers

### Feature Gallery
- Image zoom on hover
- Horizontal slide animation on hover
- Lazy-loaded images with fade-in

### CTA Section
- Animated gradient background
- Mouse tracking effect
- High-contrast call-to-action buttons

### Easter Egg 🎮
Try the Konami code: ↑ ↑ ↓ ↓ ← → ← → B A

## Responsive Breakpoints

- **Mobile**: < 768px (single column, stacked layout)
- **Tablet**: 768px - 1023px (2-column grids)
- **Desktop**: ≥ 1024px (3-column grids, full layout)

## Content Sections

1. **Hero**: Dramatic introduction with key stats
2. **Showcase**: Main bike presentation with pricing
3. **Specs**: 6-card technical specification grid
4. **Features**: 4-card image gallery with descriptions
5. **Updates**: 2026 model year improvements
6. **CTA**: Call-to-action with dealer links
7. **Footer**: Navigation and legal information

## File Structure

```
norden-expedition-2026/
├── index.html          # Main HTML structure
├── styles.css          # All styling (CSS variables, responsive)
├── script.js           # Interactivity and animations
├── README.md           # Project overview
├── DEPLOYMENT.md       # GitHub Pages deployment guide
├── FEATURES.md         # This file
└── .gitignore         # Git exclusions
```

## Why This Design Works

1. **Memorable**: Industrial brutalism stands out from generic motorcycle sites
2. **Functional**: Mobile-first ensures usability on all devices
3. **Performance**: Minimal dependencies, fast loading
4. **Accessible**: WCAG compliant, keyboard navigable
5. **Cohesive**: Every element reinforces the expedition theme

---

🏍️ A design that matches the spirit of adventure
