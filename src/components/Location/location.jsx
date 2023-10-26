import React from "react";
import "leaflet/dist/leaflet.css";
import "../Location/style.css";
import { Icon } from "leaflet";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
function Location() {
  const navigate = useNavigate();
  const instagramUrl = "https://www.instagram.com/team_1he_bests/";
  const twitterUrl = "https://www.instagram.com/team_1he_bests/";
  const telegramUrl = "https://www.instagram.com/team_1he_bests/";
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
      <div className="bg">
        <div className="icon">
          <a href={instagramUrl}>
            {" "}
            <AiFillInstagram style={{ marginTop: "3px", color: "black" }} />
          </a>
          <a href={twitterUrl}>
            {" "}
            <AiFillTwitterCircle style={{ marginTop: "3px", color: "black" }} />
          </a>
          <a href={telegramUrl}>
            {" "}
            <BsTelegram
              style={{ marginTop: "3px", color: "black", fontSize: "15px" }}
            />
          </a>
        </div>
        <h5 className="h5">GreenCleanCity</h5>
        <div className="divinput">
          <input className="input" type="email" placeholder="Email" />
          <button className="but">Send</button>
        </div>
      </div>
    </>
  );
}

export default Location;
