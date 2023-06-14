import { CSSProperties } from "react"

export interface LayoutProps {
  xMargin: string
  yMargin: string
  xPadding: string
  yPadding: string
  borderRadius: string
}

export interface LayoutPayload {
  padding: CSSProperties
  margin: CSSProperties
  borderRadius: string
}

/**
 * Takes layout properties and returns them as CSS styles
 * @param {string} xPadding - CSS rule to apply to left and right: i.e. '1rem'
 * @param {string} yPadding - CSS rule to apply to top and bottom: i.e. '1rem'
 * @param {string} xMargin - CSS rule to apply to left and right: i.e. '1rem'
 * @param {string} yMargin - CSS rule to apply to top and bottom: i.e. '1rem'
 * @param {string} borderRadius - CSS rule to apply border-radius: i.e. '1rem'
 * @returns {LayoutPayload} CSSProperties for layout
 */
export function getLayout({ xPadding, yPadding, xMargin, yMargin, borderRadius }: LayoutProps): LayoutPayload {
  const padding: CSSProperties = {
    paddingTop: yPadding,
    paddingBottom: yPadding,
    paddingLeft: xPadding,
    paddingRight: xPadding,
  }

  const margin: CSSProperties = {
    marginTop: yMargin,
    marginBottom: yMargin,
    marginLeft: xMargin,
    marginRight: xMargin,
  }

  return {
    padding: {
      paddingTop: yPadding,
      paddingBottom: yPadding,
      paddingLeft: xPadding,
      paddingRight: xPadding,
    },
    margin: {
      marginTop: yMargin,
      marginBottom: yMargin,
      marginLeft: xMargin,
      marginRight: xMargin,
    },
    borderRadius,
  }
}
