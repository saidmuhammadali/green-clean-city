import React from "react";
import {
  MArketDiv,
  H,
  RowDiv,
  Roww,
  Da,
  Bg,
  Icons,
  H5,
  DivInput,
  Butt,
  Input,
} from "./style";
import { MdFastfood } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import { LuGrape } from "react-icons/lu";
import { BiSolidBookAlt } from "react-icons/bi";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsTelegram } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import bg from "../../img/marketbg.png";
function MarketPlace() {
  const navigate = useNavigate();
  const instagramUrl = "https://www.instagram.com/team_1he_bests/";
  const twitterUrl = "https://www.instagram.com/team_1he_bests/";
  const telegramUrl = "https://www.instagram.com/team_1he_bests/";
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
        <DivInput>
          <Input type="email" placeholder="Email" />
          <Butt>Send</Butt>
        </DivInput>
      </Bg>
    </>
  );
}

export default MarketPlace;
