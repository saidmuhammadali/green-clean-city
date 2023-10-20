import React from "react";
import { Csa, HeaderDiv, HeaderImg, Img } from "./style";
import city from "../../img/city.png";
import { motion } from "framer-motion";
function Header() {
  return (
    <Csa>
      <motion.h1
        style={{
          fontFamily: "Anton",
          color: "#004c72",
          marginLeft: "125px",
          marginTop: "110px",
        }}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        Make the planet cleaner <br /> start with yourself
      </motion.h1>
      <HeaderDiv>
        <HeaderImg>
          <Img src={city} alt="" />
        </HeaderImg>
      </HeaderDiv>
    </Csa>
  );
}

export default Header;
