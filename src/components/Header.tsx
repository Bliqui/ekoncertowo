import {
  Text,
  Flex,
  Button,
  IconButton,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useTheme,
} from "@chakra-ui/react"
import IcoCart from "assets/cart.svg?react"
import IcoProfile from "assets/profile.svg?react"
import IcoHamburgerMenu from "assets/hamburger.svg?react"

export const Header = () => {
  const theme = useTheme()

  return (
    <Container
      display="flex"
      bg="bgTransparent"
      justifyContent="space-between"
      alignItems="center"
      py="28px"
      position="absolute"
      top="0px"
      left="50%"
      transform="translate(-50%)"
      width="100%"
      zIndex={2}
    >
      <Text textStyle="h1" color="textAccent">
        ekoncertowo.pl
      </Text>
      <Flex gap="32px" display={{ base: "none", lg: "flex" }}>
        <Button>Założ konto</Button>
        <IconButton variant="outline" icon={<IcoCart />} aria-label="Koszyk" />
        <IconButton
          variant="outline"
          icon={<IcoProfile />}
          aria-label="Profil"
        />
      </Flex>

      <Flex display={{ base: "flex", lg: "none" }}>
        <Menu>
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={
              <IcoHamburgerMenu
                style={{ fill: theme.semanticTokens.colors.bgWhite.default }}
              />
            }
            variant="outline"
          />
          <MenuList>
            <MenuItem>
              <Button
                backgroundColor="textAccent"
                color="textSecondary"
                w="100%"
              >
                Koszyk
              </Button>
            </MenuItem>
            <MenuItem>
              <Button
                backgroundColor="textAccent"
                color="textSecondary"
                w="100%"
              >
                Konto
              </Button>
            </MenuItem>
          </MenuList>
        </Menu>
      </Flex>
    </Container>
  )
}
