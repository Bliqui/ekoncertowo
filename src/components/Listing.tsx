import { Flex } from "@chakra-ui/react"

export const Listing = ({ children }) => {
  return (
    <Flex
      columnGap="80px"
      rowGap="40px"
      flexWrap="wrap"
      justifyContent={{ base: "center", lg: "space-between" }}
      alignItems="flex-start"
    >
      {children}
    </Flex>
  )
}
