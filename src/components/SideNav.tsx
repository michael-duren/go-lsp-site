export default function SideNav() {
  return (
    <aside class="p-8 md:border-r-2 w-80">
      <nav>
        <h2 class="text-2xl font-semibold">Table of Contents</h2>
        <ul>
          <li>
            <a href="/slides/intro"> Introduction </a>
          </li>
          <li><a href="/slides/lsp-spec">LSP Spec </a></li>
          <li>
            <a href="/slides/implement-in-go"> Implement in Go </a>
          </li>
          <li><a href="/slides/dap"> DAP </a></li>
          <li><a href="/slides/automation"> Automation </a></li>
        </ul>
      </nav>
    </aside>
  )
}
