import { Button, Center, Flex, Text } from "@chakra-ui/react"

export const Footer = () => (
  <Center
    as="footer"
    flexDir="column"
    pt="16px"
    pb="36px"
    bgColor="bg"
    w="100%"
    mt="auto"
  >
    <Text textAlign="center" mb="16px">
      Nie przegap! Powiadomimy Cię o interesujacych wydarzeniach i sprzyjającej
      pogodzie!
    </Text>
    <Button mb="24px">Zapisz się do newslettera</Button>
    <Text mb="18px">lub dołącz do nas na</Text>
    <Flex gap="16px">Icons</Flex>
  </Center>
)
