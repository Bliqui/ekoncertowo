import { Outlet } from "react-router-dom"
import { VStack } from "@chakra-ui/react"
import { Header } from "../components/Header"
import { Footer } from "../components/Footer"

export const Layout = () => {
  return (
    <VStack position="relative" h="100%">
      <Header />
      <Outlet />
      <Footer />
    </VStack>
  )
}
