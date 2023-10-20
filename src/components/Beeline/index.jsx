import React from "react";
import bee from "../../img/bee.jpg";
import beee from "../../img/bee2.jpg";
import beqe from "../../img/bee3.jpg";
import { BirinchCarta, KottaDiv, Rasm, Row } from "./style";

function Beeline() {
  return (
    <KottaDiv>
      <BirinchCarta>
        <Row>
          <Rasm src={bee} alt="" />
        </Row>
      </BirinchCarta>
      <BirinchCarta>
        <Row>
          <Rasm src={bee} alt="" />
        </Row>
      </BirinchCarta>
      <BirinchCarta>
        <Row>
          <Rasm src={bee} alt="" />
        </Row>
      </BirinchCarta>
    </KottaDiv>
  );
}

export default Beeline;
