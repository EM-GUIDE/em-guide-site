# EM GUIDE (frontend)
This repository contains the frontend code for the EM GUIDE website, developed using [Astro](https://astro.build/). 

The goal was to create a website that loads quickly and is lightweight but allows flexible content editing.

Please refer to the [EM GUIDE (frontend)](https://github.com/EM-GUIDE/em-guide-cms) for the backend (CMS) code of the EM GUIDE website. 

## Architecture

The overall architecture of the website is displayed below. The site's content is managed through a [Strapi](https://strapi.io/) instance, which can automatically trigger page builds via webhooks.

![alt text](https://github.com/EM-GUIDE/.github/blob/main/profile/em_guide_site_architecture.png?raw=true)

## Development help

Some terminal commands for Astro development are listed below.

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

For more details on Astro visit [the Astro documentation](https://docs.astro.build).
