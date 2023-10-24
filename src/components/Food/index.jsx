import React from "react";
import beeline from "../../img/combo.png";
import mobiuz from "../../img/drink.png";
import ucell from "../../img/fruit.png";
import Beeline from "../Beeline";
import { Card, Content, ImgBox, Ims, Row } from "./style";
import { useNavigate } from "react-router-dom";

function Clothes() {
  const navigate = useNavigate();
  return (
    <Row>
      <Card>
        <ImgBox>
          <Ims src={beeline} alt="" />
        </ImgBox>
        <Content className="content">
          <button className="hello" onClick={() => navigate("/menuCombo")}>
            Buy
          </button>
        </Content>
      </Card>
      <Card>
        <ImgBox>
          <Ims src={mobiuz} alt="" />
        </ImgBox>
        <Content className="content">
          <button
            onClick={() => navigate("/menuDrinks")}
            className="hello"
          >
            Buy
          </button>
        </Content>
      </Card>
      <Card>
        <ImgBox>
          <Ims src={ucell} alt="" />
        </ImgBox>
        <Content className="content">
          <button
            className="hello"
            onClick={() => navigate("/informationUcell")}
          >
            Buy
          </button>
        </Content>
      </Card>
    </Row>
  );
}

export default Clothes;
