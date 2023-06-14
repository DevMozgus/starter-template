import { useTranslations } from "next-intl"
import Link from "next/link"
import { useRouter } from "next/router"
import { PageLink } from "./Navigation"
import { SvgWave } from "./svg/SvgWave"

interface NavbarProps {
  pages: PageLink[]
}

export function Navbar({ pages }: NavbarProps) {
  const t: any = useTranslations()
  const router = useRouter()

  return (
    <div className="relative">
      <div className="hidden lg:block w-screen opacity-90 top-[-1px] right-0 absolute text-primary-dark z-10 transform overflow-x-hidden">
        <div className="bg-primary-dark w-full h-[10rem]"></div>
        <SvgWave transform="rotate(0)" />
      </div>
      <div className="hidden lg:flex w-full absolute z-50 text-accent-light section justify-center items-center">
        <ul className="w-full max-x2 mx-auto flex justify-between items-center">
          <li className="justify-self-start">
            <Link legacyBehavior={true} href="/">
              <a className="text-lg w-2/3">
                <div className="mb-1 text-[6vw] sm:text-[4vw] lg:text-3xl leading-10">Company Name</div>
                <div className="text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit</div>
                {/* //! TODO: REPLACE ABOVE */}
              </a>
            </Link>
          </li>

          <div className="space-x-8">
            {pages.map((page: PageLink, index) => (
              <li key={`navbar${index}`} className="inline hover:cursor-pointer text-lg">
                <Link href={""} onClick={page.href}>
                  <span>{t(page.title)}</span>
                </Link>
              </li>
            ))}

            <div className="inline text-lg hover:cursor-pointer">
              <li className={`inline hover:cursor-pointer ${router.locale === "en" && "underline"}`}>
                <Link legacyBehavior={true} href={"/en"}>
                  <a className="hover:cursor-pointer">EN</a>
                </Link>
              </li>
              <span>/</span>
              <li className={`inline hover:cursor-pointer ${router.locale === "de" && "underline"}`}>
                <Link legacyBehavior={true} href={"/de"}>
                  <a className="hover:cursor-pointer">DE</a>
                </Link>
              </li>
            </div>
          </div>
        </ul>
      </div>
    </div>
  )
}
