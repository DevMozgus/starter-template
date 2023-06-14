import Link from "next/link"
import { useTranslations } from "next-intl"
import { SvgWave } from "./svg/SvgWave"

export function Footer() {
  const t: any = useTranslations()
  return (
    <div className="bg-gradient-to-bl from-secondary-dark to-primary-light text-accent-light text-sm">
      <div className="w-screen top-[-1px] right-0 relative text-primary-dark z-0 transform -scale-x-100 overflow-x-hidden">
        <SvgWave />
      </div>
      <div className="max-x w-full mx-auto">
        <footer className="section-x pb-10">
          <Link legacyBehavior={true} href={""}>
            <a className="w-full block lg:flex lg:justify-between lg:items-end border-secondary-light border-b pb-5">
              <div className="mb-1 lg:mb-0 text-lg sm:text-[4vw] lg:text-lg leading-10">
                COMPANY NAME
                {/* //! TODO */}
              </div>
              <div className="text-sm">
                INFO
                {/* //! TODO */}
              </div>
            </a>
          </Link>

          {/* //! TODO: add contact information? */}

          <div className="text-xs border-secondary-light border-t pt-5">
            <p className="text-start opacity-90">
              {/* //! TODO: EDIT BELOW  */}
              Copyright © 2022 ***COMPANY NAME***. All rights reserved - Design and Development by{" "}
              <a className="underline" href="https://urlicic.dev">
                Nicola Urlicic
              </a>
              . All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </div>
  )
}
