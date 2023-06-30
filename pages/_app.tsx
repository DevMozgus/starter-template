import { AppProps } from "next/app"
import { MantineProvider, ColorScheme, ColorSchemeProvider } from "@mantine/core"
import { theme } from "../util/mantineThemeOverride"
import { getCookie, setCookies } from "cookies-next"
import { GetServerSidePropsContext } from "next"
import "../styles/global.scss"
import "react-responsive-carousel/lib/styles/carousel.min.css"
import { MutableRefObject, useState } from "react"
import { Navigation } from "../components/Navigation"
import { NavigationProvider } from "../components/NavigationProvider"

import { Montserrat } from "@next/font/google"

//* NEXTJS FONTS - refer to https://nextjs.org/docs/basic-features/font-optimization
const font = Montserrat({
  subsets: ["latin"],
  // weight: ["400", "700"], //* Required if not a google variable font: https://fonts.google.com/variablefonts
  style: ["normal"],
  variable: "--font-default", // tailwind classname
}) //! TODO: set desired preload font

type Props = AppProps & {
  ColorScheme: ColorScheme
}

export default function App({ Component, pageProps, ColorScheme }: Props) {
  const [colorScheme, setColorScheme] = useState<ColorScheme>(ColorScheme)

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme = value || (colorScheme === "dark" ? "light" : "dark")
    setColorScheme(nextColorScheme)
    // when color scheme is updated save it to cookie
    setCookies("mantine-color-scheme", nextColorScheme, { maxAge: 60 * 60 * 24 * 30 })
  }
  //! TODO: implement inside globalscss

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider
        theme={{ colorScheme, ...theme }}
        emotionOptions={{ key: "mantine", prepend: false }} // ! Required to load tailwind styles after mantine: https://github.com/mantinedev/mantine/issues/823
        withGlobalStyles
        withNormalizeCSS
      >
        <NavigationProvider>
          <div className={`${font.variable}`}>
            <Navigation />
            <Component {...pageProps} />
          </div>
        </NavigationProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  )
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie("mantine-color-scheme", ctx) || "light",
})
