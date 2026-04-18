# JUVÉDERM® Netherlands — EDS Migration Report

## Executive Summary

| Item | Value |
|------|-------|
| **Source Site** | https://www.juvederm.nl |
| **Target Repo** | [jmffraiz/jv-test-4](https://github.com/jmffraiz/jv-test-4) |
| **da.live Content** | da.live/jmffraiz/jv-test-4 |
| **Preview URL** | https://main--jv-test-4--jmffraiz.aem.page/nl |
| **Total Pages** | 11 migratable (from 13 sitemap URLs) |
| **Pages Generated** | 11/11 (100%) |
| **Pages Uploaded** | 0/11 (blocked — EDS token expired) |
| **Overall Status** | ⚠️ Code Ready, Content Pending Upload |

## Phase-by-Phase Summary

### Phase 1 — Discovery ✅
- **Status**: PASS (verified)
- **Retries**: 0
- **Output**: [manifest.json](../manifest.json), [docs/phase1-discovery.md](phase1-discovery.md)
- **Summary**: Crawled sitemap.xml (13 URLs), fetched all pages, identified 5 archetypes, mapped navigation. Excluded 2 dynamic pages (clinic listing requiring Google Maps).

### Phase 2 — Analysis ✅
- **Status**: PASS (verified)
- **Retries**: 0
- **Output**: [blueprint.json](../blueprint.json), [docs/phase2-analysis.md](phase2-analysis.md), analysis/ directory
- **Summary**: 
  - 2a: Scraped 6 sample pages with Playwright (screenshots, HTML, images, metadata)
  - 2b: Inventoried 10 blocks already in repo (Block Collection + 1 custom)
  - 2c: Created migration blueprint mapping archetypes to block structures

### Phase 3 — Block Development ✅
- **Status**: PASS (verified)
- **Retries**: 0
- **Output**: [docs/phase3-block-dev.md](phase3-block-dev.md)
- **Summary**: Repository already contained all required blocks. Verified via GitHub API. Lint passes with 0 errors. fstab.yaml confirmed on GitHub pointing to correct da.live content source.

### Phase 3.5 — Pilot Migration ⚠️
- **Status**: BLOCKED (EDS token expired)
- **Output**: Content HTML files in content/ directory
- **Summary**: All pilot page HTML generated successfully. Upload to da.live blocked by expired authentication token.

### Phase 4 — Content Migration ⚠️
- **Status**: Content generated, upload pending
- **Output**: 15 HTML files (11 pages + nav + footer + redirects + metadata)
- **Summary**: All content faithfully converted to EDS HTML format. Upload script ready.

### Phase 5 — Configuration ✅ (partial)
- **Status**: GitHub configs committed, da.live configs pending
- **Output**: helix-query.yaml, helix-sitemap.yaml, robots.txt pushed to GitHub
- **Summary**: Query index, sitemap, and robots.txt configured. Redirects and bulk metadata HTML generated but not uploaded to da.live.

### Phase 6 — Integration QA ⏳
- **Status**: Pending content upload
- **Summary**: Cannot run QA until content is uploaded and preview URLs are live.

## Architecture Overview

### Block Palette (10 blocks)
| Block | Source | Usage |
|-------|--------|-------|
| hero | Block Collection | Page hero with background image and title |
| cards | Block Collection | Feature cards with icons/images and text |
| before-after | Custom | Treatment comparison images with dots |
| carousel | Block Collection | Horizontal product card slider |
| accordion | Block Collection | Expandable Q&A sections |
| tabs | Block Collection | VROUWELIJK/MANNELIJK treatment tabs |
| columns | Block Collection | Side-by-side content layout |
| fragment | Block Collection | Reusable content embeds |
| header | Block Collection | Site navigation header |
| footer | Block Collection | Site footer |

### Content Model
- **Sections**: 1-9 sections per page
- **Max cells per row**: 2 (follows David's Model)
- **Shared fragments**: Treatment tabs, clinic finder CTA
- **Language**: Dutch (nl), single locale

### Site Conventions
- URL mapping: Source `/nl/path` → EDS `/nl/path` (preserved)
- Images: External (Adobe Dynamic Media CDN), not downloaded
- References: Medical citations preserved as small text
- Metadata: Title, description, og:image per page

## Known Issues

| Issue | Severity | Resolution |
|-------|----------|------------|
| **EDS token expired** | 🔴 Blocker | Obtain fresh token, run upload-content.sh |
| **Dynamic clinic finder** | 🟡 Degraded | Clinic search requires Google Maps API — simplified to static city links |
| **SVG icons on cards** | 🟡 Degraded | Original SVG icons from source not migrated — cards have empty image column |
| **FAQ page richness** | 🟡 Minor | FAQ simplified from multi-image layout to cleaner default content |
| **Treatment page references** | 🟡 Minor | Numbered references included as small text at bottom |

## Maintenance Guide

### Adding New Pages
1. Create HTML content following the archetype blueprint in blueprint.json
2. Upload to da.live: `PUT /source/jmffraiz/jv-test-4/{path}.html`
3. Trigger preview: `POST /preview/jmffraiz/jv-test-4/main/{path}`
4. Verify at https://main--jv-test-4--jmffraiz.aem.page/{path}

### Modifying Blocks
1. Edit block files in `blocks/{block-name}/`
2. Run `npm run lint` to validate
3. Push to GitHub — changes auto-deploy

### Updating Configuration
- **Redirects**: Edit redirects.html in da.live
- **Metadata**: Edit metadata.html in da.live  
- **Nav/Footer**: Edit nav.html or footer.html in da.live
- **Sitemap/Index**: Edit helix-sitemap.yaml or helix-query.yaml in GitHub

### Content Upload Script
```bash
# Get a fresh token from da.live, then:
export EDS_TOKEN="<your-fresh-token>"
./upload-content.sh
```

## Links
| Resource | URL |
|----------|-----|
| Preview | https://main--jv-test-4--jmffraiz.aem.page/nl |
| Live | https://main--jv-test-4--jmffraiz.aem.live/nl |
| da.live Editor | https://da.live/#/jmffraiz/jv-test-4 |
| GitHub Repo | https://github.com/jmffraiz/jv-test-4 |
| Source Site | https://www.juvederm.nl |

---

*Generated by EDS Migration Orchestrator — April 18, 2026*
