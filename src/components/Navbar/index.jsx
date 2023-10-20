import React from "react";
import logo from "../../img/logo.png";
import { Img, ImgDiv, Nav, A, ButtonDiv } from "./style";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <>
      <ImgDiv>
        <Img src={logo} alt="" />
      </ImgDiv>
      <Nav>
        <A href="/home"> Home</A>
        <A href=""> About Us</A>
        <A href="/marketplace"> MarketPLace</A>
        <A href="/location">Location</A>
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
          Sign Up
        </Link>
      </ButtonDiv>
    </>
  );
}

export default Navbar;
