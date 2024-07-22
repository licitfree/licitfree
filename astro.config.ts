import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import sitemap from "@astrojs/sitemap";
import { SITE } from "./src/config";

import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  prefetch: {
    prefetchAll: true,
  },
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
    react(),
    sitemap(),
    (await import("@playform/compress")).default({
      CSS: false,
    }),
  ],
  markdown: {
    remarkPlugins: [
      remarkToc,
      [
        remarkCollapse,
        {
          test: "Table of contents",
        },
      ],
    ],
    shikiConfig: {
      theme: "one-dark-pro",
      wrap: true,
    },
  },
  vite: {
    optimizeDeps: {
      exclude: ["@resvg/resvg-js"],
    },
  },
  scopedStyleStrategy: "where",
  redirects: {
    "/meet":
      "https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0Sa06ORJyQ89j7hbPsmRie_TtbCpFfVJ4iNmXn_FUgx_TcV81L6qRMwHwqqKTWJSRDubyJp66_",
    "/rss": "/rss.xml",
    "/sitemap": "/sitemap-index.xml",
    upwork: "https://www.upwork.com/freelancers/~016411720ecd96d7f4",
    music:
      "https://www.youtube.com/playlist?list=PLxkEHjd_ca6fNUJh9CTEbShDVCadJ1dIv",
    home:
      "https://maps.app.goo.gl/q7PeoxsA2r3uGhwo6",
  },
});
