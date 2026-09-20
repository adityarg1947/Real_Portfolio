---
name: Warm Cinematic Realism
colors:
  surface: '#0f131b'
  surface-dim: '#0f131b'
  surface-bright: '#353942'
  surface-container-lowest: '#0a0e16'
  surface-container-low: '#181c24'
  surface-container: '#1c2028'
  surface-container-high: '#262a33'
  surface-container-highest: '#31353e'
  on-surface: '#dfe2ee'
  on-surface-variant: '#cfc5b6'
  inverse-surface: '#dfe2ee'
  inverse-on-surface: '#2c3039'
  outline: '#989082'
  outline-variant: '#4d463b'
  surface-tint: '#dfc38c'
  primary: '#ffffff'
  on-primary: '#3f2e04'
  primary-container: '#fddfa6'
  on-primary-container: '#776134'
  inverse-primary: '#715b2e'
  secondary: '#f9bb6a'
  on-secondary: '#462a00'
  secondary-container: '#7a4d00'
  on-secondary-container: '#ffc274'
  tertiary: '#ffffff'
  on-tertiary: '#00391e'
  tertiary-container: '#96f7b9'
  on-tertiary-container: '#007443'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#fddfa6'
  primary-fixed-dim: '#dfc38c'
  on-primary-fixed: '#261a00'
  on-primary-fixed-variant: '#574419'
  secondary-fixed: '#ffddb6'
  secondary-fixed-dim: '#f9bb6a'
  on-secondary-fixed: '#2a1800'
  on-secondary-fixed-variant: '#643f00'
  tertiary-fixed: '#96f7b9'
  tertiary-fixed-dim: '#7bda9e'
  on-tertiary-fixed: '#00210f'
  on-tertiary-fixed-variant: '#00522e'
  background: '#0f131b'
  on-background: '#dfe2ee'
  surface-variant: '#31353e'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 56px
    fontWeight: '600'
    lineHeight: 64px
    letterSpacing: -0.03em
  display-xl-mobile:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '600'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Space Grotesk
    fontSize: 36px
    fontWeight: '500'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg-mobile:
    fontFamily: Space Grotesk
    fontSize: 28px
    fontWeight: '500'
    lineHeight: 36px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: -0.015em
  headline-sm:
    fontFamily: Space Grotesk
    fontSize: 20px
    fontWeight: '500'
    lineHeight: 28px
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
    letterSpacing: -0.005em
  body-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 15px
    fontWeight: '400'
    lineHeight: 24px
    letterSpacing: 0em
  body-sm:
    fontFamily: Plus Jakarta Sans
    fontSize: 13px
    fontWeight: '400'
    lineHeight: 20px
    letterSpacing: 0.005em
  label-lg:
    fontFamily: JetBrains Mono
    fontSize: 13px
    fontWeight: '500'
    lineHeight: 18px
    letterSpacing: 0.04em
  label-md:
    fontFamily: JetBrains Mono
    fontSize: 11px
    fontWeight: '500'
    lineHeight: 16px
    letterSpacing: 0.06em
  label-sm:
    fontFamily: JetBrains Mono
    fontSize: 10px
    fontWeight: '400'
    lineHeight: 14px
    letterSpacing: 0.08em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  gutter: 1.5rem
  gutter-sm: 1rem
  gutter-lg: 2rem
  margin: 2rem
  margin-sm: 1.25rem
  margin-lg: 4rem
  space-xs: 0.25rem
  space-sm: 0.5rem
  space-md: 1rem
  space-lg: 1.5rem
  space-xl: 2.5rem
---

## Brand & Style

This design system establishes a high-fidelity, spatial, and tactile design narrative modeled after architectural visualization studios and high-end industrial design monographs. It serves as an interactive exhibition of software engineering and cloud infrastructure, translating abstract code into physical, tactile metaphors: brushed aluminum server blades, cast concrete pedestals, architectural tracing paper, and the subtle ambient spill of a 2700K brass desk luminaire.

The aesthetic philosophy rejects generic tech clichés—completely eliminating hyper-saturated cyberpunk neons, purple-to-blue synthetic gradients, floating glow blobs, and standard SaaS cards. Instead, it deploys museum-grade physical diorama cues, restrained editorial precision, and Apple-level material discipline. 

The emotional impact is quiet, master-crafted, intellectual, and grounded. Key stylistic pillars include:
- **Tonal Architecture:** Surfaces behave like physical, matte materials with diffuse light absorption rather than flat digital pixels.
- **Architectural Waypoints:** Precision coordinate tags, drafting annotations, and delicate framing inspired by CAD blueprints and industrial exhibition plates.
- **Atmospheric Warmth:** Dark concrete and graphite foundations illuminated by a directional warm amber glow, reminiscent of late-night studio work under an incandescent desk lamp.

## Colors

The color palette is built around material surfaces and calibrated Kelvin temperature lighting rather than digital primaries.

- **Base Surfaces & Substrates:**
  - `Void / Pure Base`: `#0A0D12` (Deep Graphite Obsidian — backdrop of deep ambient shadows).
  - `Base Concrete`: `#141820` (Architectural Matte Concrete — primary canvas backdrop).
  - `Elevated Surface`: `#1F2430` (Brushed Graphite Slate — floating plinths and inspection planes).
  - `Substrate Border / Hairline`: `rgba(244, 246, 248, 0.08)` (Micro-etched seams).
- **Illumination & Accents:**
  - `Warm Lamp Key (Primary)`: `#FFE1A8` (Direct incandescent lamp highlight; focal points, hero typography, primary active states).
  - `Warm Amber (Secondary)`: `#E5A95A` (Rich brushed brass; warm indicators, secondary metadata, active states).
  - `Soft Sage (Terminal / Telemetry)`: `#73D297` (Subdued green phosphor; operational cloud health, verified deployments, uptime telemetry).
  - `Muted Sky Blue (System Stream)`: `#5EBCDF` (Architectural drafting ink; structural telemetry, data pipelines, network latency metrics).
- **Text & Editorial Values:**
  - `Off-White Plaster (Content Primary)`: `#F4F6F8` (Crisp typographic contrast, non-fatiguing matte finish).
  - `Muted Graphite Wash (Content Secondary)`: `rgba(244, 246, 248, 0.65)` (Descriptive copy, engineering narratives).
  - `Faint Drafting Ink (Content Tertiary)`: `rgba(244, 246, 248, 0.38)` (Architectural indexes, grid ticks, technical metadata).

No pure saturated blues, reds, or magentas exist in this space. All color functions as either physical material or light refracted off that material.

## Typography

The typographic hierarchy establishes a rigorous dialogue between structural geometric display type, warm editorial narrative, and drafting-table technical notations:

1. **Display & Headlines (`Space Grotesk`):** Delivers sculptural, engineered geometry with restrained mechanical curves. Used for project titles, section markers, and hero statements. It commands presence without screaming.
2. **Body Prose (`Plus Jakarta Sans`):** Softens the technical severity. Its humanist geometry and open counters ensure high legibility across long-form case studies, architectural breakdowns, and engineering decisions.
3. **Wayfinding & Metadata (`JetBrains Mono`):** Acts as the architectural HUD. Always set in uppercase or strict monospace tabular lining for coordinates, telemetry readouts, commit hashes, cloud metrics, scale rulers, and structural tags.

## Layout & Spacing

The layout is built upon an architectural drafting grid that balances fixed technical HUD elements with a 12-column fluid diorama viewport.

- **Grid Architecture:** 
  - **Desktop (1200px+):** 12-column grid, `margin-lg` (4rem), `gutter-lg` (2rem). Content panels float over an unmoving 3D spatial viewport. Fixed HUD overlays anchor to viewport corners with `margin-lg` padding.
  - **Tablet (768px - 1199px):** 8-column grid, `margin` (2rem), `gutter` (1.5rem). Panels compress and adopt dockable bottom-sheet positions.
  - **Mobile (<768px):** 4-column grid, `margin-sm` (1.25rem), `gutter-sm` (1rem). Waypoints dock into compact top/bottom architectural status bars.
- **Rhythm & Cadence:** Vertical spacing follows an 8px base grid rhythm (`space-xs` = 4px, `space-sm` = 8px, `space-md` = 16px, `space-lg` = 24px, `space-xl` = 40px). Generous vertical breathing room replicates physical gallery installations where artifacts are afforded isolated visual space.
- **Spatial Alignment:** HUD markers, inspection lines, and metadata ticks align strictly to outer column baselines, framing the 3D scene like a draftsman’s coordinate grid.

## Elevation & Depth

Visual depth is achieved through physical material properties, tactile layering, and lighting simulation rather than simple drop shadows:

- **Surface Tiers:**
  1. `Level 0 (Atmosphere)`: Deep graphite `#0A0D12` 3D world with simulated ambient fog and warm falloff.
  2. `Level 1 (Substrate & Plinths)`: Cast concrete `#141820` with micro-hairlines `rgba(244, 246, 248, 0.06)`.
  3. `Level 2 (Inspection Panels)`: Translucent matte graphite `#1F2430` at 85% opacity with a `24px` backdrop blur and a fine 1% noise texture resembling warm vellum tracing paper.
  4. `Level 3 (Interactive Focal Elements)`: Brushed metal and warm highlight states edge-lit by amber luminaire reflections.
- **Lighting & Shadows:**
  - **Ambient Occlusion:** Ultra-diffused, multi-layered shadows simulating heavy contact with ground planes: `0 24px 48px -12px rgba(5, 7, 10, 0.7)`.
  - **Lamp Glow (Incident Light):** High-radius, ultra-low-opacity amber ambient wash positioned at the top right of cards and focus areas: `0 -1px 0 0 rgba(255, 225, 168, 0.25) inset, 0 1px 0 0 rgba(255, 255, 255, 0.05) inset`.
  - **Hairline Borders:** Pure 1px razor-sharp edges (`rgba(244, 246, 248, 0.08)`) with zero-border-radius intersections that mimic laser-cut architectural models.

## Shapes

The shape system adopts `Soft` curvature (`0.25rem` / `4px` base radius), delivering the precision of industrial engineering and machined materials:

- **Plinths, Panels & Cards:** Standardized to `4px` (`0.25rem`) corner radius. This avoids the toy-like quality of pill shapes and the aggressive hostility of razor-sharp zero-corners, evoking precision-cut Plexiglas and milled anodized aluminum plates.
- **Interactive Buttons & Waypoint Badges:** Constrained between `2px` and `4px`.
- **Architectural Waypoint Ticks:** Corner markers use 90-degree framing brackets (`+`, `L`, and `T` shapes) rendered as 1px hairline elements that frame panels without enclosing them entirely.

## Components

### Buttons & Interactive Triggers
- **Primary Button (Machined Amber):** Solid brushed finish with `#FFE1A8` background and `#0A0D12` ink in `Space Grotesk` Medium. On hover, subtle warm luminescence spreads without scaling the button. Micro-hairline border `1px solid rgba(255, 225, 168, 0.4)`.
- **Secondary Button (Anodized Slate):** Background `#1F2430`, Off-White `#F4F6F8` label, hairline border `1px solid rgba(244, 246, 248, 0.12)`. On hover: surface transitions to `#282F3E` with top border catching the `#FFE1A8` warm rim light.
- **Ghost / Waypoint Button:** Monospaced label (`JetBrains Mono`), encased in framing brackets `[ EXPLORE NODE ]`, with no background. Hover state fills the text with `#FFE1A8`.

### Architectural HUD & Chips
- **Telemetry Chips:** Pill or 2px rectangle featuring a live terminal status indicator: a solid 6px dot in `#73D297` (Soft Sage) for operational services or `#5EBCDF` (Muted Sky) for stream data, accompanied by tabular metadata in `label-sm`. Background is a semi-opaque `#141820` with a 1px border.
- **Waypoint HUD:** Fixed corner brackets containing GPS-style spatial coordinates (e.g., `SEC_04 // LAT.42.08`), orientation compass marks, and real-time interaction states.

### Cards & Diorama Inspection Slates
- **Structure:** Floating slate built with `#1F2430` at 88% opacity, 20px blur, and micro-hairline border. The top edge features an asymmetric 1px highlight mimicking directional lamp illumination.
- **Header:** Monospace section code (`SYS.ARCH // 001`) in `label-md` seated above a `headline-md` title.
- **Footer:** Metrics row featuring a live commit timestamp, cloud latency badge, and node status.

### Lists & Technical Metrics
- **Engineering Ledger:** Horizontal rows divided by `1px solid rgba(244, 246, 248, 0.06)`. Left side displays the technology/system node in `Space Grotesk`; center displays implementation detail in `body-sm`; right side displays monospace status metrics (`JetBrains Mono`) colored in Sage or Amber.

### Input Fields & Controls
- **Form Substrates:** Inset graphite wells (`#0A0D12`) with `1px solid rgba(244, 246, 248, 0.1)`. Focus state drops the outer border and activates a crisp `#FFE1A8` hairline stroke accompanied by a gentle, localized warm inner bloom. Text is rendered in `JetBrains Mono` for precise input feel.
- **Checkboxes & Toggles:** Small 14px industrial square toggles with a central brass fill `#E5A95A` when active.