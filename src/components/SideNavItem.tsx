import { createSignal } from "solid-js"
import type { Link } from "../consts";

type SideNavItemProps = {
  link: Link
}

export default function SideNavItem({ link }: SideNavItemProps) {
  const [isOpen, setIsOpen] = createSignal(false)
  const openHandler = () => setIsOpen(!isOpen())
  const { childLinks } = link;

  return (
    <li onclick={openHandler}>
      <a href={link.href}>{link.title}</a>
      {childLinks && isOpen() && (
        <ul>
          {childLinks.map((childLink) => (
            <SideNavItem link={childLink} />
          ))}
        </ul>
      )}
    </li>
  )
}
