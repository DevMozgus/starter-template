import { MantineThemeOverride } from "@mantine/core"

// * DOCS:
// * https://mantine.dev/theming/extend-theme/

export const theme: MantineThemeOverride = {
  //   defaultRadius: 0,
  // colorScheme: 'light',
  // * colors: Record<string, Tuple<string, 10>>;
  // white: string;
  // black: string;
  fontFamily: "Roboto, sans-serif",
  headings: {
    fontFamily: "Roboto, sans-serif",
    sizes: {
      h1: { fontSize: 28 },
      h2: { fontSize: 19 },
      h3: { fontSize: 16 },
    },
  },
  // lineHeight: string | number;
}
