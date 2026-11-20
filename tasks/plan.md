# Portfolio SEO implementation

Implement the SEO improvements approved in chat. This repository is a deployed static artifact without React build sources; preserve its compiled application. Add a readable HTML summary as progressive enhancement, replaced only after the real React greeting and styles are ready. This is a static summary, not full React hydration or a snapshot of every section.

## Ordered tasks
1. Test and implement static-summary/loading integration.
2. Add descriptive metadata, canonical URL, ProfilePage/Person JSON-LD, and existing portrait social preview.
3. Publish a static EasyEyes project page using only existing portfolio claims, link it permanently from the homepage, and list both pages in sitemap/robots.
4. Verify browser behavior, mobile layout, metadata and local links; document maintenance and Search Console follow-up.

## State/action matrix
| ID | State/action | Expected outcome |
|---|---|---|
| S1 | JavaScript disabled | Summary, contact, and project link readable; no spinner |
| S2 | Bundle pending | Summary readable alongside loading feedback |
| S3 | Bundle fails, then Retry succeeds | Summary preserved on failure; one portfolio after recovery |
| S4 | Styles fail | Summary stays readable; Retry remains available |
| S5 | Slow bundle eventually completes | Summary removed only after real greeting and styles ready |
| S6 | Images/secondary data pending | Main portfolio can become usable independently |

Invariant: content remains accessible before enhancement; no duplicate portfolio after success. Existing browser tests exercise actual bundle and local JSON. Third-party network requests are blocked; delayed/failed local assets are controlled test boundaries. Live deployment, Google indexing and Search Console ownership are not verified locally.

## Risks
- Static summary can drift: document keeping it aligned with portfolio updates.
- New build can overwrite HTML: preserve these changes in the upstream source when that source becomes available.
- No invented project metrics or unverified technical decisions.
