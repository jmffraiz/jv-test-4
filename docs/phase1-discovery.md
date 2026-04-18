# Phase 1 — Discovery

## Summary
Crawled https://www.juvederm.nl to build the site manifest for EDS migration.

## Methodology
1. Fetched sitemap.xml from https://juvederm.nl/sitemap.xml (13 URLs found)
2. Fetched and analyzed every page listed in sitemap
3. Identified additional page from footer links (algemene-voorwaarden-kliniekzoeker)
4. Categorized pages into 5 archetypes based on content structure

## Site Overview
- **Domain**: juvederm.nl (redirects to www.juvederm.nl)
- **Language**: Dutch (nl)
- **Total sitemap URLs**: 13
- **Migratable pages**: 11
- **Excluded pages**: 2 (dynamic clinic pages requiring API/query params)

## Archetypes
| Archetype | Count | Priority | Description |
|-----------|-------|----------|-------------|
| homepage | 1 | 1 | Main landing page with rich components |
| treatment | 5 | 1 | Treatment area pages (lips, eyes, enhance, restore, male) |
| faq | 1 | 2 | FAQ page with topic-organized Q&A |
| find-a-clinic | 1 | 3 | Clinic finder (will be simplified for static) |
| legal | 3 | 3 | Text-heavy legal/contact pages |

## Navigation Structure
- **Header**: Two dropdown menus (Behandeling, FAQ) + CTA button (Vind je kliniek)
- **Footer**: Two link columns + utility links + social links + disclaimer banner

## Excluded Content
- `/nl/clinics` — Dynamic clinic listing requiring Google Maps API
- `/nl/clinic` — Individual clinic pages (dynamic)
- Root `/` — Redirect to `/nl`

## Shared Components Identified
1. Treatment area tabs (VROUWELIJK/MANNELIJK) — appears on 6 pages
2. Clinic finder widget — appears on 6 pages  
3. Before/after image carousel — appears on 6 pages
4. Product card carousel — appears on 5 treatment pages
5. FAQ accordion — appears on 5 treatment pages
6. Reference citations — appears on all content pages
