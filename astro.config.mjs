import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "Go Lang for Developer Tools",
      social: {
        github: "https://github.com/michael-duren",
        twitter: "https://x.com/duren_dev",
        linkedin: "https://www.linkedin.com/in/michael-duren/",
      },
      sidebar: [
        {
          label: "Introduction",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "About Me", link: "/intro/about-me/" },
            {
              label: "Introduction to Language Server Protcocol (LSP)",
              link: "/intro/lsp-intro",
            },
            { label: "LSP Spec", link: "/intro/lsp-spec" },
          ],
        },
        {
          label: "Contents",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Example Guide", link: "/guides/example/" },
          ],
        },
        {
          label: "Reference",
          autogenerate: { directory: "reference" },
        },
      ],
    }),
    tailwind(),
  ],
});
