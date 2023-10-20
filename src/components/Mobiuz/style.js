import Slider from "react-slick";
import styled from "styled-components";

const Carousel = styled(Slider)`
  width: 500px;
  height: 270px;
`;
const Wrap = styled.div``;
const Dow = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;
const Img = styled.img`
  width: 500px;
  height: 270px;
  border-radius: 10px;
`;
export { Carousel, Wrap, Img, Dow };
