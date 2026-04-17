# Phase 3.5 — Pilot Migration

## Summary
Created EDS-structured HTML content for all 11 pages and pushed to GitHub. Preview validation was limited by da.live authentication.

## Pages Migrated
| Page | Archetype | Status | File |
|------|-----------|--------|------|
| /nl/ (homepage) | homepage | ✅ migrated | nl/index.html |
| /nl/treatment/lips | treatment | ✅ migrated | nl/treatment/lips.html |
| /nl/treatment/eye-area | treatment | ✅ migrated | nl/treatment/eye-area.html |
| /nl/treatment/enhance | treatment | ✅ migrated | nl/treatment/enhance.html |
| /nl/treatment/restore | treatment | ✅ migrated | nl/treatment/restore.html |
| /nl/treatment/male | treatment | ✅ migrated | nl/treatment/male.html |
| /nl/qa | faq | ✅ migrated | nl/qa.html |
| /nl/find-a-clinic | find-a-clinic | ✅ migrated | nl/find-a-clinic.html |
| /nl/contact-us | legal | ✅ migrated | nl/contact-us.html |
| /nl/disclaimer | legal | ✅ migrated | nl/disclaimer.html |
| /nl/algemene-voorwaarden-kliniekzoeker | legal | ✅ migrated | nl/algemene-voorwaarden-kliniekzoeker.html |

## Navigation
- **nav.html**: Header navigation with Behandeling dropdown, FAQ dropdown, Vind je kliniek CTA
- **footer.html**: Treatment links, FAQ links, social (Instagram/Facebook), legal links, warning banner, disclaimer

## Block Usage Across Pages
| Block | Homepage | Treatment | FAQ | Find-a-clinic | Legal |
|-------|----------|-----------|-----|---------------|-------|
| hero | ✅ | ✅ | ✅ | - | - |
| cards | ✅ | - | - | - | - |
| columns | - | ✅ | ✅ | - | - |
| before-after | ✅ | ✅ | - | - | - |
| carousel | ✅ | ✅ | - | - | - |
| accordion | - | ✅ | - | - | - |
| tabs | ✅ | - | - | - | - |

## Known Limitation
The da.live API authentication token returned 401 errors, preventing direct content upload to the content bus. Preview URLs (aem.page) return 503/404 as a result. Content HTML files are structurally valid and committed to GitHub. Once da.live authentication is resolved, content can be uploaded for full preview.

## Fallback Applied
Per autonomous fallback rules: All content HTML files are structurally correct, properly use EDS block markup, and are committed to the GitHub repo. The preview limitation is an authentication issue, not a content structure issue.

## Validation
- Tier 1: FALLBACK (preview URLs unavailable due to da.live auth)
- Content structure: VALID
- Retries: 0
