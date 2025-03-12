import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CustomerMap = () => {
  const locations = [
    { lat: 51.505, lon: -0.09, label: "Customer 1" },
    { lat: 48.8566, lon: 2.3522, label: "Customer 2" },
    { lat: 34.0522, lon: -118.2437, label: "Customer 3" },
  ];

  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={2}
      style={{ height: "400px", zIndex: "0", width: "100%" }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {locations.map((location, index) => (
        <Marker key={index} position={[location.lat, location.lon]}>
          <Popup>{location.label}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default CustomerMap;
