import { Button as MantineButton } from "@mantine/core"
import { useContext } from "react"
import { NavigationContext } from "./NavigationProvider"

interface ButtonProps {
  text: string | JSX.Element
  type: "button" | "link" | "reset" | "submit"
  href?: string
  color?: "secondary" | "primary"
  className?: string
  onClick?: () => void
  disabled?: boolean
}

export function Button({ text, onClick, type, href, color, className, disabled }: ButtonProps) {
  const navigation = useContext(NavigationContext)

  const buttonProps =
    type === "link"
      ? {
          //@ts-ignore
          onClick: navigation!.scroll[href],
        }
      : { type, onClick }

  return (
    <MantineButton
      classNames={{
        filled: color === "secondary" ? "!bg-secondary-dark" : "!bg-primary-dark",
        root: "shadow-lg",
      }}
      {...buttonProps}
      className={className}
      size="md"
      disabled={disabled}
    >
      {text}
    </MantineButton>
  )
}
