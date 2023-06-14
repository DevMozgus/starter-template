import { Navbar } from "./Navbar"
import { Navburger } from "./Navburger"
import { useContext } from "react"
import { NavigationContext } from "./NavigationProvider"

export interface PageLink {
  title: string
  href: () => void
}

export function Navigation() {
  const navigation = useContext(NavigationContext)

  const pages: PageLink[] = [
    {
      title: "nav.about",
      href: navigation!.scroll.about,
    },
    {
      title: "nav.review",
      href: navigation!.scroll.review,
    },
    {
      title: "nav.contact",
      href: navigation!.scroll.contact,
    },
  ]

  return (
    <nav className="bg-opacity-0">
      <Navburger buttonStyle="right-3 top-3" overlayStyle="" pages={pages} />
      <Navbar pages={pages} />
    </nav>
  )
}
