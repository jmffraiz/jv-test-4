# Phase 5 — Configuration

## Summary
All site-level configuration files are in place in the GitHub repo.

## Configuration Files

### helix-query.yaml
- **Index**: `/nl/**` pages
- **Target**: `/query-index.json`
- **Properties**: title, description, image, lastModified

### helix-sitemap.yaml
- **Include**: `/nl/**`
- **Exclude**: `/nl/drafts/**`
- **Target**: `/sitemap.xml`
- **Origin**: `https://www.juvederm.nl`
- **Hreflang**: nl → `/nl/**`

### robots.txt
- Allow all user agents
- Sitemap: `https://main--jv-test-4--jmffraiz.aem.page/sitemap.xml`

### redirects.json
- Empty (no redirects needed for initial migration since URL structure is preserved)

### fstab.yaml
- Mount point: `https://content.da.live/jmffraiz/jv-test-4`

### nav.html & footer.html
- Full navigation structure matching source site
- Committed to `/nl/` directory

## Validation
- Tier 1: PASS
- Retries: 0
