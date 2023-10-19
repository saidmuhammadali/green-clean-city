import styled from "styled-components";

const HeaderDiv = styled.div`
  margin-top: 20px;
  margin-right: 80px;
`;
const HeaderImg = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -175px;
  margin-right: 60px;
`;
const Csa = styled.div``;
const Img = styled.img`
  width: 230px;
  height: 230px;
  background-color: white;
  box-shadow: 0 5px 5px 5px rgba(13, 110, 253, 0.2);
  animation: animate 5s ease-in-out infinite;
  transition: all 1s ease-in-out;
  @keyframes animate {
    0%,
    100% {
      border-radius: 60% 40% 30% 70%/60% 30% 70% 40%;
    }
    50% {
      border-radius: 30% 60% 70% 40%/50% 60% 30% 60%;
    }
  }
`;
export { HeaderDiv, HeaderImg, Img, Csa };
