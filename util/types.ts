export interface LayoutProps {
  /** Takes number for tailwindcss class - i.e. 1 = mx-1, 2 = mx-2, ... */
  xMargin?: number
  /** Takes number for tailwindcss class - i.e. 1 = my-1, 2 = my-2, ... */
  yMargin?: number
  /** Takes number for tailwindcss class - i.e. 1 = px-1, 2 = px-2, ... */
  xPadding?: number
  /** Takes number for tailwindcss class - i.e. 1 = py-1, 2 = py-2, ... */
  yPadding?: number
  /** Takes tailwindcss class - i.e. 'rounded-sm', 'rounded-full' ... */
  layoutRadius?: string
}
