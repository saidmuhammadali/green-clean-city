import React from "react";
import uzum from "../../img/uzum.png";
import { Card, Content, ImgBox, Ims, Row } from "./style";
import { useNavigate } from "react-router-dom";

function Uzum() {
  const navigate = useNavigate();
  return (
    <Row>
      <Card>
        <ImgBox>
          <Ims src={uzum} alt="" />
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
    </Row>
  );
}

export default Uzum;
