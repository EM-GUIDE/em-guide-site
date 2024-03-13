# EM GUIDE Website
This is the repository of the EM GUIDE website frontend. We use [Astro](https://astro.build/) to build a fast loading and lightweight website.

## Architecture

The content of the site is managed in a self hosted [Strapi cms](https://github.com/EM-GUIDE/em-guide-cms) that can automaticly trigger the building of the pages.

![alt text](https://github.com/EM-GUIDE/em-guide-site/blob/main/em_guide_site_architecture.png?raw=true)

## Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## Want to learn more?

Check out [the Astro documentation](https://docs.astro.build).