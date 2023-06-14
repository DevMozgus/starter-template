import Link from "next/link"
import { motion } from "framer-motion"
import { PageLink } from "./Navigation"
import { useState } from "react"
import { Burger } from "@mantine/core"
import { useScrollLock } from "@mantine/hooks"
import { useTranslations } from "next-intl"
import { useRouter } from "next/router"

interface NavburgerProps {
  pages: PageLink[]
  buttonStyle?: string
  overlayStyle?: string
}

/**
 * @param {PageLink[]} pages List of nav links
 * @param {string} buttonStyle Tailwindcss styles for burger button
 * @param {string} overlayStyle Tailwindcss styles for burger overlay of nav links
 */
export function Navburger({ pages, buttonStyle, overlayStyle }: NavburgerProps) {
  const [opened, setOpened] = useState(false)
  const t: any = useTranslations()
  const router = useRouter()
  const [scrollLocked, setScrollLocked] = useScrollLock()

  function toggle() {
    setOpened((o) => !o)
    setScrollLocked((s) => !s)
  }
  return (
    <div className="lg:hidden">
      <div className="section sm:px-32 absolute z-50 text-accent-light w-full flex justify-between">
        <Link legacyBehavior={true} href="/">
          <a className="text-lg w-2/3">
            <div className="mb-1 text-[6vw] sm:text-[4vw] leading-8">Company Name</div>
            <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>

            {/* //! TODO: REPLACE ABOVE */}
          </a>
        </Link>
        <Burger
          className="shadow-lg"
          opened={opened}
          onClick={toggle}
          classNames={{
            root: "!bg-accent-light",
            burger: "!text-primary-light",
          }}
          title={opened ? "Close navigation" : "Open navigation"}
        />
      </div>

      {opened && (
        <motion.ul
          key="burgeroverlay"
          exit={{ opacity: 0, y: 0 }}
          initial={{ opacity: 0, y: -200 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`section sm:px-32 w-screen min-h-fit h-96 shadow-lg rounded-b-layout fixed section z-40 bg-primary-dark text-accent-light ${overlayStyle}`}
        >
          <div className="space-y-3 mt-40 sm:mt-36">
            {pages.map((page: PageLink, index) => (
              <li key={`navburger${index}`}>
                <Link
                  href={""}
                  onClick={() => {
                    page.href()
                    toggle()
                  }}
                >
                  <span>{t(page.title)}</span>
                </Link>
              </li>
            ))}

            <div className="">
              <li className={`inline ${router.locale === "en" && "underline"}`}>
                <Link legacyBehavior={true} href={"/en"}>
                  <a>EN</a>
                </Link>
              </li>
              <span className="mx-1">/</span>
              <li className={`inline ${router.locale === "de" && "underline"}`}>
                <Link legacyBehavior={true} href={"/de"}>
                  <a>DE</a>
                </Link>
              </li>
            </div>
          </div>
        </motion.ul>
      )}
    </div>
  )
}
