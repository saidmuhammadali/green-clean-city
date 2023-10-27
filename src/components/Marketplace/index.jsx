import React from "react";
import { MArketDiv, H, RowDiv, Roww, Da } from "./style";
import { MdFastfood } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import { LuGrape } from "react-icons/lu";
import { BiSolidBookAlt } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import bg from "../../img/marketbg.png";
import logo from "../../img/logo.png";
import "./stil.css";
function MarketPlace() {
  const navigate = useNavigate();
  return (
    <>
      <RowDiv>
        <MArketDiv>
          <H href="/food">
            <MdFastfood
              style={{ position: "relative", top: "-2px", left: "-3px" }}
            />
            Evos
          </H>
          <H href="/clothes">
            <MdSendToMobile
              style={{ position: "relative", top: "-2px", left: "-3px" }}
            />
            Mobile Connections
          </H>
          <H href="/uzumMarket">
            <LuGrape
              style={{ position: "relative", top: "-2px", left: "-3px" }}
            />
            Uzum
          </H>
          <H href="/booksAssahiy">
            <BiSolidBookAlt
              style={{ position: "relative", top: "-1px", left: "-3px" }}
            />
            Asaxiy
          </H>
        </MArketDiv>
      </RowDiv>
      <Roww>
        <Da src={bg} alt="" />
      </Roww>
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

export default MarketPlace;
