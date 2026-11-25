# VirtualWorkSystem.com — Corporate Website

Static HTML5, CSS3, and Vanilla JavaScript website for **VirtualWorkSystem** (`https://virtualworksystem.com`). Works directly on **GitHub Pages** with zero build step required.

## Contact Information
- **United States:** `+1 (248) 686-2761`
- **Pakistan:** `+92 (321) 8890949`
- **WhatsApp:** `https://wa.me/923218890949`

## Publishing on GitHub Pages

1. Push this repository to GitHub (e.g., `main` branch).
2. In your GitHub repository, open **Settings → Pages**.
3. Under **Build and deployment → Source**, choose either:
   - **Deploy from a branch** → Branch: `main` → Folder: `/ (root)` → **Save** (works immediately with no build step), **or**
   - **GitHub Actions** (uses `.github/workflows/deploy.yml` automatically on push).
4. To connect `virtualworksystem.com`, enter `virtualworksystem.com` under **Custom domain** in GitHub Pages settings (or add a root `CNAME` file containing `virtualworksystem.com`) and point your DNS records to GitHub Pages.

## Local Preview

```bash
npm install
npm run dev      # Serves locally on port 3000
npm run build    # Optional static output into /dist
```

## Configuration Notes

- **Contact Form Endpoint:** Open `js/main.js` and set `CONSULTATION_FORM_ENDPOINT` to your Formspree, Web3Forms, or Basin endpoint URL. When left blank, submissions cleanly package the inquiry and open WhatsApp (`https://wa.me/923218890949`) with a copyable inquiry summary.
- **Testimonials:** Sample testimonial slots in `index.html` and `js/main.js` are explicitly labeled as placeholders. Replace them with verified client quotes once approved.
