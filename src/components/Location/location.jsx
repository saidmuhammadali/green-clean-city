import React from "react";
import "leaflet/dist/leaflet.css";
import "../Location/style.css";
import { Icon } from "leaflet";
import { MapContainer, Popup, TileLayer, Marker } from "react-leaflet";
import ic from "../../img/ic.png";
import lo from "../../img/lo.png";
import email from "../../img/email.png";
import web from "../../img/web.png";
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
      <div className="textdiv">
        <h1>Location</h1>
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
        </div>
      </div>
      <div className="back">
        <div className="e">
          <div className="e1">
            <img className="img1" src={ic} alt="" />
            <div className="text">
              <h5>Call us:</h5>
              <p className="p">
                998-88-***-**-** <br />
                998-88-***-**-**
              </p>
            </div>
          </div>
          <div className="e1">
            <img className="img2" src={lo} alt="" />
            <div className="text">
              <h5>Location:</h5>
              <p className="p">
                Impact.t <br />
                TechnologyHub
              </p>
              <p className="p"></p>
            </div>
          </div>
        </div>
        <div className="e">
          <div className="e3">
            <img className="img3" src={email} alt="" />
            <div className="text">
              <h5>Email:</h5>
              <p className="p">
                GreenCleanCity@gmail.com <br />
                TheBests@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div className="e">
          <div className="e4">
            <img className="img4" src={web} alt="" />
            <div className="text4">
              <h5>Email:</h5>
              <p className="p4">GreenCleanCity.com</p>
            </div>
          </div>
        </div>
        <h6>.</h6>
      </div>
    </>
  );
}

export default Location;
