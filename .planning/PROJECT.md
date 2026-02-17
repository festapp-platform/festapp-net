# Festapp.net Static Rewrite

## What This Is

Static rewrite of the festapp.net landing page using Next.js with static export. The goal is a 1:1 reproduction of the current site — same content, same design, same bilingual support (EN/CZ) — in a form that can be hosted anywhere (GitHub Pages, Netlify, any static hosting).

## Core Value

The landing page must faithfully reproduce the current festapp.net website as a self-contained static site that can be deployed to any hosting provider.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Hero section with headline, subheadline, and CTA buttons (Try now, Contact us)
- [ ] Navigation bar with sticky behavior and section links (Features, Screenshots, FAQ, Pricing, Contact)
- [ ] Features section with 8 feature cards (cross-platform, workshops, push notifications, maps, admin, offline, scheduling, open-source)
- [ ] Screenshots gallery with 9 app interface screenshots
- [ ] How It Works section (3-step process)
- [ ] Administration details section
- [ ] FAQ section with expandable/collapsible questions (5 items)
- [ ] Pricing section with 3 tiers (Minimal, Standard, Custom)
- [ ] Contact section with address, phone, email
- [ ] Team section with 3 member profiles and social links
- [ ] Footer with navigation, app store links, GitHub link, privacy policy
- [ ] Language switcher (EN/CZ) with full bilingual content
- [ ] Responsive design (mobile and desktop)
- [ ] Color scheme matching original (#4465A6 primary, #253759 hover)
- [ ] Next.js static export (`output: 'export'`) for universal hosting

### Out of Scope

- Backend functionality — this is a static landing page only
- CMS or content management — content is hardcoded
- Dynamic features (forms submitting to APIs, analytics) — static reproduction only
- SEO optimization beyond what the original has

## Context

- The current festapp.net is a SaaS landing page for a festival/event mobile app platform
- The site presents product information, pricing, team, and contact details
- Images include app mockups, screenshots, and team photos — these need to be extracted or sourced from the original
- The site uses a professional blue/white color scheme with modern sans-serif typography

## Constraints

- **Tech stack**: Next.js with static export (`next export` / `output: 'export'`)
- **Fidelity**: Must visually match the current festapp.net as closely as possible
- **Hosting**: Must work on any static hosting (no server-side rendering, no API routes)
- **Assets**: Images and fonts from the original site need to be included

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Next.js static export | User preference, modern tooling with static output | — Pending |
| 1:1 visual reproduction | User explicitly wants same design, not a redesign | — Pending |
| Bilingual EN/CZ | Matches current site, language switcher included | — Pending |

---
*Last updated: 2026-02-17 after initialization*
