import { useTranslations } from "next-intl"
import { useContext } from "react"
import { NavigationContext } from "./NavigationProvider"
import { motion } from "framer-motion"
import { SvgSpineLong } from "./svg/SvgSpineLong"
import { SvgWave } from "./svg/SvgWave"
import { ResponsiveImage } from "./ResponsiveImage"

export function AboutSection() {
  const navigation = useContext(NavigationContext)
  const t: any = useTranslations()

  return (
    <div
      ref={navigation?.ref.about}
      className="section relative bg-accent-light w-full overflow-x-clip overflow-y-visible"
    >
      <SvgSpineLong className="z-10 2xl:hidden right-1/2 top-1/2 transform rotate-90 translate-x-1/2 -translate-y-1/2 absolute text-secondary-light w-[50rem]" />
      <SvgSpineLong className="z-10 hidden 2xl:block right-0 top-1/2 transform rotate-90 translate-x-1/2 -translate-y-1/2 absolute text-secondary-light w-[50rem]" />
      <SvgSpineLong className="z-10 hidden 2xl:block left-0 top-1/2 transform -rotate-90 -translate-x-1/2 -translate-y-1/2 absolute text-secondary-light w-[50rem]" />
      <div className="max-x w-full mx-auto lg:mb-16">
        <div className="relative text-accent-dark">
          <h2 className="relative lg:section xl:hidden text-accent-dark z-30 text-center">{t("about.h2")}</h2>
        </div>
        <div className="lg:flex lg:items-end">
          <div className="relative mb-5 lg:w-1/2">
            <ResponsiveImage
              alt={t("alt.potrait")}
              className="relative z-30 w-2/3 xl:w-full xl:pr-20 right-0"
              desktopSrc={"potrait-blue.webp"}
              mobileSrc={"potrait-blue-sm.webp"}
            />

            <motion.h3
              key="aboutTag"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="absolute !font-normal !text-accent-light z-30 right-0 lg:right-28 xl:right-10 bottom-6 shadow-lg bg-secondary-dark p-3 rounded-lg"
            >
              {t("about.tag")}
            </motion.h3>
          </div>

          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:w-1/2 pb-3 mt-3 xl:mt-0 xl:py-10 xl:px-5 xl:self-center rounded-layout relative z-20 shadow-lg bg-accent-light text-secondary-dark"
          >
            <h2 className="hidden xl:block section-x text-accent-dark">{t("about.h2")}</h2>
            <h3 className="!bg-white xl:!bg-accent-light section-x py-3 xl:py-0 rounded-t-layout">{t("about.h3")}</h3>
            <div className="section-x py-3 space-y-2">
              <p>{t("about.p1")}</p>
              <p>{t("about.p2")}</p>
              <p>{t("about.p3")}</p>
            </div>
          </motion.div>
        </div>
      </div>
      <div className="w-screen overflow-x-hidden rotate-180 absolute z-0 -bottom-[1px] left-0 h-1/5 bg-accent-light text-primary-dark">
        <div className="relative w-ful h-full">
          <SvgWave className="absolute left-0" />
        </div>
      </div>
    </div>
  )
}
