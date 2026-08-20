# Hobby Gallery — Design Directions

## Three stylistic approaches

| Theme Name | Very Brief Intro | Probability |
|---|---|---:|
| Sunlit Scrapbook | A tactile, cheerful collection that feels assembled from painted paper, sun-faded photographs, and hand-pinned notes. It foregrounds the pleasure of making rather than presenting a polished catalogue. | 0.04 |
| Studio Pantry | A warm editorial gallery inspired by kitchen notebooks, pigment jars, and a creative workbench. It uses abundant ivory space and deep earth tones for a calm, intentional character. | 0.07 |
| Festival Cabinet | A maximal, theatrical curation with saturated colors, collage-style frames, and playful labels. It makes every gallery tile feel like a small discovery. | 0.02 |

## Chosen direction: Sunlit Scrapbook

### Design Movement

**Contemporary craft editorial** meets an analog scrapbook: the site should feel like a carefully kept creative journal rather than a generic portfolio template.

### Core Principles

1. **Tactility over gloss.** Paper grain, hand-cut silhouettes, drawn marks, and imperfectly aligned compositions create warmth.
2. **Curation over density.** Images have enough space to be noticed, with short contextual captions instead of a crowded catalogue.
3. **Playful asymmetry.** The layout moves like a pinboard: editorial columns, overlapping paper slips, and uneven image rhythms replace a centered card grid.
4. **Readable craft.** Every handcrafted gesture is paired with high-contrast type and clear navigation.

### Color Philosophy

The base is soft **paper ivory**, evoking a page in a maker’s notebook. It is energized by sun-baked orange, tomato red, leaf green, and cobalt accents—the colors of paint, produce, and found ephemera. The signature brand color is **Persimmon Orange (#EC5B2A)**: optimistic, direct, and recognizably handmade without feeling childlike. Deep ink brown anchors text and retains contrast.

### Layout Paradigm

The page is a **vertical studio wall** rather than a standard centered portfolio. A slim editorial rail stays at the left on large screens, while the content shifts between wide “pinned” feature photographs and irregular two-column gallery clusters. On small screens, it becomes a deliberate scrapbook sequence with color-coded tags and stacked work.

### Signature Elements

1. **Paper-edge frames** with uneven, hand-cut corners and tiny rotation offsets.
2. **Doodle motifs**—a looping sun, brushstroke underline, and hand-drawn star—used only as separators or small labels.
3. **Colored tape tabs** that introduce gallery groups and selected work.

### Interaction Philosophy

Interaction should feel like picking up a card from a desk. Gallery pieces rise gently and straighten on hover; category tabs filter the collection without disrupting the page. Selection states use a visible ink underline rather than a generic filled control.

### Animation

Elements enter with 30–80 ms staggered fades and a subtle 4–8 px upward movement, governed by `prefers-reduced-motion`. Gallery hover motion stays under 220 ms and uses transforms only: images scale slightly while their paper frames settle closer to level. Buttons compress to 0.97 scale when pressed. No looping ornamental motion.

### Typography System

**Fraunces** supplies the expressive, slightly artistic display voice for headings and captions; **DM Sans** supplies the crisp, highly readable body and navigation. Hero headlines may use italic Fraunces for one emphasized word; all metadata uses compact uppercase DM Sans with generous tracking. Body copy stays in sentence case.

### Brand Essence

**A colorful personal gallery for a hobbyist who wants to share the work, experiments, and small stories behind what they make.**

Personality: **bright, tactile, curious**.

### Brand Voice

Headlines sound observant and personal; CTAs are inviting and specific; microcopy is brief, candid, and maker-led. Avoid corporate or generic welcome language.

Example lines:

> “Made slowly. Shared gladly.”

> “A few things I’ve been making lately.”

### Wordmark & Logo

The mark is a **four-petal paper sun**: four offset rounded lozenges orbiting an open center, resembling a cut-paper flower, a lens aperture, and a small burst of creative energy. It appears in Persimmon Orange on a transparent field, with the wordmark set separately in italic Fraunces.

## Style Decisions

- Keep gallery imagery visually dominant, using distinct images for each item rather than repeated placeholders.
- Use dark ink text over the light, high-key paper background to preserve readability.
- Avoid generic rounded-card grids, neon effects, purple gradients, and centered corporate layouts.
