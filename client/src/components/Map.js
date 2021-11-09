import { Marker, MapContainer, TileLayer } from "react-leaflet";

function Map(props) {
  return (
    <MapContainer
      center={props.center}
      zoom={13}
      style={{ height: "600px", width: "600px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {/* marker of each restaurant on the map  */}
      <Marker position={[44.44471, -73.11278]} />
      <Marker position={[44.4455, -73.11238]} />
      <Marker position={[44.44401, -73.1122]} />
      <Marker position={[44.44463, -73.11195]} />
      <Marker position={[44.4448, -73.11561]} />
      <Marker position={[44.44678, -73.1107]} />
      <Marker position={[44.45064, -73.11258]} />
      <Marker position={[44.45502, -73.11216]} />
    </MapContainer>
  );
}

export default Map;
