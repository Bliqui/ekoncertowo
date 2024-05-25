import { useState } from "react"
import { Box, Container, Flex, Spinner, Text } from "@chakra-ui/react"

import { SearchSection } from "../components/SearchSection"
import { Listing } from "../components/Listing"
import { Card } from "../components/Card"
import { useGetEvents } from "../service/hooks/useGetEvents"
import { Event } from "../service/types"

export const Home = () => {
  const [queryParams, setQueryParams] = useState({
    event: "",
    country: "",
    date: "",
  })

  const { data, isLoading } = useGetEvents({
    keyword: queryParams.event,
    countryCode: queryParams.country,
  })
  const shouldShowSpinner = isLoading && !data?._embedded?.events

  return (
    <Box w="100%" display="flex" flexDir="column" flexGrow={1}>
      <SearchSection
        heading="Dźwięki, które łączą - koncerty, które inspirują."
        pt="72px"
        setQueryParams={(params: {
          event: string
          country: string
          date: string
        }) => setQueryParams(params)}
      />
      <Flex backgroundColor="white" w="100%" flexGrow={1}>
        <Container
          flexDirection="column"
          gap="10px"
          w="100%"
          justifyContent="center"
          alignItems="center"
          display="flex"
          my="28px"
          flexGrow={1}
        >
          {!shouldShowSpinner ? (
            <Content events={data?._embedded?.events || []} />
          ) : (
            <Spinner />
          )}
        </Container>
      </Flex>
    </Box>
  )
}

const Content = ({ events }: { events: Event[] }) => {
  if (!events.length) {
    return <Text>Nie ma ewentów o takich kryteriach</Text>
  }

  return (
    <Listing>
      {events?.map((event) => (
        <Card
          image={event.images[0]}
          title={event.name}
          date={event.dates.start.localDate}
          key={event.id}
        />
      ))}
    </Listing>
  )
}
