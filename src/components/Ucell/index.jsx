import React from "react";
import mobi from "../../img/ucell1.jpg";
import ucelll from "../../img/ucell2.png";
import beee from "../../img/ucell3.jpg";
import { BirinchCarta, But, H1Bee, KottaDiv, Rasm, Row } from "./style";

function Ucell() {
  return (
    <>
      <H1Bee>Ucell</H1Bee>
      <KottaDiv>
        <BirinchCarta>
          <Row>
            <Rasm src={mobi} alt="" />
            <h5 style={{ textAlign: "center", marginTop: "8px" }}>Tariffs</h5>
            <p style={{ textAlign: "center" }}>
              200 GB:10 coins <br />
              500 SMS:8 coins
            </p>
            <But className="but" style={{ marginLeft: "60px" }}>
              AddCard
            </But>
          </Row>
        </BirinchCarta>
        <BirinchCarta>
          <Row>
            <Rasm src={ucelll} alt="" />
            <h5 style={{ textAlign: "center", marginTop: "8px" }}>Tariffs</h5>
            <p style={{ textAlign: "center" }}>
              400 GB:15 coins <br />
              800 SMS:12 coins
            </p>
            <But className="but" style={{ marginLeft: "60px" }}>
              AddCard
            </But>
          </Row>
        </BirinchCarta>
        <BirinchCarta>
          <Row>
            <Rasm src={beee} alt="" />
            <h5 style={{ textAlign: "center", marginTop: "8px" }}>Tariffs</h5>
            <p style={{ textAlign: "center" }}>
              1.200 GB:20 coins <br />
              1.000 SMS:15 coins
            </p>
            <But className="but" style={{ marginLeft: "60px" }}>
              AddCard
            </But>
          </Row>
        </BirinchCarta>
      </KottaDiv>
    </>
  );
}

export default Ucell;
