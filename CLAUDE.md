# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A Chinese character stroke order learning tool ("汉字书写和笔顺"). Displays animated stroke order for any Chinese character, with a fallback to system fonts when stroke data isn't available.

## Development Commands

```bash
# Start local development server
node server.js
# Opens at http://localhost:8080/

# No build step needed — this is a static HTML/CSS/JS application
```

## Architecture

- **`index.html`** — Single-page application. Contains all HTML, CSS, and JavaScript.
- **`server.js`** — Minimal Node.js HTTP server that serves static files. Used for local development since XHR requests require a server.
- **`hanzi-writer-data/`** — Contains character stroke data as JSON files in `data/*.json`. Each file has `strokes` (SVG path arrays) and stroke order metadata.
- **`.github/workflows/pages.yml`** — Deploys to GitHub Pages on push to main.

## Key Implementation Details

### Data Loading
The app loads character stroke data from two sources:
1. **HanziWriter** (for animation) — fetches JSON from `./hanzi-writer-data/data/{char}.json` via XHR
2. **Stroke order cards** (for display) — same JSON, rendered as individual SVG cards

### Font Fitting
The `fitCharacter()` function uses binary search to size the fallback character display to fit the frame. It measures text using `Canvas.measureText()` with `actualBoundingBox*` properties.

### Fallback Behavior
If HanziWriter fails to load (no CDN, no data), `renderFallbackCharacter()` displays the character using system fonts (Kaiti SC, STKaiti, etc.) instead of animations.

### Recent Characters
Stored in `localStorage` under key `hanzi-recent`, capped at 12 characters.

## Adding New Characters

Stroke data is managed in the `hanzi-writer-data` submodule. Character JSON files are auto-generated from the [Make Me A Hanzi](https://github.com/skishore/makemeahanzi) project and shouldn't be edited manually.

## Licensing

This project complies with the **Arphic Public License** requirements:

- **`LICENSE`** — Root license file with attribution and license summary
- **`README.md`** — Contains full copyright and license information
- **`hanzi-writer-data/ARPHICPL.TXT`** — Full license text (English/Chinese)

Key requirements when modifying stroke data:
- Keep the ARPHICPL.TXT file unaltered
- Modified versions must be made freely available
- Attribution to Arphic Technology Co., Ltd. must be preserved