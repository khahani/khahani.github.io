# khahani.com portfolio

This repository hosts the published static portfolio on GitHub Pages. It contains compiled React assets, not the original application build setup.

## SEO and content maintenance

- `index.html` contains page metadata, canonical URL, ProfilePage/Person JSON-LD, and an HTML portfolio summary. The summary is visible without JavaScript and while the compiled application loads. It is removed only when the React greeting and required styles are ready. This is progressive enhancement with a summary, not full React pre-rendering/hydration.
- Keep the HTML summary and structured data aligned with future portfolio changes. If rebuilding from the original React source, carry these changes into its HTML template and loading integration first.
- `projects/easyeyes/index.html` is a standalone, JavaScript-independent project overview. Its claims come from the existing portfolio; add specific implementation evidence and measured results only when verified.
- `static/css/content.css` styles the summary, permanent homepage project link, and project page.
- Both pages use the existing 800×800 portrait for social previews and the `summary` Twitter card.
- `sitemap.xml` lists canonical public content pages. Add new content pages there and link them from the site. Do not add invented `lastmod` timestamps.
- `robots.txt` allows crawling and advertises the sitemap.

## Local verification

Serve the repository:

```sh
python3 -m http.server 8766 --bind 127.0.0.1
```

With Playwright installed and Google Chrome available:

```sh
NODE_PATH=/path/to/node_modules PORTFOLIO_TEST_URL=http://127.0.0.1:8766/ node --test tests/*.cjs
```

Tests cover JavaScript disabled, delayed/failed bundles, failed styles, recovery, and mobile/desktop project navigation. Third-party network requests are blocked; local compiled assets are real.

## After deployment

In the domain owner's Google Search Console property, submit `https://khahani.com/sitemap.xml` and inspect both canonical URLs. Check Google's selected canonical and rendered page, then monitor impressions and queries. Account ownership, indexing, rankings, production redirects, and production performance cannot be established by local tests. Check that alternate hosts redirect to the canonical HTTPS domain in the hosting configuration.
