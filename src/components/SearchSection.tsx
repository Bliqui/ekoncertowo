import { Container, StackProps, Text, VStack } from "@chakra-ui/react"
import bgImageUrl from "assets/bg-image.png"

import { Filters } from "./Filters"
import { useHandleQueryParams } from "../hooks"

type SearchSectionProps = {
  heading: string
  onSubmit?: (args: { event: string; country: string; date: string }) => void
} & StackProps

export const SearchSection = ({
  heading,
  onSubmit,
  ...props
}: SearchSectionProps) => {
  const { setQueryParams } = useHandleQueryParams()

  return (
    <VStack
      width="100%"
      sx={{
        "::before": {
          backgroundImage: `url("${bgImageUrl}") `,
          content: "''",
          backgroundSize: "cover",
          backgroundPositionY: "15%",
          position: "absolute",
          top: "0px",
          right: "0px",
          bottom: "0px",
          left: "0px",
          opacity: "0.35",
          zIndex: -1,
        },
      }}
      backgroundSize="100%"
      position="relative"
      {...props}
    >
      <Container
        alignItems="center"
        paddingTop="127px"
        paddingBottom="83px"
        width="100%"
      >
        <Text textStyle="h3" color="textSecondary" textAlign="center" mb="19px">
          {heading}
        </Text>
        <Filters
          setQueryParams={(params) => {
            setQueryParams(params)
            onSubmit?.(params)
          }}
        />
      </Container>
    </VStack>
  )
}
