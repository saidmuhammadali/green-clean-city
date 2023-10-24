import React from "react";
import combo from "../../img/combo1.png";
import comboe from "../../img/combo2.png";
import comboeq from "../../img/combo3.png";
import comboeqq from "../../img/combo4.png";
import a from "../../img/combo5.png";
import aa from "../../img/combo6.png";
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
      <Row>
        <div
          style={{
            border: "3px solid black",
            height: "320px",
            borderRadius: "10px",
            background: "white",
          }}
        >
          <IMg src={comboeqq} alt="" />
          <H1>Family-Combo.#1</H1>
          <P>
            Family Combo profitable fun <br /> for the whole family In
          </P>
          <D>DiscountCard:70%</D>
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
          <IMg src={a} alt="" />
          <H1>M-Combo.#2</H1>
          <P>M Series Offers - Combos</P>
          <D>DiscountCard:65%</D>
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
          <IMg src={aa} alt="" />
          <H1>Double Combo #3</H1>
          <P>
            Double combo series - a <br /> profitable solution for two!
          </P>
          <D>DiscountCard:73%</D>
          <Btn>Add to Cart</Btn>
        </div>
      </Row>
    </>
  );
}

export default Combo;
