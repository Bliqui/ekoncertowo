import { useState } from "react"
import {
  Box,
  Button,
  Container,
  Flex,
  Spinner,
  Text,
  Link,
} from "@chakra-ui/react"
import { Link as RouterLink, useSearchParams } from "react-router-dom"

import { SearchSection } from "../components/SearchSection"
import { Listing } from "../components/Listing"
import { Card } from "../components/Card"
import { useGetEvents } from "../service/hooks/useGetEvents"
import { Event } from "../service/types"
import { useHandleQueryParams } from "../hooks"

export const Home = () => {
  const { setQueryParams, queryParams } = useHandleQueryParams()

  const { data, isLoading, nextPageNumber } = useGetEvents({
    keyword: queryParams?.event,
    countryCode: queryParams?.country,
    date: queryParams?.date,
    page: queryParams?.page,
  })

  const onLoadMoreClick = () => setQueryParams({ page: nextPageNumber })

  const shouldShowSpinner = isLoading && !data?._embedded?.events

  return (
    <Box w="100%" display="flex" flexDir="column" flexGrow={1}>
      <SearchSection
        heading="Dźwięki, które łączą - koncerty, które inspirują."
        pt="72px"
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
            <Spinner size="lg" />
          )}
        </Container>
      </Flex>
      {nextPageNumber && (
        <Button onClick={onLoadMoreClick}>Załaduj więcej</Button>
      )}
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
        <Link to={`/event/${event.id}`} as={RouterLink}>
          <Card
            image={event.images[0]}
            title={event.name}
            date={event.dates.start.localDate}
            key={event.id}
          />
        </Link>
      ))}
    </Listing>
  )
}
