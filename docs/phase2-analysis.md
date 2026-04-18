# Phase 2 — Analysis

## Summary
Analyzed juvederm.nl site structure, identified content patterns, built block inventory, and created migration blueprint.

## Phase 2a — Scrape Samples
Scraped 6 representative pages (1+ per archetype) using Playwright:
- **homepage**: /nl (18 images, 339KB HTML)
- **treatment/lips**: /nl/treatment/lips (22 images, 241KB HTML)
- **treatment/male**: /nl/treatment/male (22 images, 253KB HTML)
- **faq**: /nl/qa (12 images, 184KB HTML)
- **legal**: /nl/disclaimer (6 images, 137KB HTML)
- **find-a-clinic**: /nl/find-a-clinic (8 images, 148KB HTML)

All outputs include screenshot.png, cleaned.html, metadata.json, and images/ folder.

## Phase 2b — Block Inventory

### Blocks Already in Repository
| Block | Source | Purpose |
|-------|--------|---------|
| hero | Block Collection | Full-width background image with overlaid heading |
| cards | Block Collection | Grid of feature cards with images/text |
| before-after | Custom | Before/after image comparison with dot navigation |
| carousel | Block Collection | Horizontal sliding product cards |
| accordion | Block Collection | Expandable Q&A sections |
| tabs | Block Collection | Tabbed content panels (VROUWELIJK/MANNELIJK) |
| columns | Block Collection | Side-by-side content layout |
| fragment | Block Collection | Embeds reusable content from other pages |
| header | Block Collection | Site navigation header |
| footer | Block Collection | Site footer |

### Key Finding
The repository already contains all needed blocks. No new blocks need to be built. The `before-after` block is a custom implementation specific to this brand's before/after treatment photos.

## Phase 2c — Migration Blueprint

### Archetype → Block Mapping
| Archetype | Blocks Used | Section Count |
|-----------|------------|---------------|
| homepage | hero, cards, before-after, fragment (×2) | 7 |
| treatment (×5) | hero, cards, before-after, carousel, columns+accordion, fragment (×2) | 9 |
| faq | hero | 8 (mostly default content) |
| find-a-clinic | none (all default) | 3 |
| legal (×3) | none (all default) | 1 |

### Shared Fragments
1. **treatment-tabs** — Tabs block with VROUWELIJK/MANNELIJK treatment area navigation (used on 6 pages)
2. **clinic-finder** — CTA section linking to clinic finder page (used on 6 pages)

### Content Conventions
- All content is Dutch (nl)
- Medical reference citations preserved as small text
- Images sourced from Adobe Dynamic Media CDN
- URL structure preserved: /nl/path → /nl/path
