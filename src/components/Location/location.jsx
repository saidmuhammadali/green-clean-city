import React from "react";
import "leaflet/dist/leaflet.css";
import "../Location/style.css";
import { Icon } from "leaflet";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import ic from "../../img/ic.png";
import lo from "../../img/lo.png";
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
        <div className="asaa">
          <h2>GreenClean City</h2>
        </div>
        <div className="as">
          <img
            src={ic}
            style={{ width: "35px", height: "35px", marginTop: "50px" }}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default Location;
