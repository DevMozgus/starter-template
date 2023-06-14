import { ReactNode } from "react"

interface InputProps {
  required?: boolean
  type: "text" | "email" | "tel"
  label: string
  name: string
  placeholder?: string
  className?: string
  onChange: any
  error?: ReactNode
}

export function Input({ label, name, className, error, ...rest }: InputProps) {
  return (
    <div className={className + " flex flex-col relative"}>
      <label className={`text-sm uppercase font-medium text-primary-bg mb-2`} htmlFor={name}>
        {label}
      </label>
      <input
        autoComplete="on"
        className={`${
          error && "error"
        } rounded-md placeholder:font-light font-light py-3 outline-none pl-3 placeholder:uppercase`}
        {...rest}
        name={name}
        id={name}
      />
      {error && <span className="mt-3 absolute -bottom-6 w-full text-red-700 text-center text-xs">{error}</span>}
    </div>
  )
}
