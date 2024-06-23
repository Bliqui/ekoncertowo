import {
  Text,
  Container,
  Flex,
  Heading,
  Image,
  Spinner,
} from "@chakra-ui/react"

import IcoCalendar from "assets/calendar.svg?react"
import IcoLocation from "assets/location.svg?react"
import IcoShare from "assets/share.svg?react"

import { Weather, Event } from "../service/types"
import { Map } from "./Map"
import {
  copyToClipboard,
  fahrenheitToCelsius,
  formatFullDate,
  getFullUrl,
  getWeatherName,
  toastError,
  toastInfo,
} from "../utils"

export const EventDetails = ({
  event,
  weather,
  isLoading,
}: {
  event?: Event
  weather?: Weather
  isLoading: boolean
}) => {
  if (isLoading) {
    return (
      <Flex mt="60px" justifyContent="center">
        <Spinner size="lg" />
      </Flex>
    )
  }

  if (!event && !isLoading) {
    return (
      <Text textAlign="center" mt="60px">
        Nie ma takiego ewentu (albo coś jest nie tak po naszej stronie :/)
      </Text>
    )
  }

  return (
    <Container w="100%" flexGrow={1} pt="80px">
      <Flex gap="20px" alignItems="center">
        <Heading>{event?.name}</Heading>
        <IcoShare
          onClick={async () => {
            try {
              await copyToClipboard(getFullUrl())
              toastInfo("Link do ewentu został skopiowany")
            } catch (err) {
              toastError("Coś poszło nie tak")
            }
          }}
          aria-label='Przycisk "Skopiuj link do ewentu"'
          cursor="pointer"
        />
      </Flex>
      <Flex flexWrap="wrap" gap="20px">
        <Flex alignItems="center" flexWrap="nowrap" gap="10px" mt="4px">
          <IcoCalendar />
          <Text>{formatFullDate(event?.dates?.start?.localDate)}</Text>
        </Flex>

        <Flex alignItems="center" flexWrap="nowrap" gap="10px" mt="4px">
          <IcoLocation />
          <Text>{event?._embedded?.venues?.[0]?.city?.name}</Text>
        </Flex>
      </Flex>
      <Flex mt="50px" gap="20px" flexDir="row" flexWrap="wrap">
        <Flex flexDir="column" gap="10px" w={{ base: "100%", lg: "33%" }}>
          <Text textStyle="h3" display="inline">
            Ewent:
          </Text>
          <Image
            src={event?.images?.[0].url}
            borderRadius="8px"
            objectFit="cover"
            flexShrink={0}
          />
        </Flex>

        {event && (
          <Flex
            w={{ base: "100%", lg: "32%" }}
            flexDir="column"
            flexShrink={0}
            gap="10px"
          >
            <Text textStyle="h3" display="inline">
              Ewent na mapie:
            </Text>
            <Map
              mapView={[
                event?._embedded?.venues?.[0]?.location?.latitude,
                event?._embedded?.venues?.[0]?.location?.longitude,
              ]}
            />
          </Flex>
        )}

        <Flex w="100%" maxW={{ lg: "28%" }} flexDir="column" gap="10px">
          <Text textStyle="h3">Dane dotyczące pogody:</Text>
          <Text>
            Warunki pogodowe:{" "}
            {getWeatherName(weather?.currentConditions?.conditions)}
          </Text>
          <Text>
            Temperatura:{" "}
            {Math.trunc(fahrenheitToCelsius(weather?.days?.[0]?.temp))}°
          </Text>
          <Text>
            Odczuwalna jak:{" "}
            {Math.trunc(fahrenheitToCelsius(weather?.days?.[0]?.feelslike))}°
          </Text>
          <Text>
            Wilgotność powietrza:{" "}
            {Math.trunc(fahrenheitToCelsius(weather?.days?.[0]?.humidity))}%
          </Text>
        </Flex>
      </Flex>
    </Container>
  )
}
