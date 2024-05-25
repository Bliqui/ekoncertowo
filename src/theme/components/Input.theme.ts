import { ComponentStyleConfig } from "@chakra-ui/react"

export const Input: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
    bgColor: "bgWhite",
    borderWidth: "1px",
    borderColor: "#000",
  },

  defaultProps: {
    variant: "primary",
    size: "md",
  },

  variants: {
    primary: {
      bgColor: "bgWhite",
      borderWidth: "1px",
      borderColor: "#000",

      // _hover: {
      //   color: "hover",
      //   bgColor: "transparent",
      // },
      _focus: {},
      // _active: {
      //   color: "textMain",
      //   bgColor: "transparent",
      //   borderColor: "textMain",
      // },
      // _disabled: {
      //   pointerEvents: "none",
      //   color: "textPlaceholder",
      // },
    },
  },
}
