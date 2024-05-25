import { ComponentStyleConfig } from "@chakra-ui/react"

export const Select: ComponentStyleConfig = {
  baseStyle: {
    borderRadius: 0,
    transitionDuration: "slow",
    borderWidth: "0px",
    "& .chakra-button__icon": {
      alignSelf: "unset",
    },
  },

  defaultProps: {
    variant: "primary",
    size: "md",
  },

  variants: {
    primary: {
      bgColor: "bgWhite",
      border: "1px solid",
      borderColor: "borderPrimary",

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
