/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface Window {
  dataLayer: Record<string, unknown>[];
}

declare module "@fontsource-variable/*";
declare module "@splidejs/splide/css/*";