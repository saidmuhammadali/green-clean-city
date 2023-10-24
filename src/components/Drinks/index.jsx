import React from "react";
import combo from "../../img/drink1.png";
import comboe from "../../img/drink2.png";
import comboeq from "../../img/drink3.png";
import asa from "../../img/drink4.png";
import asaa from "../../img/drink5.png";
import assaa from "../../img/drink6.png";
import { Btn, D, H1, IMg, P, Row } from "./style";

function Drink() {
  return (
    <>
      <h1
        style={{
          color: "white",
          textAlign: "center",
          marginTop: "35px",
        }}
      >
        Drinks
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
          <H1>Still water 0.5l</H1>
          <P>
            Montella Daily Purified, <br /> Drinking Water
          </P>
          <D>DiscountCard:10%</D>
          <Btn>Add to Card</Btn>
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
          <H1>Mojito</H1>
          <P>
            Mojito - cooling lemonade with <br /> aromatic lime juice,
          </P>
          <D>DiscountCard:15%</D>
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
          <H1>Pepsi, 1.5l</H1>
          <P>Pepsi in 1.5 liter PET bottle</P>
          <D>DiscountCard:12%</D>
          <Btn>Add to Cart</Btn>
        </div>
      </Row>
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
          <H1>Green tea with lemon</H1>
          <P>
            Green Ceylon loose leaf <br /> tea with fresh lemon
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
          <H1>Green tea</H1>
          <P>Green Ceylon loose leaf tea</P>
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
          <IMg src={assaa} alt="" />
          <H1>Pina colada</H1>
          <P>
            Pina Colada – refreshing <br /> coconut lemonade
          </P>
          <D>DiscountCard:26%</D>
          <Btn>Add to Cart</Btn>
        </div>
      </Row>
    </>
  );
}

export default Drink;
