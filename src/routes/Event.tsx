import { useEffect } from "react"
import { Flex } from "@chakra-ui/react"
import { createSearchParams, useNavigate, useParams } from "react-router-dom"

import { useGetEvent } from "../service/hooks/useGetEvent"
import { SearchSection } from "../components/SearchSection"
import { useHandleQueryParams } from "../hooks"
import { EventDetails } from "../components/EventDetails"

export const Event = () => {
  const params = useParams()
  const { queryParams } = useHandleQueryParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (Object.keys(queryParams).length > 0) {
      navigate({
        pathname: "/",
        search: createSearchParams(queryParams).toString(),
      })
    }
  }, [navigate, queryParams])

  const { data, isLoading } = useGetEvent({ event_id: params.eventId })

  const event = data?.event
  const weather = data?.weather

  return (
    <Flex flexDir="column" flexGrow={1} width="100%">
      <SearchSection
        heading="Dźwięki, które łączą - koncerty, które inspirują."
        pt="72px"
      />
      <Flex flexDir="column" backgroundColor="white" pb="330px">
        <EventDetails event={event} weather={weather} isLoading={isLoading} />
      </Flex>
    </Flex>
  )
}
