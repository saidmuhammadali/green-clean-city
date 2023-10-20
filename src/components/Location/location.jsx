import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";

function Location() {
  return (
    <div>
      <MapContainer center={[48.8566, 2.3522]} zoom={13}>
        <TileLayer attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'></TileLayer>
      </MapContainer>
    </div>
  );
}

export default Location;
