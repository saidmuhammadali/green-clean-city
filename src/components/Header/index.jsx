import React from "react";
import { Bgn, Csa, HeaderDiv, HeaderImg, Img } from "./style";
import city from "../../img/city.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import logo from "../../img/logo.png";
import "./stil.css";
function Header() {
  const navigate = useNavigate();
  return (
    <>
      <Csa>
        <motion.h1
          style={{
            fontFamily: "Anton",
            color: "wheat",
            marginLeft: "125px",
            marginTop: "110px",
          }}
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          Make the planet cleaner <br /> start with yourself
        </motion.h1>
        <Bgn onClick={() => navigate("/aboutUs")}>AboutUs</Bgn>
        <HeaderDiv>
          <HeaderImg>
            <Img src={city} alt="" />
          </HeaderImg>
        </HeaderDiv>
      </Csa>
      <div className="Footer">
        <div className="container">
          <div className="row">
            <div
              className="col-md-3 col-lg-3 col-12 ft-2"
              style={{ marginTop: "-70px" }}
            >
              <h5 style={{ fontSize: "15px" }}>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/home" style={{ fontSize: "13px" }}>
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/Donation" style={{ fontSize: "13px" }}>
                    Donation
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className=""
                    href="/marketplace"
                    style={{ fontSize: "13px" }}
                  >
                    {" "}
                    MarketPlace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/location" style={{ fontSize: "13px" }}>
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
              style={{ width: "120px", height: "80px", marginTop: "-292px" }}
            />
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p style={{ fontSize: "17px" }}>Design By Green Clean City</p>
      </div>
    </>
  );
}

export default Header;
