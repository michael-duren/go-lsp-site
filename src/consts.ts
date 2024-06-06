// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Go for Developer Tools";
export const SITE_DESCRIPTION = "An introduction to go for developer tools";

export type Link = {
  href: string;
  title: string;
  childLinks?: Link[];
};

export const courseLinks: Link[] = [
  { href: "/slides/intro", title: "Introduction" },
  { href: "/slides/lsp-spec", title: "LSP Spec" },
  { href: "/slides/implement-in-go", title: "Implement in Go" },
  { href: "/slides/dap", title: "DAP", },
  { href: "/slides/automation", title: "Automation" }
]
