/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />
interface ImportMetaEnv {
  readonly STRAPI_URL: string;
  readonly PUBLIC_ASSET_URL: string
}