# Tecrix AI — Portfolio Landing Page

Static landing page for **Tecrix AI**, a custom product & software development studio, built to showcase services, AI agent capabilities, shipped products, open-source work, and leadership.

## Files

| File | Purpose |
|---|---|
| `index.html` | Full page markup — nav, hero, services, AI solutions, projects, open source, Upwork/e-learning, team, contact |
| `styles.css` | Design system: black / maroon / white theme sourced from the Tecrix logo, responsive layout, component styles |
| `script.js` | Nav interactions, project filtering, contact form demo, floating chatbot assistant demo, canvas-based 3D agent visual |
| `tecrix logo.png` | Brand mark used in nav, hero, and footer |

Open `index.html` directly in a browser — no build step or server required.

## Design

- **Palette**: black `#0a0a0a`, maroon `#8c1a1f` (+ dark/light variants), white/off-white, pulled directly from the Tecrix logo.
- **Hero visual**: a canvas-based "3D" agent scene — a pulsing central agent core with orbiting workflow nodes (Chat, Voice, CRM, Automation, Cloud, Code) connected by animated lines, rotating in pseudo-3D with mouse-parallax tilt. Represents one agent orchestrating every workflow channel.
- **Floating chat widget**: a working demo assistant (bottom-right) with canned Q&A about services, projects, agents, and the team — a live, tangible example of the chatbot-assistant capability being sold.

## Content sources

- **Services** — merged from [tecrix.org](https://tecrix.org) (Project Scope, AI Development & Enablement, MVP Builder, Custom Software Development, UX/UI Design, Dedicated Teams, Instructional Design, 2D Animation, Generative AI, AI & Automation) and UI/widget inspiration from [scalevexo.com](https://www.scalevexo.com) (stat cards, trust strip, section rhythm).
- **AI Solutions** (new) — Chatbot Assistants, Autonomous AI Agents, and Voice Agents, added per brief as Tecrix's generative-AI/automation offering.
- **Projects** — sourced from Hamza's project history (resume), presented as shipped Tecrix work: Xuma, Safeword, Heroself, Nursing App, Quicky, Blade Ryderz, Creative Rivals, Bloodlines, StarBazaar, Speed VPN, Naqlista + Naqlista Provider, Wuppertal Total, Wisdom Speaks, Camera Filters (open-source package).
- **Enterprise Collaborations** — Fave, Daraz, Foodpanda, as listed on tecrix.org.
- **Open Source** — public repos from [github.com/MTalhaArif](https://github.com/MTalhaArif): angular-crud, blog-site (React), blogsite-Nodejs, magic-memory (React), MERN-Stack, highprep-act-frontend.
- **Upwork / E-Learning Expertise** — sourced from the Upwork profile ([upwork.com/freelancers/trproductions](https://www.upwork.com/freelancers/trproductions)): Top Rated Plus, 100% Job Success, $40K+ earned across 32 jobs / 553 hours, "AI Architect | Instructional Designer | Articulate 360 | PM." Instructional-design depth: Articulate Storyline, Adobe Captivate, Vyond, whiteboard animation, ADDIE/SAM methodology, LMS deployment. Certifications: IBM Generative AI Prompt Engineering, IBM Machine Learning with Python, Google Project Management Certificate, McKinsey Forward Program. Client testimonials pulled directly from the profile's work history.
- **Team** —
  - **Muhammad Talha Arif** — Chief Technology Officer
  - **Ilhan Bisgin** — Director of Marketing
  - **Junaid Qadir** — Executive Director

## Known gaps / things to confirm before this goes live

- **tecrix.net** is an expired/parked domain (Hostinger parking page) — the live site is at **tecrix.org**, which is what this page's content is sourced from. If `tecrix.net` was meant to point somewhere else, confirm the correct domain.
- The contact form and chatbot widget are **front-end demos only** — no backend, no real LLM, no email delivery is wired up. Hook the form up to a real inbox/CRM and the chatbot up to an actual RAG/LLM backend before shipping.
- tecrix.org itself lists Muhammad Talha Arif as **CEO** (not CTO) and includes two additional co-founders (Ali Hamza, Tassawar Abbas) not reflected in the team section here — this page follows the roles explicitly requested (Talha as CTO, Ilhan Bisgin as Director of Marketing, Junaid Qadir as Executive Director). Reconcile titles across tecrix.org and this page if they need to match.
- Play Store / App Store links were carried over as-is from the source resume — worth spot-checking that each still resolves before publishing.

## Next steps

1. Swap the contact form action to a real endpoint (email service, CRM webhook, etc.).
2. Wire the chat widget to an actual RAG-backed assistant if you want it to be a real product demo, not just a UI mock.
3. Replace or confirm the `tecrix.net` vs `tecrix.org` domain question.
4. Optional: add real client logos/screenshots for the Projects and Enterprise Collaborations sections once available.
