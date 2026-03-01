# Ojash Prasad — Portfolio

A clean, editorial portfolio website inspired by jennyatkins.me.

## Files

```
ojash-portfolio/
├── index.html       → Home page
├── work.html        → Work / Case Studies page
├── contact.html     → Contact page
├── style.css        → Shared stylesheet
├── transitions.js   → Shared animations & transitions
├── netlify.toml     → Netlify config
├── portrait.jpg     → Your photo (ADD THIS)
└── resume.pdf       → Your resume (ADD THIS)
```

## Before Deploying

1. **Add your photo**: Place your portrait image in this folder and name it `portrait.jpg`
2. **Add your resume**: Place your resume PDF in this folder and name it `resume.pdf`
3. That's it — no build step needed.

## Deploy to Netlify

### Option A — Drag & Drop (easiest)
1. Go to [netlify.com](https://netlify.com) and sign in
2. Go to your dashboard → "Add new site" → "Deploy manually"
3. Drag the entire `ojash-portfolio` folder onto the upload area
4. Done — Netlify gives you a live URL instantly

### Option B — GitHub (recommended for updates)
1. Push this folder to a GitHub repository
2. Go to Netlify → "Add new site" → "Import from Git"
3. Connect your GitHub repo
4. Leave build settings empty (no build command needed)
5. Set **Publish directory** to `.`
6. Click Deploy

## Customising

- **Fonts**: Cormorant Garamond (headings) + Jost (body) — loaded from Google Fonts
- **Colors**: Edit CSS variables at the top of `style.css`
- **Content**: Edit each `.html` file directly
- **LinkedIn URL**: Update `linkedin.com/in/ojashprasad` in `contact.html`
