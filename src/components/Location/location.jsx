import React from "react";
import "leaflet/dist/leaflet.css";
import "../Location/style.css";
import { Icon } from "leaflet";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
function Location() {
  const navigate = useNavigate();
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
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-12 ft-2"
              style={{ marginTop: "-80px" }}
            >
              <h5 style={{ fontSize: "15px" }}>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/home" style={{ fontSize: "11px" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/Donation" style={{ fontSize: "11px" }}>
                    Donation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/marketplace"
                    style={{ fontSize: "11px" }}
                  >
                    {" "}
                    MarketPlace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/location" style={{ fontSize: "11px" }}>
                    Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <img
              src={logo}
              alt=""
              style={{
                width: "50px",
                height: "30px",
                marginTop: "-342px",
                marginLeft: "30px",
              }}
            />
            <p className="pp">
              Lorem ipsum dolor sit <br /> amet consectetur,
              <br /> adipisicing elit.
            </p>
          </div>
          <div className="divbuton">
            <input className="input" type="Email" placeholder="  Email" />
            <button className="buttom">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p style={{ fontSize: "10px" }}>Design By Green Clean City</p>
      </div>
    </>
  );
}

export default Location;
