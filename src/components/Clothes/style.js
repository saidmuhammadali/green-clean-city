import styled from "styled-components";

const Card = styled.div`
  position: relative;
  width: 170px;
  height: 100px;
  border-radius: 10px;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.5);
  padding: 30px 50px;
  background: #fff;
  margin: 20px;
  top: 50px;
  transition: 0.3s;
  overflow: hidden;
  &:hover {
    height: 180px;
  }
  &:hover > .content {
    opacity: 1;
    transform: translateY(-70px);
  }
`;
const Row = styled.div`
  display: flex;
  justify-content: center;
`;
const ImgBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  transform: translateY(-20px);
`;
const Ims = styled.img`
  width: 100%;
  border-radius: 10px;
`;
const Content = styled.div`
  padding: 10px 20px;
  text-align: center;
  transform: translateZ(-450px);
  opacity: 0;
  transition: 0.6s;
  z-index: 100;
  .hello {
    background-color: #3498db;
    color: #fff;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    transition: background-color 0.3s ease;
    cursor: pointer;
    z-index: 200;
    .hello:hover {
      background-color: #2980b9;
      transform: scale(1.1);
    }
  }
`;

export { Card, ImgBox, Ims, Content, Row };
