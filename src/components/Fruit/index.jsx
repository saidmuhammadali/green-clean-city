import React from "react";
import { Btn, D, H1, IMg, P, Row } from "./style";
import asa from "../../img/fruit1.png";
import asaa from "../../img/fruit2.png";
import assaa from "../../img/fruit3.png";

function Fruit() {
  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        Deserts
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
          <IMg src={asa} alt="" />
          <H1>Honey cake</H1>
          <P>
            Honey soft sponge cake <br /> with sour cream
          </P>
          <D>DiscountCard:20%</D>
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
          <IMg src={asaa} alt="" />
          <H1>Cheesecake</H1>
          <P>
            Vanilla sponge cake with <br /> cream cheese cream
          </P>
          <D>DiscountCard:14%</D>
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
          <IMg src={assaa} alt="" />
          <H1>Berry donut</H1>
          <P>
            Soft tender donut in <br /> strawberry-yogurt glaze
          </P>
          <D>DiscountCard:26%</D>
          <Btn>Add to Cart</Btn>
        </div>
      </Row>
    </>
  );
}

export default Fruit;
