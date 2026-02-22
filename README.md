# 古代房中术 — 道家养生经典文献

An Astro-based scholarly website presenting classical Chinese Daoist literature on traditional health cultivation.

## Setup

```bash
npm install
npm run dev       # development server at localhost:4321
npm run build     # static build → ./dist/
npm run preview   # preview the build
```

## Deployment

### Cloudflare Pages

1. Push this repository to GitHub
2. In Cloudflare Pages dashboard → Create a project → Connect to Git
3. Build settings:
   - **Framework preset**: Astro
   - **Build command**: `npm run build`
   - **Build output directory**: `dist`

### GitHub Pages

Add `.github/workflows/deploy.yml` (see below), then enable GitHub Pages with the `gh-pages` branch as source.

```yaml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  build-deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci && npm run build
      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

## Project Structure

```
src/
├── data/chapters.ts      # All 40 chapter data
├── layouts/BaseLayout.astro
├── pages/
│   ├── index.astro       # Homepage
│   ├── chapters.astro    # Full chapter listing with filter
│   ├── context.astro     # Historical background
│   └── about.astro       # About the book
└── styles/global.css
public/
└── favicon.svg
```

## Design

- **Color palette**: Warm parchment (`#F5EDD6`), vermilion (`#8B1A1A`), gold (`#9E7D3A`), ink (`#1E1209`)
- **Typography**: Noto Serif SC (Google Fonts)
- **Framework**: Astro 4 + Tailwind CSS 3 (static output)
