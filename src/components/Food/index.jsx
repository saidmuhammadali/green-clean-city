import React from "react";
import { Buttom, Ha, Ids, Pa, Section, SectionDiv, Tef } from "./style";
import food from "../../img/food1.jpg";
import foodd from "../../img/food2.jpg";
import foosd from "../../img/food3.jpg";
function Food() {
  return (
    <>
      <Tef>Food</Tef>
      <Section>
        <SectionDiv>
          <Ids src={food} alt="" />
          <Pa>Food:Salad1</Pa>
          <Ha>Price:20$</Ha>
          <Buttom>Add-cart</Buttom>
        </SectionDiv>
        <SectionDiv>
          <Ids src={foodd} alt="" />
          <Pa>Food:Salad2</Pa>
          <Ha>Price:30$</Ha>
          <Buttom>Add-cart</Buttom>
        </SectionDiv>
        <SectionDiv>
          <Ids src={foosd} alt="" />
          <Pa>Food:Salad3</Pa>
          <Ha>Price:50$</Ha>
          <Buttom>Add-cart</Buttom>
        </SectionDiv>
      </Section>
    </>
  );
}

export default Food;
