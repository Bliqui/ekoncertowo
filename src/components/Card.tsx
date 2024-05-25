import { Flex, Image, Text } from "@chakra-ui/react"

type CardProps = {
  image: {
    url: string
  }
  title: string
  date: string
  location: string
}

export const Card = ({ image, title, date, location }: CardProps) => (
  <Flex direction="column" gap="16px" maxW="210px" justifyContent="center">
    <Image src={image.url} borderRadius="8px" />
    <Text textStyle="textMainL">{title}</Text>
    <Text>{date}</Text>
    <Text>{location}</Text>
  </Flex>
)
