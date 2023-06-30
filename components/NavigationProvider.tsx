import { useScrollIntoView } from "@mantine/hooks"
import { createContext, MutableRefObject } from "react"

interface NavigationRefs {
  about: MutableRefObject<HTMLDivElement>
  review: MutableRefObject<HTMLDivElement>
  contact: MutableRefObject<HTMLDivElement>
}

interface NavigationScroll {
  about: () => void
  review: () => void
  contact: () => void
}

type Navigation = { ref: NavigationRefs; scroll: NavigationScroll }

export const NavigationContext = createContext<Navigation | undefined>(undefined)

export function NavigationProvider({ children }: any) {
  const { scrollIntoView: scrollToAbout, targetRef: aboutSectionRef } = useScrollIntoView<HTMLDivElement>()
  const { scrollIntoView: scrollToReview, targetRef: reviewSectionRef } = useScrollIntoView<HTMLDivElement>()
  const { scrollIntoView: scrollToContact, targetRef: contactSectionRef } = useScrollIntoView<HTMLDivElement>()

  const navigation: Navigation = {
    ref: {
      about: aboutSectionRef,
      review: reviewSectionRef,
      contact: contactSectionRef,
    },
    scroll: {
      about: scrollToAbout,
      review: scrollToReview,
      contact: scrollToContact,
    },
  }
  return <NavigationContext.Provider value={navigation}>{children}</NavigationContext.Provider>
}
