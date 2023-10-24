import React from "react";
import { Bgn, Csa, HeaderDiv, HeaderImg, Img } from "./style";
import city from "../../img/city.png";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
function Header() {
  const navigate = useNavigate();
  return (
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
  );
}

export default Header;
