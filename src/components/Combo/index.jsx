import React from "react";
import combo from "../../img/combo1.png";
import comboe from "../../img/combo2.png";
import comboeq from "../../img/combo3.png";
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
            border: "3px solid black",
            height: "320px",
            borderRadius: "10px",
            background: "white",
          }}
        >
          <IMg src={combo} alt="" />
          <H1>Donar with beef </H1>
          <P>
            Pieces of juicy grilled beef, <br />
            fries, rice
          </P>
          <D>DiscountCard:30%</D>
          <Btn>Add to Cart</Btn>
        </div>
        <div
          style={{
            border: "3px solid black",
            height: "320px",
            borderRadius: "10px",
            background: "white",
          }}
        >
          <IMg src={comboe} alt="" />
          <H1>Children's combo</H1>
          <P>
            Delicious Hot Dog Children's, <br /> natural children's juice
          </P>
          <D>DiscountCard:18%</D>
          <Btn>Add to Cart</Btn>
        </div>
        <div
          style={{
            border: "3px solid black",
            height: "320px",
            borderRadius: "10px",
            background: "white",
          }}
        >
          <IMg src={comboeq} alt="" />
          <H1>Sports combo</H1>
          <P>
            An ideal option for those who,
            <br />
            monitors nutrition.
          </P>
          <D>DiscountCard:50%</D>
          <Btn>Add to Cart</Btn>
        </div>
      </Row>
    </>
  );
}

export default Combo;
