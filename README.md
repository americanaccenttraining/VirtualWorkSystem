# VirtualWorkSystem.com — Corporate Website

Corporate BPO, offshore staffing, and dedicated remote workforce website for **VirtualWorkSystem** (`https://virtualworksystem.com`).

## Contact Information
- **United States:** `+1 (248) 686-2761`
- **Pakistan:** `+92 (321) 8890949`
- **WhatsApp:** `https://wa.me/923218890949`

## Development & Static Build

```bash
npm install
npm run dev      # Starts local preview on port 3000
npm run build    # Compiles static production bundle into /dist
```

## Deploying to GitHub Pages

1. Run `npm run build` to generate the static `dist/` directory (all asset paths are relative via `base: './'`).
2. Push the `dist/` contents to your `gh-pages` branch (or configure a GitHub Actions workflow to build and deploy `dist/` to GitHub Pages).
3. To connect `virtualworksystem.com`, add a `CNAME` file containing `virtualworksystem.com` inside `/public/` before building, and point your DNS `A` / `CNAME` records to GitHub Pages.

## Configuration Notes

- **Contact Form Endpoint:** Open `src/data/siteContent.ts` and set `CONSULTATION_FORM_ENDPOINT` to your Formspree, Web3Forms, or Basin endpoint URL. When left blank, submissions cleanly package the inquiry and hand off via WhatsApp (`https://wa.me/923218890949`) with a copyable inquiry summary.
- **Testimonials:** Sample testimonial slots in `src/data/siteContent.ts` (`TESTIMONIALS`) are explicitly labeled as placeholders. Replace them with verified client quotes once approved.
- **Social Links:** Placeholder social links in `src/data/siteContent.ts` (`SOCIAL_LINKS`) are disabled until official corporate URLs are added.
