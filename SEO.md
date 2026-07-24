# Tecrix Global — SEO Strategy & Setup

This documents what's been implemented in code vs. what requires action on your end (accounts I don't have access to).

## What's implemented (this repo)

- **Title & meta description** — rewritten around primary keywords (see map below), under recommended length.
- **`<meta name="keywords">`** — low weight for modern Google but still read by some engines/directories.
- **Canonical URL** (`https://www.tecrixglobal.com/`) — prevents duplicate-content splitting between `tecrixglobal.com` and `www.tecrixglobal.com`.
- **Open Graph + Twitter Card tags** — controls how the site looks when shared on LinkedIn, X/Twitter, Slack, WhatsApp, etc. Affects click-through from social/backlinks, not rankings directly, but matters for the backlink strategy below.
- **JSON-LD structured data** — `Organization` (with offices, founders, `sameAs` links to GitHub/Upwork), `WebSite`, and `Service` schema listing all 9 core services. Helps Google understand the entity and can produce rich results (sitelinks, knowledge panel eligibility) over time.
- **`robots.txt`** — allows all crawlers, points to the sitemap.
- **`sitemap.xml`** — lists the homepage and anchor sections.

## Keyword map (used across title/meta/headings/schema)

| Tier | Keywords |
|---|---|
| **Primary** | AI agent development company, custom software development agency, chatbot development services, voice AI agents, AI automation agency, MVP development company |
| **Secondary** | n8n workflow automation, Flutter app development, mobile app development company, AEO / AI engine optimization, instructional design agency, e-learning development company, RAG chatbot development |
| **Branded** | Tecrix Global, Tecrix AI |
| **Local** | software company Lahore, software house Pakistan, yazılım şirketi İstanbul, AI ajans Türkiye |

Where these live in the page already: services section headings (`AI Development & Enablement`, `AI & Automation`, `Custom Software Development`, `MVP Builder`, `Create Your Voice Agents`, `AEO — AI Engine Optimization`, `Instructional Design & E-Learning`), hero copy, and now the `<title>`/meta/schema.

## Indexing — action items on your end

I can't do these myself (they need your Google/Microsoft accounts), but the technical groundwork (`robots.txt`, `sitemap.xml`, canonical tag) is already in place for them:

1. **Google Search Console** ([search.google.com/search-console](https://search.google.com/search-console)) — add `tecrixglobal.com` as a property, verify via the DNS TXT record method (you already manage DNS in Namecheap, so this is one more record) or the HTML tag method. Then submit `https://www.tecrixglobal.com/sitemap.xml` under Sitemaps.
2. **Bing Webmaster Tools** ([bing.com/webmasters](https://www.bing.com/webmasters)) — same idea; Bing also lets you import directly from a verified GSC property, which is faster.
3. **Request indexing** for the homepage manually in GSC once verified (URL Inspection → Request Indexing) rather than waiting for organic crawl.
4. **Clutch profile** — since the site cites a 4.9 Clutch score, make sure the live Clutch listing links back to `tecrixglobal.com` (this doubles as a backlink, see below).

## Backlinking — what I can't do, and a prioritized checklist for what you can

Backlinks require outreach and accounts I don't have access to (GitHub, Upwork, Clutch, directories, partners) — I can't create profiles or contact people on your behalf. Here's a priority-ordered list:

**Free, high-authority, near-zero-effort (do these first):**
- [ ] Add `https://www.tecrixglobal.com` as the **website URL** on the GitHub profile (`github.com/MTalhaArif` → Edit profile → Website field). GitHub profile pages are high-authority and this is a direct dofollow-equivalent signal.
- [ ] Add the site URL to the **Upwork profile** (`trproductions`) — Upwork allows a portfolio/website link.
- [ ] Claim/update the **Clutch.co** profile with the live site URL if one already exists (the 4.9 score suggests it does).
- [ ] Add the site to a **LinkedIn Company Page** for Tecrix Global, with the URL in the About section.

**Directory & listing submissions (free, one-time, moderate effort):**
- [ ] Crunchbase, AngelList/Wellfound, GoodFirms, DesignRush — standard software-agency directories that accept self-submission and link back.
- [ ] Product Hunt — launching the site or a specific product (e.g. the voice agent offering) generates a natural backlink + traffic spike if it gets traction.

**Relationship-based (higher effort, higher value):**
- [ ] Ask **Fave, Daraz, Foodpanda** (cited as enterprise collaborations) whether a case-study or partner mention on their side could link back — even a small "built with" credit is a strong-authority backlink given their domain size.
- [ ] Guest post or case-study placement on **Turkish EdTech / study-abroad** publications, given the Admissions Turkey / Go Turkey work — that's a natural, relevant link source.
- [ ] Any **university or institution** partnerships from the Go Turkey / Admissions Turkey work are excellent `.edu`-adjacent backlink sources if a relationship already exists.

**What to avoid:** paid link farms, link exchanges, or bulk directory spam — these can trigger a Google manual action and actively hurt rankings. Every item above is either owned by you already or a legitimate, editorially-relevant placement.

## Known limitation: multilingual content isn't separately indexable

The EN/TR/AR language switcher works entirely client-side (JavaScript swaps text after page load; the choice is stored in `localStorage`, not the URL). This means:

- Search engines will only ever index the **English** version, since that's what's server-rendered by default and the only version with its own URL.
- The Turkish and Arabic content — despite being complete and correct — gets **no SEO value** and won't rank for Turkish/Arabic search queries, because Google indexes by URL, and there's only one URL.

**Fix, if you want TR/AR to actually rank:** restructure into real per-language routes (`/tr/`, `/ar/` or `tr.tecrixglobal.com` subdomains) with `hreflang` tags linking them together, each served with its own pre-rendered HTML. That's a real architecture change (static site generation per locale, or server-side rendering) — happy to scope that as a follow-up if ranking in Turkish/Arabic search matters to you, but it's a different-sized task than the meta-tag work here.

## Not yet done / possible next steps

- Rename `tecrix logo.png` → `tecrix-logo.png` (no space) for cleaner URLs in image search and social previews — currently works via `%20` encoding but isn't ideal. Low priority, would need every reference in `index.html`/`styles.css` updated.
- Add alt-text keyword pass on the deployed-project screenshots (already descriptive, could be tightened further).
- Blog/content section — SEO ranking for competitive terms like "AI agent development company" long-term benefits from ongoing content (case studies, guides), which this single-page site doesn't have. Worth considering a `/blog` if organic content marketing becomes a priority.
