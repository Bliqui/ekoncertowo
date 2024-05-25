import { ComponentSingleStyleConfig } from "@chakra-ui/react"

export const CONTAINER_PADDING = {
  base: "20px",
  md: "48px",
} as const

export const Container: ComponentSingleStyleConfig = {
  baseStyle: {
    px: CONTAINER_PADDING,
    maxW: "container.xl",
  },
}
