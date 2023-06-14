import { faBandage, faBookMedical, faHeartPulse } from "@fortawesome/free-solid-svg-icons"
import { motion } from "framer-motion"
import { Button } from "./Button"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { SvgWave } from "./svg/SvgWave"
import { GetStaticPropsContext } from "next"
import { useTranslations } from "next-intl"
import { SvgSpineLong } from "./svg/SvgSpineLong"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
    },
  }
}

export function LandingSection() {
  const t: any = useTranslations()
  return (
    <>
      <div className="section w-full landing-bg h-[95vh] lg:min-h-[90vh] relative  text-white">
        <motion.div
          key="landing"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="max-x relative z-10 h-full mx-auto w-full lg:items-start lg:w-2/3 flex flex-col items-start justify-center"
        >
          <h1 className="lg:w-2/3">{t("landing.h1")}</h1>
          <p className="text-lg mb-5 sm:text-lg">{t("landing.p")}</p>
          <Button href="contact" text={t("CTA")} type="link" />
        </motion.div>
      </div>
      {
        /* <div className="w-screen h-screen top-0 overflow-hidden absolute z-0">
        <SvgSpineLong className="hidden bottom-5 transform opacity-20 -translate-x-[10rem] w-1/5 absolute right-0" />
        <SvgSpineLong className="lg:-translate-x-[10rem] lg:h-[120%] 2xl:right-1/2 2xl:translate-x-[120%] bottom-0 text-white transform translate-x-1/2 opacity-20 h-full absolute right-0" />
      </div> */
        //! TODO: landing image/svg
      }

      <div className="section bg-primary-dark w-full relative transform  z-10">
        <div className="max-x mx-auto w-full flex flex-col items-center lg:absolute lg:transform lg:-translate-x-1/2 lg:left-1/2 lg:-bottom-20 xl:-bottom-5 lg:z-20">
          <h2 className="text-accent-light">{t("landing.h2")}</h2>
          <div className="w-full lg:h-64 lg:min-h-fit flex flex-col lg:flex-row lg:flex-wrap lg:items-stretch relative z-10 items-center text-center">
            <div className="h-full bg-accent-light rounded-layout max-w-lg w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center justify-center mb-5 border-2 border-gray-200 py-16 px-5">
              <i className="text-primary-light w-10">
                <FontAwesomeIcon icon={faHeartPulse} className="text-4xl mb-3" />
              </i>
              <p className="text-primary-light">{t("landing.box1")}</p>
            </div>
            <div className="h-full bg-accent-light rounded-layout max-w-lg w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center justify-center mb-5 border-2 border-gray-200 py-16 px-5">
              <i className="text-primary-light w-10">
                <FontAwesomeIcon icon={faBookMedical} className="text-4xl mb-3" />
              </i>
              <p className="text-primary-light">{t("landing.box2")}</p>
            </div>
            <div className="h-full bg-accent-light rounded-layout max-w-lg w-full sm:w-3/4 lg:w-1/3 flex flex-col items-center justify-center mb-5 border-2 border-gray-200 py-16 px-5">
              <i className="text-primary-light w-10">
                <FontAwesomeIcon icon={faBandage} className="text-4xl mb-3" />
              </i>
              <p className="text-primary-light">{t("landing.box3")}</p>
            </div>
          </div>
          <Button href="contact" text={t("CTA")} color="secondary" className="mx-auto lg:mt-5 lg:mb-16" type="link" />
        </div>

        <div className="w-screen h-2 absolute left-0 -bottom-2 bg-primary-dark" />
        <div className="w-screen absolute text-primary-dark left-0 top-0 -translate-y-full z-0 overflow-x-hidden">
          <SvgWave transform="rotate(180deg)" />
        </div>
      </div>
    </>
  )
}
