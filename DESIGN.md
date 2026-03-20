# Design System: Cyber-Industrial Minimalism

## 1. Overview & Creative North Star

**Creative North Star: "The Digital Architect"**

This design system is a high-end, editorial-inspired framework designed for a full-stack developer who treats code as a structural art form. It rejects the "bubbly" consumer web in favor of a precision-engineered aesthetic. By blending the raw, skeletal nature of industrial design with the high-fidelity polish of modern "Cyber" interfaces, we create a space that feels both permanent and cutting-edge.

To break the "template" look, we utilize **0px border radii**, intentional asymmetry, and a rigorous adherence to a grid that is felt rather than always seen. We prioritize high-contrast typography scales and layered surfaces to provide a "heads-up display" (HUD) feel that remains sophisticated and legible.

---

## 2. Colors & Surface Logic

The palette is rooted in a brutalist charcoal, punctuated by high-energy technical accents.

### The Palette

- **Base:** `surface` (#131314) – The dark, non-reflective foundation.
- **Accent (Primary):** `primary` (#c0c1ff) – Electric Indigo for core actions and data visualization.
- **Accent (Secondary):** `secondary` (#ffb690) – Safety Orange for warnings, status indicators, and high-priority CTAs.
- **Technical Neutrals:** `outline-variant` (#464554) – Used for low-contrast grid lines.

### The "No-Line" Rule

Traditional 1px solid borders for sectioning are strictly prohibited. Boundaries must be defined through:

1. **Background Color Shifts:** Moving from `surface` to `surface-container-low` to define content blocks.
2. **Tonal Transitions:** Using subtle shifts in the charcoal spectrum to imply separation.
3. **Grid Markers:** Instead of a full box, use a single `outline-variant` line on one axis (e.g., only a left border) to anchor a section.

### Surface Hierarchy & Nesting

Treat the UI as a series of machined layers.

- **Base Layer:** `surface`
- **Recessed Content:** `surface-container-lowest` (For code snippets or "sunken" utility areas).
- **Raised Components:** `surface-container-high` (For cards and navigational elements).
- **Glass Overlays:** Use `surface_variant` at 40% opacity with a `20px` backdrop-blur for floating modals or navigation bars to create the "Cyber" depth.

---

## 3. Typography

We utilize a high-contrast pairing: **Space Grotesk** for structural impact and **Inter** for data density.

### Headings (Space Grotesk)

- **Display LG (3.5rem):** Reserved for hero titles. Use "Negative Letter Spacing" (-0.04em) to create a dense, industrial feel.
- **Headline MD (1.75rem):** Used for section starts. Always uppercase when used with `secondary` (Safety Orange) for a "warning label" aesthetic.

### Body & Labels (Inter)

- **Body LG (1rem):** Standard reading text. Increase line-height to 1.6 for maximum readability against the dark background.
- **Label MD (0.75rem):** Used for metadata, tags, and "terminal-style" micro-copy. Frequently paired with `primary_fixed` to highlight technical specs.

---

## 4. Elevation & Depth

In a "Cyber-Industrial" system, depth is a product of light and layering, not shadows.

- **The Layering Principle:** Stack `surface-container` tiers. A `surface-container-highest` card sitting on a `surface` background provides enough contrast to negate the need for a shadow.
- **The "Ghost Border" Fallback:** If a container requires a perimeter (e.g., an input field), use `outline-variant` at **20% opacity**. It should feel like a faint grid line, not a heavy container.
- **Ambient Glow:** For "Active" states, avoid drop shadows. Instead, use a subtle `primary` outer glow (4-8px blur, 15% opacity) to simulate an emissive screen effect.
- **Zero-Radius Mandate:** Every element—buttons, cards, inputs—must have a **0px border-radius**. Sharp edges convey precision engineering.

---

## 5. Components

### Buttons

- **Primary:** Background: `primary_container`; Text: `on_primary_container`. Sharp 0px edges. On hover: Shift background to `primary`.
- **Secondary (Industrial):** Background: Transparent; Border: 1px `outline-variant`; Text: `on_surface`.
- **Tertiary (Ghost):** Text: `primary`. No background or border. Use for low-priority terminal commands.

### Chips & Tags

- **Tech Tags:** Background: `surface_container_high`; Text: `on_surface_variant`; Typography: `label-sm`.
- **Status Chips:** Background: `secondary_container` (for Orange/Alert) or `primary_container` (for Indigo/Active).

### Input Fields

- **Text Inputs:** Bottom-border only (1px `outline`). Background: `surface_container_low`. Focus state: Bottom-border transitions to `primary` (Indigo) with a faint 2px glow.

### Cards & Projects

- **The Container:** Use `surface_container_low`.
- **Layout:** Forbid divider lines. Use **Spacing 8 (2rem)** to separate title, description, and tech stack.
- **Signature Element:** Add a tiny "01", "02" index in the top-right corner using `label-sm` in `secondary` (Safety Orange) to mimic technical blueprints.

---

## 6. Do’s and Don’ts

### Do

- **DO** use the grid as a design element. Align text to "grid lines" that may only be partially visible.
- **DO** use "Safety Orange" (`secondary`) sparingly—only for critical calls to action or status changes.
- **DO** embrace white space. Dark UIs need more "breathing room" to avoid feeling claustrophobic.

### Don't

- **DON’T** use rounded corners. Even a 2px radius breaks the "Industrial" precision.
- **DON’T** use standard grey shadows. If you need lift, use Tonal Layering or a faint Indigo/Orange glow.
- **DON’T** use 100% white text. Use `on_surface` (#e5e2e3) to reduce eye strain and maintain a premium, subdued feel.
