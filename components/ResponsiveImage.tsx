import { useMediaQuery } from "@mantine/hooks"
import { useEffect, useState } from "react"

export interface ResponsiveImageProps {
  className?: string
  mobileSrc: any
  desktopSrc: any
  alt: string
}

export function ResponsiveImage({ mobileSrc, desktopSrc, ...rest }: ResponsiveImageProps) {
  const [src, setSrc] = useState<string>(mobileSrc)
  const md = useMediaQuery("(min-width: 768px)")

  useEffect(() => {
    if (typeof window !== "undefined") setSrc(md ? desktopSrc : mobileSrc)
  }, [md])

  return <img loading="lazy" width={800} height={800} {...rest} src={src} />
}
