import React from "react";
import "leaflet/dist/leaflet.css";
import "../Location/style.css";
import { Icon } from "leaflet";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
function Location() {
  const markers = [
    {
      getcode: [41.314672, 69.273304],
      Popup: "Good morning Tashkent",
    },
    {
      getcode: [41.318041, 69.254012],
      Popup: "hellooUzb",
    },
    {
      getcode: [41.305373, 69.245014],
      Popup: "hellooUzb",
    },
    {
      getcode: [41.311282, 69.282413],
      Popup: "hellooUzb",
    },
    {
      getcode: [41.315395, 69.293284],
      Popup: "hellooUzb",
    },
    {
      getcode: [41.296955, 69.27947],
      Popup: "hellooUzb",
    },
  ];
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2536/2536646.png",
    iconSize: [20, 20],
  });
  return (
    <>
    <div className="row">
      <h1 className="h1">Location</h1>
      <div className="location">
        <MapContainer center={[41.311594, 69.298936]} zoom={10}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {markers.map((markers) => {
            return <Marker position={markers.getcode} icon={customIcon} />;
          })}
        </MapContainer>
      </div>
      </div>
    </>
  );
}

export default Location;
