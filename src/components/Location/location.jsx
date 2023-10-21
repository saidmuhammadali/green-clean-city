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
      getcode: [41.310197, 69.279314],
      Popup: "hellooUzb",
    },
    {
      getcode: [41.311282, 69.282413],
      Popup: "hellooUzb",
    },
  ];
  const customIcon = new Icon({
    iconUrl: "https://cdn-icons-png.flaticon.com/128/2536/2536646.png",
    iconSize: [20, 20],
  });
  return (
    <>
      <div className="h1div">
        <h2>GreenClean Location</h2>
      </div>
      <div className="roww">
        <div className="divv">
          <MapContainer center={[41.311594, 69.298936]} zoom={10}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {markers.map((markers) => {
              return <Marker position={markers.getcode} icon={customIcon} />;
            })}
          </MapContainer>
          <div>
            <h1></h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Location;
