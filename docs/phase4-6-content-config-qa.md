# Phase 3.5–6 — Content Migration, Configuration & QA

## Status: BLOCKED — EDS Token Expired

The da.live authentication token expired on April 16, 2026 (created April 15, 24-hour validity).
Content upload requires a fresh token.

## What Was Completed
1. **All 11 content pages** generated as EDS-format HTML
2. **Nav + Footer** HTML created
3. **Redirects + Metadata** configuration HTML created
4. **Upload script** created (upload-content.sh)
5. **Config files** pushed to GitHub (helix-query.yaml, helix-sitemap.yaml, robots.txt)
6. **Status files** generated for all pages

## Content Files Generated
| Path | Archetype | Source URL |
|------|-----------|-----------|
| nl.html | homepage | https://www.juvederm.nl/nl |
| nl/treatment/lips.html | treatment | https://www.juvederm.nl/nl/treatment/lips |
| nl/treatment/eye-area.html | treatment | https://www.juvederm.nl/nl/treatment/eye-area |
| nl/treatment/enhance.html | treatment | https://www.juvederm.nl/nl/treatment/enhance |
| nl/treatment/restore.html | treatment | https://www.juvederm.nl/nl/treatment/restore |
| nl/treatment/male.html | treatment | https://www.juvederm.nl/nl/treatment/male |
| nl/qa.html | faq | https://www.juvederm.nl/nl/qa |
| nl/find-a-clinic.html | find-a-clinic | https://www.juvederm.nl/nl/find-a-clinic |
| nl/disclaimer.html | legal | https://www.juvederm.nl/nl/disclaimer |
| nl/contact-us.html | legal | https://www.juvederm.nl/nl/contact-us |
| nl/algemene-voorwaarden-kliniekzoeker.html | legal | https://www.juvederm.nl/nl/algemene-voorwaarden-kliniekzoeker |

## To Complete Migration
1. Obtain a fresh EDS token from da.live
2. Run: `EDS_TOKEN=<new-token> ./upload-content.sh`
3. Trigger preview for each page
4. Verify preview URLs render correctly
5. Run integration QA checks
