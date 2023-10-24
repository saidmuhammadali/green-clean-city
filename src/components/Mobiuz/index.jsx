import React from "react";
import mobi from "../../img/mobi.png";
import mobii from "../../img/mobi2.png";
import beee from "../../img/mobi3.jpg";
import { BirinchCarta, But, H1Bee, KottaDiv, Rasm, Row } from "./style";

function Mobiuz() {
  return (
    <>
      <H1Bee>Mobiuz</H1Bee>
      <KottaDiv>
        <BirinchCarta>
          <Row>
            <Rasm src={mobi} alt="" />
            <h5 style={{ textAlign: "center", marginTop: "8px" }}>Tariffs</h5>
            <p style={{ textAlign: "center" }}>
              200 GB:10 coins <br />
              500 SMS:8 coins
            </p>
            <But className="but" style={{ marginLeft: "55px" }}>
              Add to Card
            </But>
          </Row>
        </BirinchCarta>
        <BirinchCarta>
          <Row>
            <Rasm src={mobii} alt="" />
            <h5 style={{ textAlign: "center", marginTop: "8px" }}>Tariffs</h5>
            <p style={{ textAlign: "center" }}>
              400 GB:15 coins <br />
              800 SMS:12 coins
            </p>
            <But className="but" style={{ marginLeft: "55px" }}>
              Add to Card
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
            <But className="but" style={{ marginLeft: "55px" }}>
              Add to Card
            </But>
          </Row>
        </BirinchCarta>
      </KottaDiv>
    </>
  );
}

export default Mobiuz;
