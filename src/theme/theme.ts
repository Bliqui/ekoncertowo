import { extendTheme } from "@chakra-ui/react"

import { Container } from "./components/Container.theme"
import { Select } from "./components/Select.theme"
import { Input } from "./components/Input.theme"
import { globalStyles } from "./globalStyles"
import { semanticColors } from "./colors"
import { textStyles } from "./components/Text.theme"

export const theme = extendTheme({
  // breakpoints,
  // sizes,
  // fonts: {
  //   heading: "Helvetica Now Display, sans-serif",
  //   body: "Helvetica Now Text, sans-serif",
  //   accent: "Times New Roman, serif",
  // },
  components: {
    Container,
    Select,
    Input,
  },
  styles: {
    global: globalStyles,
  },
  semanticTokens: {
    colors: semanticColors,
  },
  textStyles,
})
