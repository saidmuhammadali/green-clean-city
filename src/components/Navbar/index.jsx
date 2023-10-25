import React from "react";
import logo from "../../img/logo.png";
import { Img, ImgDiv, Nav, A, ButtonDiv } from "./style";
import { Link } from "react-router-dom";
import { AiFillHome } from "react-icons/ai";
import { RiMoneyEuroCircleLine } from "react-icons/ri";
import { FaShoppingCart } from "react-icons/fa";
import { TiLocation } from "react-icons/ti";
import { SiGnuprivacyguard } from "react-icons/si";

function Navbar() {
  return (
    <>
      <ImgDiv>
        <Img src={logo} alt="" />
      </ImgDiv>
      <Nav>
        <A href="/home">
          <AiFillHome
            style={{
              fontSize: "15px",
              position: "relative",
              left: "-3px",
              top: "-0.5",
            }}
          />{" "}
          Home
        </A>
        <A href="/donation">
          {" "}
          <RiMoneyEuroCircleLine
            style={{
              fontSize: "18px",
              position: "relative",
              left: "-5px",
              top: "-0.5",
            }}
          />
          Donation
        </A>
        <A href="/marketplace">
          <FaShoppingCart
            style={{
              fontSize: "15px",
              position: "relative",
              left: "-3px",
              top: "-0.5",
            }}
          />{" "}
          MarketPLace
        </A>
        <A href="/location">
          {" "}
          <TiLocation
            style={{
              fontSize: "17px",
              position: "relative",
              left: "-3px",
              top: "-0.5",
            }}
          />
          Location
        </A>
      </Nav>
      <ButtonDiv>
        <Link
          style={{
            textDecoration: "none",
            backgroundColor: "#4fbf34",
            padding: "5px 15px",
            cursor: "pointer",
            transition: "background-color 0.3s ease",
            borderRadius: "5px",
            border: "none",
            color: "#fff",
            fontFamily: "Anton,sans-serif",
          }}
          to="/signup"
        >
          <SiGnuprivacyguard
            style={{
              fontSize: "14px",
              position: "relative",
              left: "-3px",
              top: "-2",
            }}
          />{" "}
          Sign Up
        </Link>
      </ButtonDiv>
    </>
  );
}

export default Navbar;
