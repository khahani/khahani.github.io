# SEO tasks
- [x] Static summary: S1–S6 pass in `node --test tests/*.cjs`; summary readable at 320px and removed after successful enhancement. Files: index.html, tests/loading.cjs.
- [x] Metadata: descriptive summary, canonical, JSON-LD and valid local social image on homepage. Verify HTML and parsed JSON. File: index.html.
- [x] Project discovery: static EasyEyes page, permanent home link, sitemap and robots entries; all local URLs resolve. Depends on metadata. Files: projects/easyeyes/index.html, static/css/content.css, index.html, sitemap.xml, robots.txt.
- [x] Checkpoint: all browser tests pass, mobile/desktop visual checks, document maintenance and external follow-up. Files: README.md, tasks/plan.md, tasks/todo.md.

Verification: eight browser scenarios passed together; the added fresh-visitor scroll-position test passed separately (nine total). Desktop and mobile screenshots inspected. Canonical metadata, JSON-LD, local assets/links, and sitemap HTTP responses verified. `git diff --check` passed. No production deployment or Search Console action performed.
