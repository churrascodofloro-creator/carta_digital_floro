---
name: Galician Ember
colors:
  surface: '#161310'
  surface-dim: '#161310'
  surface-bright: '#3d3834'
  surface-container-lowest: '#100e0a'
  surface-container-low: '#1e1b17'
  surface-container: '#221f1b'
  surface-container-high: '#2d2926'
  surface-container-highest: '#383430'
  on-surface: '#e9e1db'
  on-surface-variant: '#e2bfb7'
  inverse-surface: '#e9e1db'
  inverse-on-surface: '#34302c'
  outline: '#a98a83'
  outline-variant: '#5a413b'
  surface-tint: '#ffb4a3'
  primary: '#ffb4a3'
  on-primary: '#621000'
  primary-container: '#a82808'
  on-primary-container: '#ffc1b3'
  inverse-primary: '#b02e0f'
  secondary: '#ffb95c'
  on-secondary: '#462a00'
  secondary-container: '#c68218'
  on-secondary-container: '#3d2400'
  tertiary: '#d6c4a5'
  on-tertiary: '#392f19'
  tertiary-container: '#64573e'
  on-tertiary-container: '#dfceae'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#ffdad2'
  primary-fixed-dim: '#ffb4a3'
  on-primary-fixed: '#3d0600'
  on-primary-fixed-variant: '#8b1a00'
  secondary-fixed: '#ffddb7'
  secondary-fixed-dim: '#ffb95c'
  on-secondary-fixed: '#2a1700'
  on-secondary-fixed-variant: '#653e00'
  tertiary-fixed: '#f3e0c0'
  tertiary-fixed-dim: '#d6c4a5'
  on-tertiary-fixed: '#231a07'
  on-tertiary-fixed-variant: '#51452e'
  background: '#161310'
  on-background: '#e9e1db'
  surface-variant: '#383430'
typography:
  headline-xl:
    fontFamily: Playfair Display
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Playfair Display
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-lg-mobile:
    fontFamily: Playfair Display
    fontSize: 28px
    fontWeight: '600'
    lineHeight: '1.3'
  headline-md:
    fontFamily: Playfair Display
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: 0.05em
  price-display:
    fontFamily: Playfair Display
    fontSize: 20px
    fontWeight: '700'
    lineHeight: '1.0'
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 64px
---

## Brand & Style
The design system is built to evoke the warmth of a traditional Galician "lareira" (stone hearth). It targets a sophisticated audience seeking an authentic culinary experience that balances rustic heritage with modern refinement. 

The aesthetic is a blend of **Minimalism** and **Tactile** design. It utilizes high-quality serif typography and generous whitespace to signify luxury, while using "ember-glow" gradients and subtle textures to provide emotional warmth. The interface should feel like a well-crafted physical menu: substantial, legible, and inviting.

## Colors
The palette is rooted in the elemental tones of fire and stone. 

- **Deep Red (#A82808):** Used for primary actions, accents, and the "ember" glow effects.
- **Gold (#C8841A):** Reserved for ornamental details, price highlights, and secondary call-to-actions.
- **Cream (#EAD8B8):** The primary text color on dark surfaces and a secondary background shade.
- **Dark Background (#080604):** The primary canvas, providing a deep, immersive environment for the "ember" aesthetic.
- **Light Menu Background (#F8F6F2):** Used for high-legibility sections like printed-style menus or informational overlays.

## Typography
The system employs a classic serif/sans-serif pairing to distinguish between narrative and utility. 

**Playfair Display** provides an authoritative, editorial feel for headlines and dish names. It should be typeset with slightly tighter letter-spacing in larger sizes to maintain a premium look.

**Inter** serves as the functional workhorse for descriptions, ingredients, and UI labels. Its neutral character ensures high readability against both dark and light backgrounds. Labels and small navigation elements should use increased letter-spacing and uppercase styling to provide a modern rhythmic counterpoint to the traditional headlines.

## Layout & Spacing
This design system uses a **Fluid Grid** with fixed maximum widths for content containers to ensure an editorial feel on wide displays. 

- **Desktop (1440px+):** 12-column grid, 64px margins, 24px gutters.
- **Tablet (768px - 1439px):** 8-column grid, 40px margins, 20px gutters.
- **Mobile (< 767px):** 4-column grid, 20px margins, 16px gutters.

The spacing rhythm is strictly based on 8px increments. Vertical rhythm should be generous, using `xl` (80px) spacing between major sections to emphasize the minimalist, high-end nature of the brand.

## Elevation & Depth
Depth is achieved through **Tonal Layers** and light-based effects rather than traditional drop shadows.

- **The Glow:** On dark surfaces, active elements or primary containers feature a soft, radial outer glow using a low-opacity Deep Red (#A82808). This simulates the "ember" light source.
- **Inner Borders:** High-priority cards use a 1px inner stroke of Gold (#C8841A) at 20% opacity to define edges without adding visual weight.
- **Surface Transitions:** Use the Light Menu Background (#F8F6F2) for modal overlays or specific "paper" sections to create a physical sense of depth, as if a menu has been placed on a dark wooden table.

## Shapes
The shape language is primarily **Soft (Level 1)**. 

Rectilinear forms dominate the layout to mirror the architecture of traditional Galician stone houses, but corners are slightly softened (4px - 12px) to remain approachable. Buttons and inputs should maintain a consistent 4px radius, while larger menu cards can scale up to 8px. 

Circular shapes are reserved exclusively for decorative iconography or floating action buttons to ensure they stand out against the structured grid.

## Components

- **Menu Cards:** Minimalist containers with no background on dark surfaces, defined by a subtle 1px border or the "ember" glow. Images should have a slight vignette.
- **Dashed Pills:** Used for price placeholders. These feature a transparent background with a 1px dashed stroke in Gold (#C8841A) or Cream (#EAD8B8), creating a "cut-out" or "reserved" aesthetic.
- **Highlight Badges:** Soft red-tinted labels (10% opacity Deep Red background with 100% opacity Deep Red text). These indicate "Chef's Choice" or "Seasonal."
- **Buttons:** 
    - *Primary:* Solid Deep Red with Cream text.
    - *Secondary:* Outlined Gold with Gold text.
- **Input Fields:** Minimalist design; bottom-border only (1px Cream) for a clean, non-intrusive look in reservation forms.
- **Lists:** Ingredient lists should use custom bullets—small, 4px Gold squares—to maintain the geometric theme.