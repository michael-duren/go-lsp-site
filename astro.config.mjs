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
          label: "Go lang Implementation",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Project Setup", link: "/implementation/project-setup" },
            {
              label: "Implementing the Request/Response pattern",
              link: "/implementation/request-response",
            },
            {
              label: "Hooking up our LSP to Neovim",
              link: "/implementation/editor-hookup-neovim",
            },
            {
              label: "Hooking up our LSP to VS Code",
              link: "/implementation/editor-hookup-vs-code",
            },
            {
              label: "The Handshake",
              link: "/implementation/the-handshake",
            },
            {
              label: "Synchronizing",
              link: "/implementation/synchronization",
            },
            {
              label: "Implementing Hover",
              link: "/implementation/hover",
            },
            {
              label: "Hoversaurus",
              link: "/implementation/hoversaurus",
            },
            {
              label: "Wrapping up",
              link: "/implementation/wrapping-up",
            },
          ],
        },
        // {
        //   label: "DAP",
        //   items: [
        //     { label: "Debug Adapter Protocol", link: "/dap/dap-intro" },
        //     { label: "DAP Spec", link: "/dap/dap-spec" },
        //   ],
        // },
        // {
        //   label: "Extras",
        //   items: [{ label: "Automation", link: "/extras/automation" }],
        // },
      ],
    }),
    tailwind(),
  ],
});
