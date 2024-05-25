const headingStyles = {
  h1: {
    fontFamily: "heading",
    fontSize: {
      base: "28px",
      lg: "60px",
    },
    lineHeight: {
      base: "56px",
      lg: "60px",
    },
    fontWeight: 700,
  },
  h2: {
    fontFamily: "heading",
    fontSize: "30px",
    lineHeight: "30px",
    fontWeight: 500,
    textTransform: "uppercase",
  },
  h3: {
    fontSize: "24px",
    lineHeight: "30px",
    fontWeight: 400,
  },
  h4: {
    fontSize: "13px",
    lineHeight: "24px",
    fontWeight: 500,
    textTransform: "uppercase",
  },
} as const

const labelStyles = {
  labelXS: {
    fontSize: "10px",
    lineHeight: "14px",
    fontWeight: 500,
  },
  labelS: {
    fontSize: "12px",
    lineHeight: "16px",
  },
  labelM: {
    fontSize: "14px",
    lineHeight: "24px",
  },
  labelL: {
    fontSize: "16px",
    fontWeight: "500",
    lineHeight: "24px",
  },
  labelXL: {
    fontSize: "28px",
    lineHeight: "40px",
  },
  labelXXL: {
    fontSize: "16px",
    lineHeight: "56px",
    fontWeight: 400,
  },
}

const paragraphStyles = {
  textMain: {
    fontSize: "13px",
    lineHeight: "24px",
  },
  textMainL: {
    fontSize: { base: "16px", md: "22px" },
    lineHeight: { base: "24px", md: "40px" },
  },
  headerCursive: {
    fontSize: "18px",
    lineHeight: "24px",
    fontStyle: "italic",
    fontFamily: "accent",
  },
  textProductCard: {
    fontSize: "13px",
    lineHeight: "20px",
  },
  heroSubtitle: {
    fontFamily: "accent",
    fontSize: {
      base: "20px",
      lg: "48px",
    },
    lineHeight: {
      base: "56px",
      lg: "64px",
    },
    fontWeight: 400,
    fontStyle: "italic",
    letterSpacing: {
      base: "-0.02em",
      lg: "normal",
    },
    textTransform: "uppercase",
  },
  headerSubtitle: {
    fontFamily: "accent",
    fontSize: {
      base: "30px",
      lg: "24px",
    },
    lineHeight: {
      base: "56px",
      lg: "64px",
    },
    fontStyle: "italic",
    letterSpacing: "-0.02em",
    textTransform: "uppercase",
  },
}

export const textStyles = {
  ...headingStyles,
  ...labelStyles,
  ...paragraphStyles,
}
