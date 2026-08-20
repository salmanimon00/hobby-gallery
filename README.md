# Made, Mostly — Hobby Gallery

This repository contains a responsive, one-page hobby gallery built with **React**, **TypeScript**, **Vite**, and **Tailwind CSS**. Its visual direction is **Sunlit Scrapbook**: warm paper tones, handmade collage details, irregular image framing, and a colorful craft-editorial layout.

## Run the project locally

Install dependencies with `pnpm install`, then start the local development server with:

```bash
pnpm dev
```

The terminal will display a local URL, usually `http://localhost:3000`. Stop the server with `Ctrl+C`.

| Command | Purpose |
|---|---|
| `pnpm dev` | Starts the Vite development server with live updates. |
| `pnpm check` | Runs TypeScript type checking without producing build files. |
| `pnpm build` | Creates the production build in `dist/`. |
| `pnpm start` | Serves the built production application. |

Before pushing a substantive change, run `pnpm check && pnpm build` to ensure the project still compiles.

## Customize the content

The main content is intentionally kept in one place: `client/src/pages/Home.tsx`. Open that file to change the site copy, gallery items, menu labels, email address, and the small captions across the page.

### Change the gallery artwork

Near the top of `Home.tsx`, the `galleryItems` list controls every displayed piece. Each item has the following fields:

```ts
{
  title: "Soft Edges",
  category: "Clay",
  year: "2026",
  description: "A short description of the work.",
  image: "/manus-storage/your-uploaded-image.jpg",
  layout: "tall",
  accent: "var(--persimmon)",
}
```

Replace the `title`, `category`, `year`, and `description` values with your own. Replace `image` with the URL for your uploaded artwork. The current layouts are `tall`, `wide`, and `feature`; try to use a mix of them so the scrapbook composition remains varied.

> Keep image URLs hosted outside `client/src` and `client/public`. The project is configured to use hosted asset URLs, such as `/manus-storage/...`, so artwork is available in the deployed version without bloating the source tree.

To add another piece, copy one complete object in `galleryItems`, update its values, and add a matching category to the `categories` list only if you need a new filter.

### Change the words and contact details

Search `Home.tsx` for the current visible wording. The hero headline begins with `Made slowly.`, the gallery heading begins with `A few things`, and the About section begins with `I make things`. Update these sentences directly in the JSX.

The sample contact links use `hello@example.com`. Search for that address and replace it with your preferred email address. If you do not want visitors to contact you by email, replace the `mailto:` links with a social profile or remove the links.

### Change colors and typography

Open `client/src/index.css`. The named variables at the top define the whole palette:

```css
--paper: #f9f2e5;
--ink: #25201a;
--persimmon: #ec5b2a;
--tomato: #c93b2e;
--cobalt: #2551ab;
--leaf: #4d762f;
--saffron: #f2b640;
```

Changing a variable updates every part of the interface that uses it. For the strongest result, retain a light background (`--paper`) and dark text (`--ink`), then use your brighter colors as accents. The display typeface is **Fraunces** and the body typeface is **DM Sans**; their import is at the top of the same CSS file.

### Change the logo and browser icon

The logo image is referenced in `Home.tsx` through `hobby-gallery-logo_0a4095d0.png`, and it is also registered as the browser favicon in `client/index.html`. Upload a replacement transparent PNG, then update both locations with its new hosted URL. Keep the logo simple enough to remain readable at favicon size.

## Project structure

| Location | What it contains |
|---|---|
| `client/src/pages/Home.tsx` | The page’s content, gallery data, filters, mobile menu, and artwork detail preview. |
| `client/src/index.css` | The palette, typography, responsive layout, paper effects, motion, and component styling. |
| `client/src/App.tsx` | The top-level application route and providers. |
| `client/index.html` | Page title, description, favicon, and document metadata. |
| `ideas.md` | The selected visual system and the design decisions that guide future edits. |

## Deployment and version history

The deployed gallery is available at [hobbygalry-vrusasjy.manus.space](https://hobbygalry-vrusasjy.manus.space). The source code is also stored in the public [GitHub repository](https://github.com/salmanimon00/hobby-gallery). Make changes locally, check and build the project, then commit and push them to create a clear Git history.

## Common adjustments

If an image looks cropped too tightly, change the `layout` to a shape better suited to that image or adjust the relevant `aspect-ratio` rule in `index.css`. If the page feels too colorful, reduce the number of bright accents rather than changing the paper and ink base. If you add a lot of gallery pieces, add them in pairs or small groups and check both desktop and mobile layouts so the rhythm stays intentional.
