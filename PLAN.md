# Digital Garden — Website Plan

## Purpose
A personal place on the internet for a designer: a creative, shareable portfolio showcasing personal artwork, design projects, film photography, and ongoing learning. It should feel personal and creative while remaining simple and professional enough to share with others.

## Design Direction
- **Overall:** Clean, modern, fun, and outdoors-inspired, with subtle vintage influence.
- **Vintage postcard feel:** An accent only; it should not dominate the site or determine the navigation.
- **Color palette:** Burnt orange (`#BC5B32`) and forest green (`#244A38`) as primary colors, with vintage cream (`#F1E5CF`) as a proposed supporting color. Hex values are starting points, not final specifications.
- **Light theme:** Cream background, forest-green text, burnt-orange accents.
- **Dark theme:** Forest-green background, cream text, burnt-orange accents.
- **Theme control:** Toggle at the top of the site; save visitor preference. Initial/default theme is not yet decided.
- **Typography:** Combination of clean, modern readable fonts and vintage-inspired display typography. Specific fonts to be selected later.
- **Branding:** Name set in a distinctive font; no custom logo for initial launch.
- **Shapes:** Sharp, square corners for cards, images, and buttons.
- **Spacing:** Balance generous space around major sections with tighter, consistent grid spacing.
- **Cursor:** Vintage-inspired arrow cursor with burnt-orange styling on pointer-capable devices; preserve usability and ordinary interaction cues.
- **Illustrations:** None at launch. Subtle hand-drawn outdoors-inspired details are a possible future enhancement.

## Site Structure
The **entire website** is the digital garden; “Digital Garden” is not a separate page.

Separate pages:
1. **Home** — A large featured photo and prominently displayed name, with minimal text. Exact photo framing (full-screen vs. inset) is undecided.
2. **About** — Short introduction, personal photograph, design background, interests, email contact, and GitHub profile link.
3. **Designs** — Personal art and design work shown in a masonry gallery.
4. **Film** (Favorite Film Shots) — Favorite film photographs shown in a masonry gallery.
5. **Notebook** — Things being learned, creative experiments, and works in progress, presented as a grid of cards.

## Navigation & Shared Layout
- Conventional horizontal navigation bar at the top with links to the main sections.
- Bar visible at the top of each page; hides while scrolling down and reappears on a slight upward scroll, with a subtle transition.
- Theme toggle located at the top of the website.
- Simple navigation only; no search feature initially.
- Footer contains name and copyright information, without additional footer links for now.
- Initial favicon uses a simple initial; custom favicon later.
- Fully responsive for desktop, tablet, and mobile.

## Designs and Film Galleries
- Clean, responsive **masonry** layout that preserves each image's original aspect ratio. No forced cropping or stretching.
- Consistent spacing, but images can vary in height.
- Manually determine gallery order via the content workflow (implementation to be designed).
- One Designs gallery with no category filters at launch.
- No permanent captions under thumbnails.
- On hover: show **title and date**, using a legible, subtle dim or gradient overlay and a smooth fade. No image zoom or movement.
- On click/tap: open an enlarged image in a **lightbox** without leaving the page, showing title and date.
- Lightbox background follows the visitor's active light/dark theme.
- Lightbox includes previous/next arrow controls, keyboard arrow navigation, close button, and Escape to close. Provide touch-friendly controls on mobile.
- Load off-screen images progressively as the visitor scrolls (lazy loading) while preserving image quality and layout stability.
- Potential future enhancement: filter Designs by category.

## Notebook
- Clean grid with **uniform card sizes** in the initial overview.
- Cards can include images, titles, and text.
- Clicking/tapping a card **expands it in place** to reveal additional content rather than opening another page.
- Show titles and content; no visible dates for now.

## Animations & Interaction
- Subtle, intentional motion; keep the website simple and fast.
- Initial page transition: gentle fade between pages. Consider a more creative transition later.
- No introductory loader; the homepage should display immediately.
- Avoid elaborate draggable objects or decorative effects at launch.
- Respect reduced-motion preferences where possible.

## Content Management & Publishing
- **Framework:** Astro.
- **CMS:** Keystatic, intended for online/browser-based editing.
- **Version control and content storage:** GitHub.
- **Deployment:** Cloudflare Pages (current hosting setup).
- **Content managed through CMS:** Designs, Film photos, and Notebook entries, including images and text.
- **Publishing:** No draft workflow required initially. Saving published content should lead to a GitHub update and an automatic Cloudflare Pages build; new content appears after successful deployment, not literally instantaneously.
- **Gallery ordering:** Editorial/manual order rather than automatically newest first. Confirm the specific Keystatic schema and ordering UI during implementation.
- **Integration note:** Validate Keystatic's GitHub-mode authentication and Cloudflare/Astro compatibility when implementing online editing.

## Contact
- Email contact link in the About section.
- GitHub profile link in the About section.
- No other social links or downloadable résumé initially.
- Exact email address and GitHub profile URL to be supplied when implementing.

## Open Decisions
- Homepage featured photo and full-screen vs. framed presentation.
- Font families and exact color values.
- Default theme on first visit (light or device preference).
- Exact homepage layout and final copy.
- Content sources, initial portfolio images, photographs, and Notebook entries.
- Keystatic online-editing deployment/authentication details and manual-ordering method.

## Future Ideas (Not for Initial Launch)
- More creative page transitions.
- Subtle hand-drawn outdoors-inspired illustrations.
- Optional category filters for Designs.
- Custom logo and favicon.
- Possibly include favorite music in some form.

## Launch Priorities
1. Responsive separate-page Astro site with simple navigation and theme toggle.
2. Homepage and About section.
3. Designs and Film masonry galleries with image lightboxes.
4. Notebook expanding-card grid.
5. Keystatic online content editing connected to GitHub and automatic deployment.
6. Subtle animations, performance, and usability polish.
