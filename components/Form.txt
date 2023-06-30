import { useTranslations, useLocale } from "next-intl"
import { useState } from "react"
import { useForm } from "@mantine/hooks"
import { Input } from "./Input"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExclamationCircle, faCheckCircle } from "@fortawesome/free-solid-svg-icons"
import { Button } from "./Button"
import { LoadingOverlay } from "@mantine/core"

export function Form() {
  const t: any = useTranslations()
  const locale = useLocale()
  const [formState, setFormState] = useState<"error" | "success" | "loading" | undefined>(undefined)
  const form = useForm({
    initialValues: {
      locale,
      name: "",
      tel: "",
      email: "",
      message: "",
    },
    validationRules: {
      name: (value) => /^([A-Z][a-z]+([ ]?[a-z]?['-]?[A-Z][a-z]+)*)$/.test(value),
      tel: (value) =>
        /^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/.test(value),
      email: (value) =>
        /^(?:(?:[\w`~!#$%^&*\-=+;:{}'|,?\/]+(?:(?:\.(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)*"|[\w`~!#$%^&*\-=+;:{}'|,?\/]+))*\.[\w`~!#$%^&*\-=+;:{}'|,?\/]+)?)|(?:"(?:\\?[\w`~!#$%^&*\-=+;:{}'|,?\/\.()<>\[\] @]|\\"|\\\\)+"))@(?:[a-zA-Z\d\-]+(?:\.[a-zA-Z\d\-]+)*|\[\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\])$/.test(
          value
        ),
      message: (value) => value.length > 5,
    },
    errorMessages: {
      name: t("contact.form.error"),
      tel: t("contact.form.error"),
      email: t("contact.form.error"),
      message: "",
    },
  })

  if (formState === "success")
    return (
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-center text-accent-dark text-lg lg:text-2xl">{t("contact.form.success")}</h3>
        <FontAwesomeIcon size="sm" className="text-secondary-light text-4xl lg:text-9xl pt-3" icon={faCheckCircle} />
      </div>
    )

  return (
    <div className="relative">
      <LoadingOverlay visible={formState === "loading"} />
      <form
        onSubmit={form.onSubmit(async (values) => {
          setFormState("loading")
          const post = await fetch("/.netlify/functions/send-mail", {
            method: "POST",
            body: JSON.stringify(values),
          })
          if (post.status === 200) {
            setFormState("success")
          } else {
            setFormState("error")
          }
        })}
      >
        <div className="space-y-5 mb-5">
          <Input
            className="lg:w-1/2 lg:pr-5"
            label={t("contact.form.email")}
            name="email"
            placeholder="email@beispiel.com"
            required
            type="text"
            {...form.getInputProps("email")}
          />
          <div className="lg:flex w-full space-y-5 lg:space-y-0">
            <Input
              className="lg:w-1/2 lg:mr-5"
              label={t("contact.form.name")}
              placeholder={t("contact.form.namePlaceholder")}
              name="name"
              required
              type="text"
              {...form.getInputProps("name")}
            />
            <Input
              className="lg:w-1/2 lg:ml-5"
              placeholder="06766543210"
              label={t("contact.form.phone")}
              name="tel"
              required
              type="tel"
              {...form.getInputProps("tel")}
            />
          </div>
          <div>
            <label className={`uppercase text-sm font-medium text-primary-bg mb-2 w-full block`} htmlFor="message">
              {t("contact.form.message")}
            </label>
            <textarea
              required
              placeholder={t("contact.form.messagePlaceholder")}
              className={`${
                form.getInputProps("message").error && "error"
              }  placeholder:font-light font-light mt-2 h-48 rounded-md w-full px-3 pt-3 outline-none placeholder:uppercase`}
              name="message"
              id="message"
              {...form.getInputProps("message")}
            ></textarea>
          </div>
          {formState === "error" && (
            <div className="w-full my-5 font-medium bg-white border-4 border-red-500 text-red-700 rounded-3xl py-5 px-5">
              <FontAwesomeIcon size="sm" className="mr-2" icon={faExclamationCircle} />
              <span className="text-center">{t("contact.form.formError")}</span>
            </div>
          )}
        </div>

        <div className="w-full flex justify-center">
          <Button type="submit" color="primary" text={t("contact.form.send")} disabled={formState === "loading"} />
        </div>
      </form>
    </div>
  )
}
