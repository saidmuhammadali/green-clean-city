import React from "react";
import { MArketDiv, H, RowDiv } from "./style";

function MarketPlace() {
  return (
    <RowDiv>
      <MArketDiv>
        <H href="/food">Evos</H>
        <H href="/clothes">Mobile Connections</H>
        <H href="">Uzum</H>
        <H href="">Asaxiy</H>
      </MArketDiv>
    </RowDiv>
  );
}

export default MarketPlace;
