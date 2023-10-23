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
          <h5 style={{ textAlign: "center" }}>Tariflar</h5>
          <p style={{ textAlign: "center" }}>
            200 GB:10 coins <br />
            500 SMS:8 coins
          </p>
          <button style={{ marginLeft: "60px" }}>AddCard</button>
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
