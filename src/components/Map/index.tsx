import { Box } from "@chakra-ui/react"
import { MapContainer } from "react-leaflet"
import { MapElements } from "./MapElements"

export const Map = ({ mapView }: { mapView: [number, number] }) => {
  return (
    <Box
      boxShadow="0px 0px 8px 0px rgba(66, 68, 90, .6)"
      id="map"
      h={{ base: "200px", md: "300px" }}
      w="100%"
    >
      <MapContainer
        center={mapView}
        zoom={11}
        style={{ height: "100%" }}
        scrollWheelZoom={false}
      >
        <MapElements mapView={mapView} />
      </MapContainer>
    </Box>
  )
}
