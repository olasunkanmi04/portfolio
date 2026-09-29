# olasunkanmi.dev

Personal portfolio — a minimal, static one-pager built with Nuxt 4 (Vue 3 + TypeScript).

## Stack

- [Nuxt 4](https://nuxt.com) with static generation (`nuxt generate`)
- Plain scoped CSS, no UI or animation libraries, no analytics
- Self-hosted variable font (Fraunces) for the display type, system font stack for body text

## Requirements

Node.js **>= 22.12** (the Nuxt/Vite/rolldown toolchain needs Node's native `require(esm)` support, available from 22.12 onward). Check with `node -v`; if you're on an older Node, install a newer one (e.g. via [nvm](https://github.com/nvm-sh/nvm): `nvm install 22.20.0`).

## Run locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

## Build

```bash
npm run generate
```

Outputs a fully static site. Locally this lands in `.output/public/`:

```bash
npx serve .output/public
```

**On Netlify's build machine the output path is different.** Nuxt/Nitro detects the `NETLIFY` env var Netlify sets automatically and switches to the `netlify-static` preset, which writes the build to `dist/` instead of `.output/public/`. `netlify.toml`'s `publish` is set to `dist` to match — don't "fix" this back to `.output/public`, it only applies locally.

## Deploy

Hosted on Netlify at `olasunkanmi.dev`. `netlify.toml` sets the build command (`npm run generate`), publish directory (`dist`, per the note above), and 301 redirects from old routes (`/project/*`, `/works/*`, `/admin/*`, `/assets/files/*` — the old résumé PDF path) back to `/`, so old inbound links don't 404.

Netlify picks up `netlify.toml` automatically on push — no dashboard changes needed if the site was already connected to this repo.

## Content

All copy lives directly in [`app/app.vue`](app/app.vue) — there's no CMS or content layer for a single static page. Update it there and redeploy.

## Assets

- `public/favicon.svg` — monogram source; PNG fallbacks (`favicon-16.png`, `favicon-32.png`, `apple-touch-icon.png`) generated from it.
- `public/og-image.png` — 1200×630 Open Graph / Twitter card image.
- `public/fonts/fraunces-variable-latin.woff2` — self-hosted variable font (avoids a render-blocking Google Fonts request).
