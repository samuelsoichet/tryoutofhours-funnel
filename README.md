# tryoutofhours.com — OOH AI Funnel

Conversion funnel for Out of Hours AI's L1 Support offer.

## Versions

| Path | Description | Status |
|------|-------------|--------|
| `/` (index.html) | Version A — No VSL | **LIVE** |
| `/vsl/` | Version B — With VSL placeholder | Staging |

## Stack

- Plain HTML + Tailwind CSS v3 (CDN)
- No build step, no framework
- Hosted on Vercel (auto-deploys from `main` branch)
- Custom domain: `tryoutofhours.com`

## Form Submission

Forms POST JSON to the n8n webhook at:
```
https://n8n.outofhours.ai/webhook/funnel-application
```

The n8n workflow handles: Slack notification, HubSpot contact creation, email alert.

## Tracking

- **GA4:** `G-9VLHGEM257` (active)
- **Facebook Pixel:** Set `FB_PIXEL_ID` in `tracking.js` (needs Business Manager setup)

## Deploying

1. Push to `main` → Vercel auto-deploys
2. To swap versions: move VSL content to root `index.html`

## A/B Testing (Future)

Vercel Edge Middleware can split traffic. For now, swap manually by updating which HTML is at `/index.html`.

## DNS Setup

Point `tryoutofhours.com` and `www.tryoutofhours.com` to Vercel:
- A record: `76.76.21.21`
- CNAME for www: `cname.vercel-dns.com`
