import React from "react";
import combo from "../../img/combo1.png";
import { Btn, D, H1, IMg, P, Row } from "./style";

function Combo() {
  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        ComboSets
      </h1>
      <Row>
        <div
          style={{
            border: "2px solid white",
            height: "320px",
            borderRadius: "10px",
            background: "black",
          }}
        >
          <IMg src={combo} alt="" />
          <H1>Donar with beef </H1>
          <P>
            pieces of juicy grilled beef, <br />
            fries, rice
          </P>
          <D>Price:30%</D>
          <Btn>Add to Cart</Btn>
        </div>
        <div
          style={{
            border: "2px solid white",
            height: "320px",
            borderRadius: "10px",
            background: "black",
          }}
        >
          <IMg src={combo} alt="" />
          <H1>Donar with beef </H1>
          <P>
            pieces of juicy grilled beef, <br />
            fries, rice
          </P>
          <D>Price:30%</D>
          <Btn>Add to Cart</Btn>
        </div>
        <div
          style={{
            border: "2px solid white",
            height: "320px",
            borderRadius: "10px",
            background: "black",
          }}
        >
          <IMg src={combo} alt="" />
          <H1>Donar with beef </H1>
          <P>
            pieces of juicy grilled beef, <br />
            fries, rice
          </P>
          <D>Price:30%</D>
          <Btn>Add to Cart</Btn>
        </div>
      </Row>
    </>
  );
}

export default Combo;
