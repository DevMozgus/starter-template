import { useTranslations } from "next-intl"
import { motion } from "framer-motion"
import { Button } from "./Button"
import { SvgSpineBlob } from "./svg/SvgSpineBlob"
import { SvgWave } from "./svg/SvgWave"
import { ResponsiveImage } from "./ResponsiveImage"

export function CustomerCtaSection() {
  const t: any = useTranslations()
  return (
    <div className="section bg-primary-dark relative text-accent-light">
      <div className="max-x2 w-full mx-auto flex flex-col items-center">
        <div className="relative z-20">
          <div className="relative">
            <div>
              <SvgSpineBlob className="absolute text-accent-light -translate-y-[70%] translate-x-[90%] bottom-10 -right-40 3xl:right-0 w-64 z-0 transform opacity-10" />
              <SvgSpineBlob className="absolute text-accent-light  translate-x-[80%] bottom-10 -right-40 3xl:right-0 w-72 z-0 transform -rotate-12 opacity-20" />
              <SvgSpineBlob className="absolute text-accent-light translate-y-[60%] translate-x-[80%] bottom-10 -right-40 3xl:right-0 w-96 z-0 transform -rotate-[16deg] opacity-30" />
              <SvgSpineBlob className="absolute text-accent-light translate-y-[100%] translate-x-[110%] bottom-10 -right-40 3xl:right-0 w-72 z-0 transform -rotate-12 opacity-20" />
            </div>

            <div className="lg:flex relative z-10 2xl:rounded-layout 2xl:shadow-lg 2xl:p-10 2xl:bg-accent-light">
              <ResponsiveImage
                alt=""
                className="rounded-layout lg:w-1/2 "
                desktopSrc="stock-treatment.webp"
                mobileSrc="stock-treatment-sm.webp"
              />
              <motion.div
                key="cta1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="px-3 pt-7 pb-3 lg:w-1/2 lg:pl-20"
              >
                <h2 className="2xl:text-accent-dark">{t("customerCTA.section1.h2")}</h2>
                <ul className="list-disc pl-5 marker:text-secondary-dark marker:text-lg 2xl:text-primary-dark">
                  <li>{t("customerCTA.section1.l1")}</li>
                  <li>{t("customerCTA.section1.l2")}</li>
                  <li>{t("customerCTA.section1.l3")}</li>
                </ul>
              </motion.div>
            </div>
          </div>

          <div className="relative">
            <div>
              <SvgSpineBlob className="absolute text-accent-light -translate-y-2/3 -translate-x-full bottom-20 -left-20 3xl:left-20 w-[24rem] z-0 transform -rotate-[6deg] opacity-10" />
              <SvgSpineBlob className="absolute text-accent-light -translate-x-full bottom-20 left-0 3xl:left-20 w-[27rem] z-0 transform -rotate-[12deg] opacity-20" />
            </div>

            <div className="bg-accent-light z-10 relative 2xl:shadow-lg lg:shadow-none lg:mt-20 lg:p-10 lg:flex lg:flex-wrap lg:flex-row-reverse p-3 mt-8 rounded-layout shadow-lg">
              <ResponsiveImage
                alt=""
                className="rounded-layout lg:w-1/2"
                mobileSrc="stock-yoga2-sm.webp"
                desktopSrc="stock-yoga2.webp"
              />
              <motion.div
                key="cta2"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="px-3 pt-7 pb-3 lg:w-1/2 lg:pr-20"
              >
                <h2 className="!text-accent-dark">{t("customerCTA.section2.h2")}</h2>
                <ul className="text-primary-dark pl-5 list-disc marker:text-primary-dark marker:text-lg">
                  <li>{t("customerCTA.section2.l1")}</li>
                  <li>{t("customerCTA.section2.l2")}</li>
                  <li>{t("customerCTA.section2.l3")}</li>
                  <li>{t("customerCTA.section2.l4")}</li>
                </ul>
                <Button
                  href="contact"
                  text={t("CTA")}
                  className="mt-5 !hidden lg:!inline !mx-auto relative z-20"
                  color="primary"
                  type="link"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <Button
          href="contact"
          text="Book Now"
          className="mt-5 !mx-auto relative z-20 lg:!hidden"
          color="primary"
          type="link"
        />
        <div className="w-screen overflow-x-hidden absolute z-0 bottom-0 left-0 h-1/5 bg-accent-light text-primary-dark">
          <div className="relative w-ful h-full">
            <SvgWave className="absolute left-0" />
          </div>
        </div>
      </div>
    </div>
  )
}
