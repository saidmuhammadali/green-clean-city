import React from "react";
import { Bg, Bgn, Csa, H5, HeaderDiv, HeaderImg, Icons, Img } from "./style";
import city from "../../img/city.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
function Header() {
  const navigate = useNavigate();
  const instagramUrl = "https://www.instagram.com/team_1he_bests/";
  const twitterUrl = "https://www.instagram.com/team_1he_bests/";
  const telegramUrl = "https://www.instagram.com/team_1he_bests/";
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
      <Bg>
        <Icons>
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
        </Icons>
        <H5>GreenCleanCity</H5>
      </Bg>
    </>
  );
}

export default Header;
