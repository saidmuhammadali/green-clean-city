import React from "react";
import { MArketDiv, H, RowDiv, Roww, Da, Bg } from "./style";
import { MdFastfood } from "react-icons/md";
import { MdSendToMobile } from "react-icons/md";
import { LuGrape } from "react-icons/lu";
import { BiSolidBookAlt } from "react-icons/bi";
import bg from "../../img/marketbg.png";
function MarketPlace() {
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
      <Bg></Bg>
    </>
  );
}

export default MarketPlace;
