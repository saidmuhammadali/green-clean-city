import React from "react";
import { Bgn, Csa, HeaderDiv, HeaderImg, Img } from "./style";
import city from "../../img/city.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
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
            marginTop: "90px",
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
              <h5>Quick Links</h5>
              <ul>
                <li className="nav-item">
                  <a className="" href="/home">
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/Donation">
                    Donation
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/marketplace">
                    {" "}
                    MarketPlace
                  </a>
                </li>
                <li className="nav-item">
                  <a className="" href="/location">
                    Location
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="Last-footer">
        <p>Design By Green Clean City</p>
      </div>
    </>
  );
}

export default Header;
