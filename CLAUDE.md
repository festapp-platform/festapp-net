# Claude Code Context

## Project

festapp.net — static marketing site for Festapp. Next.js 16 with static export, Tailwind CSS v4, deployed to Cloudflare Pages.

## Architecture

- `app/` — Next.js app directory (single page with sections)
- `app/components/` — Hero, Navbar, Features, Screenshots, HowItWorks, Administration, FAQ, Pricing, Contact, Team, Footer
- `app/i18n/` — Client-side i18n (LanguageContext + translations), auto-detects browser language (cs/en)
- `public/fonts/linea/` — Linea icon font (basic + elaboration) from original festapp.net theme
- `public/images/` — All static assets (hero, screenshots, team photos, logos)

## Key Details

- **Font:** Roboto from Google Fonts (matching original site)
- **Icons:** Linea icon font for Features section, SVG icons for social/contact
- **Static export:** `output: "export"` in next.config.ts, `images: { unoptimized: true }`
- **i18n:** Client-side only via React Context, no separate routes per locale
- **Theme colors:** primary `#4465A6`, primary-dark `#253759`, primary-light `#80BDF2`

## Deployment — Cloudflare Pages

- **Project name:** `festapp-net`
- **Deploy method:** Direct upload via wrangler CLI (not Git-connected)
- **URL:** https://festapp-net.pages.dev (also https://festapp.net via custom domain)
- **GitHub:** https://github.com/festapp-platform/festapp-net

### Deploy commands

```bash
npx next build           # Build static site to out/
npx wrangler pages deploy out --project-name festapp-net   # Upload to Cloudflare Pages
```

### Custom domain setup

Custom domains (`festapp.net`, `www.festapp.net`) were added via the Cloudflare Pages API:

```bash
curl -X POST "https://api.cloudflare.com/client/v4/accounts/$ACCOUNT_ID/pages/projects/festapp-net/domains" \
  -H "Authorization: Bearer $TOKEN" -H "Content-Type: application/json" \
  -d '{"name":"festapp.net"}'
```

This automatically creates CNAME records pointing to `festapp-net.pages.dev`.

## Cloudflare DNS — festapp.net

- **Zone ID:** `02fd6ca8f4652d62e9b05f24a5e9d84f`
- **Account ID:** `84b32318ac235bf6738bdf1c8caa0795`
- **Nameservers:** chance.ns.cloudflare.com, courtney.ns.cloudflare.com

### DNS Records

The wrangler OAuth token does NOT have DNS write permissions. To manage DNS records, use a scoped API token with "Edit zone DNS" permission. Create one at: https://dash.cloudflare.com/profile/api-tokens

DNS records were created via the Cloudflare API:

```bash
curl -X POST "https://api.cloudflare.com/client/v4/zones/$ZONE_ID/dns_records" \
  -H "Authorization: Bearer $DNS_TOKEN" -H "Content-Type: application/json" \
  -d '{"type":"CNAME","name":"festapp.net","content":"festapp-net.pages.dev","proxied":true}'
```

### Current records summary

| Type  | Name           | Value                                            | Proxied |
|-------|----------------|--------------------------------------------------|---------|
| CNAME | @              | festapp-net.pages.dev                            | yes     |
| CNAME | www            | festapp-net.pages.dev                            | yes     |
| CNAME | live           | vkh-cr.github.io                                 | yes     |
| CNAME | img            | festapp-image-worker.festapp.workers.dev         | yes     |
| CNAME | mta            | mailersend.net                                   | no      |
| CNAME | a7srwxz64bi    | a7srwxz64bi...dkim.amazonses.com                 | no      |
| CNAME | kmwj7nwg26     | kmwj7nwg26...dkim.amazonses.com                  | no      |
| CNAME | tfnwqb66wn     | tfnwqb66wn...dkim.amazonses.com                  | no      |
| MX    | @              | mx1.larksuite.com (pri 1)                        | —       |
| MX    | @              | mx2.larksuite.com (pri 5)                        | —       |
| MX    | @              | mx3.larksuite.com (pri 10)                       | —       |
| MX    | bank           | inbound-smtp.eu-central-1.amazonaws.com (pri 10) | —       |
| MX    | mail           | feedback-smtp.eu-central-1.amazonses.com (pri 10)| —       |
| TXT   | @              | v=spf1 include:spf.onlarksuite.com -all          | —       |
| TXT   | @              | google-site-verification=4lqdHojcx...            | —       |
| TXT   | @              | verification-code-site-App_lark=wtPvQ...         | —       |
| TXT   | @              | verification-code-site-App_lark=k1cMp...         | —       |
| TXT   | _dmarc         | v=DMARC1; p=reject; rua=mailto:dmarc@festapp.net | —       |
| TXT   | lark2402291    | v=DKIM1; k=rsa; p=MIIBIjAN...                    | —       |

### Gotchas

- **Wrangler OAuth scopes are fixed** — `npx wrangler login` always requests the same scopes (no DNS write). You cannot change them.
- **DNS management requires a separate API token** — create a "Edit zone DNS" scoped token at dash.cloudflare.com/profile/api-tokens
- **CNAME at root works** — Cloudflare does CNAME flattening, so `@ CNAME festapp-net.pages.dev` resolves to A records for clients
- **Old A records not needed** — the original site had A records for @ and www pointing to 139.144.66.74; these were replaced by CNAME to Pages
- **GitHub Pages for `live` subdomain** — uses CNAME to vkh-cr.github.io (the main Festapp Flutter app)

## Conventions

- **Squash before push:** All commits are squashed into a single `feat: festapp.net static site rewrite` before force-pushing
- **Deploy after squash:** Always build and deploy to Cloudflare Pages after squashing
- **No puppeteer in production:** `screenshot.mjs` and puppeteer are dev-only tools, excluded via .gitignore
