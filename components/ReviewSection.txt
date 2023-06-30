import { useMediaQuery } from "@mantine/hooks"
import { useTranslations } from "next-intl"
import { useContext } from "react"
import { Carousel } from "react-responsive-carousel"
import { NavigationContext } from "./NavigationProvider"
import { Review } from "./Review"

export function ReviewSection() {
  const lgScreen = useMediaQuery("(min-width: 1024px)")
  const xlScreen = useMediaQuery("(min-width: 1280px)")
  const navigation = useContext(NavigationContext)
  const t: any = useTranslations()

  return (
    <div ref={navigation?.ref.review} className="relative bg-accent-light w-full section lg:px-0">
      <h2 className="text-center !text-accent-dark">{t("reviews.h2")}</h2>
      {/* //* NOTE 
      //* Styling can be found in /styles/global.scss for carousel */}
      <Carousel
        className="xl:hidden w-full"
        centerMode={lgScreen}
        centerSlidePercentage={50}
        dynamicHeight={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className="h-full bg-accent-light">
          <Review imgPath="joe1.webp" author="Nicola" review={t("reviews.c1")} />
        </div>
        <div className="h-full bg-accent-light">
          <Review imgPath="joe2.webp" author="Fabian" review={t("reviews.c2")} />
        </div>
        <div className="h-full bg-accent-light">
          <Review imgPath="joe3.webp" author="Mara" review={t("reviews.c3")} />
        </div>
      </Carousel>
      <div className="hidden xl:flex justify-center">
        <div className="max-x2 w-full flex justify-center">
          <Review author="Nicola" imgPath="joe1.webp" review={t("reviews.c1")} />
          <Review author="Fabian" imgPath="joe2.webp" review={t("reviews.c2")} />
          <Review author="Mara" imgPath="joe3.webp" review={t("reviews.c3")} />
        </div>
      </div>
      {/* {typeof window !== "undefined" && !xlScreen ? (
        <Carousel
          centerMode={lgScreen}
          centerSlidePercentage={50}
          dynamicHeight={false}
          autoPlay={true}
          infiniteLoop={true}
          interval={5000}
          showThumbs={false}
          showArrows={false}
          showStatus={false}
        >
          <div className="h-full bg-accent-light">
            <Review imgPath="joe1.webp" author="Nicola" review={t("reviews.c1")} />
          </div>
          <div className="h-full bg-accent-light">
            <Review imgPath="joe2.webp" author="Fabian" review={t("reviews.c2")} />
          </div>
          <div className="h-full bg-accent-light">
            <Review imgPath="joe3.webp" author="Mara" review={t("reviews.c3")} />
          </div>
        </Carousel>
      ) : (
        <div className="flex justify-center">
          <div className="max-x2 w-full flex justify-center">
            <Review author="Nicola" imgPath="joe1.webp" review={t("reviews.c1")} />
            <Review author="Fabian" imgPath="joe2.webp" review={t("reviews.c2")} />
            <Review author="Mara" imgPath="joe3.webp" review={t("reviews.c3")} />
          </div>
        </div>
      )} */}
    </div>
  )
}
