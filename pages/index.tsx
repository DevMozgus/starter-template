import { GetStaticPropsContext } from "next"
import Script from "next/script"
import Head from "next/head"
import { AboutSection } from "../components/AboutSection"
import { Contact } from "../components/Contact"
import { CustomerCtaSection } from "../components/CustomerCtaSection"
import { Footer } from "../components/Footer"
import { LandingSection } from "../components/LandingSection"
import { ReviewSection } from "../components/ReviewSection"
import { LocalBusinessJsonLd, NextSeo } from "next-seo"
//@ts-ignore
import { attributes, react as HomeContent } from "../content/home.md"

export async function getStaticProps({ locale }: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../locale/${locale}.json`)).default,
    },
  }
}

export default function Home() {
  let { title, cats } = attributes
  return (
    <div className="text-accent-dark overflow-hidden">
      <Head>
        <title>PAGE TITLE</title> //! TODO
        <meta
          name="description"
          content="PAGE DESCRIPTION" //! TODO
        />
        <link rel="icon" href="/favicon.ico" />
        <Script src="https://identity.netlify.com/v1/netlify-identity-widget.js"></Script>
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
        <article>
          <h1>{title}</h1>
          <HomeContent />
          <ul>
            {cats.map((cat: any, k: any) => (
              <li key={k}>
                <h2>{cat.name}</h2>
                <p>{cat.description}</p>
              </li>
            ))}
          </ul>
        </article>
        {/* <LandingSection />
        <CustomerCtaSection />
        <ReviewSection />
        <AboutSection />
        <Contact />
        <Footer /> */}
      </main>
    </div>
  )
}
