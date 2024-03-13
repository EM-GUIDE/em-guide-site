# EM GUIDE Website
This repository contains the frontend code for the EM GUIDE website, developed using [Astro](https://astro.build/). The goal is to create a website that loads quickly and is lightweight.

## Architecture

The site's content is managed through a self-hosted [Strapi CMS](https://github.com/EM-GUIDE/em-guide-cms), which can automatically trigger page builds via webhooks.

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

For more details on Astro and its capabilities, visit [the Astro documentation](https://docs.astro.build).