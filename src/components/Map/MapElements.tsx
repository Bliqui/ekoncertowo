import { Marker, Popup, TileLayer } from "react-leaflet"

export const MapElements = ({ mapView }: { mapView: [number, number] }) => (
  <>
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    <Marker position={mapView}>
      <Popup>Lokalizacja ewentu</Popup>
    </Marker>
  </>
)
