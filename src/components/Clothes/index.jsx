import React from "react";
import beeline from "../../img/beeline.jpg";
import mobiuz from "../../img/mobiuz.jpg";
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
          <button
            className="hello"
            onClick={() => navigate("/informationBeeline")}
          >
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
            onClick={() => navigate("/informationMobiuz")}
            className="hello"
          >
            Buy
          </button>
        </Content>
      </Card>
    </Row>
  );
}

export default Clothes;
