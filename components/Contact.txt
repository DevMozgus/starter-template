import { useTranslations } from "next-intl"
import { useContext } from "react"
import { NavigationContext } from "./NavigationProvider"
import { Form } from "./Form"

export function Contact() {
  const t: any = useTranslations()
  const navigation = useContext(NavigationContext)

  return (
    <div
      ref={navigation?.ref.contact}
      className="section relative bg-primary-dark w-full flex justify-center items-center"
    >
      {/* //! TODO: add contact information? */}
      <div className="section-x relative min-w-1/2 w-[50rem] z-20 py-6 lg:p-10 bg-accent-light shadow-lg text-accent-dark rounded-layout">
        <h2 className="text-center text-primary-dark">{t("contact.form.h2")}</h2>
        <Form />
      </div>
    </div>
  )
}
