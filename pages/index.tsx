import { GetStaticPropsContext } from "next"
import Head from "next/head"
import { AboutSection } from "../components/AboutSection"
import { Contact } from "../components/Contact"
import { CustomerCtaSection } from "../components/CustomerCtaSection"
import { Footer } from "../components/Footer"
import { LandingSection } from "../components/LandingSection"
import { ReviewSection } from "../components/ReviewSection"
import { LocalBusinessJsonLd, NextSeo } from "next-seo"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
    },
  }
}

export default function Home() {
  return (
    <div className="text-accent-dark overflow-hidden">
      <Head>
        <title>PAGE TITLE</title> //! TODO
        <meta
          name="description"
          content="PAGE DESCRIPTION" //! TODO
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NextSeo
        openGraph={{
          type: "website",
          url: "", //! TODO
          title: "", //! TODO
          description: "", //! TODO
          images: [
            {
              url: "", //! TODO
              width: 1200,
              height: 630,
              alt: "", //! TODO
            },
          ],
        }}
      />
      <LocalBusinessJsonLd
        type="" //! TODO
        id="" //! TODO
        name="" //! TODO
        url="" //! TODO
        images={[""]} //! TODO
        description="" //! TODO
        address={{
          streetAddress: "",
          addressLocality: "",
          addressRegion: "",
          postalCode: "",
          addressCountry: "",
        }} //! TODO
      />
      <main>
        <LandingSection />
        <CustomerCtaSection />
        <ReviewSection />
        <AboutSection />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}
