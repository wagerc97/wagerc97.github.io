# Website Progress

## Deployment status

The new website is implemented directly from the repository root, taking over the original HTML5 UP Editorial template. The GitHub Pages workflow prepares a deployment artifact from the root while excluding private source material in `my_content/`.

## Adapted and populated pages

| Page          | Path                                           | Status                | Content included                                                                                                                                                                                       |
| ------------- | ---------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Home          | [`index.html`](index.html)                     | Adapted and populated | Research-first introduction, institutional affiliations, current roles, research focus areas, featured 2026 paper, selected presentations, selected-work entry point, and institutional contact links. |
| Research      | [`research.html`](sites/research.html)         | Adapted and populated | Permanent-magnet design, uncertainty quantification, surrogate modeling, optimization, active learning, and research-method narrative.                                                                 |
| Publications  | [`publications.html`](sites/publications.html) | Adapted and populated | 2026 paper with DOI plus the 2023 HMM poster and five 2025 talks/presentations.                                                                                                                        |
| Profile       | [`profile.html`](sites/profile.html)           | Adapted and populated | Public professional biography, current role, PhD/MSc/BSc timeline, and skills snapshot. No downloadable CV or personal contact data.                                                                   |
| Selected Work | [`work.html`](sites/work.html)                 | Adapted and populated | Public GitHub project cards from the previous website and a link to the GitHub profile.                                                                                                                |
| Error page    | [`404.html`](404.html)                         | Adapted               | Custom site-branded 404 response.                                                                                                                                                                      |

## Intentionally incomplete pages

| Page                  | Path                                 | Current state                                                                | What is needed                                                                                  |
| --------------------- | ------------------------------------ | ---------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- |
| Writing               | [`writing.html`](sites/writing.html) | Uses a polished “coming soon” message, not real article content.             | Supply one or more blog posts, including title, date, summary, body, and optional images/links. |
| Personal apps         | Not yet created                      | Hidden from navigation so no placeholder page is published.                  | Supply the curated public app names, descriptions, repository/demo links, and any images.       |
| Professional portrait | Not yet added                        | The homepage uses an abstract research graphic rather than a personal image. | Supply a professional photo and preferred alt text/crop.                                        |

## Legacy template cleanup

The original HTML5 UP demo pages `generic.html` and `elements.html` have been removed. The active pages are the root homepage and the grouped subpages in `sites/`.

The root `assets/` directory contains the active site CSS and JavaScript. Unused legacy images and libraries may remain, but are not referenced by the adapted pages.

## Supporting implementation files

- [`assets/css/main.css`](assets/css/main.css) — custom responsive visual system.
- [`assets/js/main.js`](assets/js/main.js) — mobile navigation and click-to-reveal institutional email.
- [`.github/workflows/deploy-pages.yml`](.github/workflows/deploy-pages.yml) — deploys a root-based public artifact while excluding private source material.
- [`sitemap.xml`](sitemap.xml), [`robots.txt`](robots.txt), and [`LICENSE.txt`](LICENSE.txt) — search/discovery and licensing support.
