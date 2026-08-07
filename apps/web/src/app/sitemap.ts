import type { MetadataRoute } from "next";
import { site } from "@sabores/config";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.seo.url;
  return [
    { url: base, priority: 1 },
    { url: `${base}/productos`, priority: 0.9 },
    { url: `${base}/contacto`, priority: 0.9 },
    { url: `${base}/nosotros`, priority: 0.7 },
    { url: `${base}/porque`, priority: 0.6 },
  ];
}