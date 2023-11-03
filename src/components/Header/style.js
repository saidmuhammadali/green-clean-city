import styled from "styled-components";

const HeaderDiv = styled.div`
  margin-top: -15px;
  margin-right: 80px;
`;
const HeaderImg = styled.div`
  display: flex;
  justify-content: end;
  margin-top: -175px;
  margin-right: 60px;
`;
const Bgn = styled.button`
  text-decoration: none;
  margin-left: 123px;
  color: white;
  font-family: Anton;
  background-color: #4fbf34;
  padding: 5px 15px;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 10px;
  background: linear-gradient(to right, white 50%, lightgreen 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 0.5s ease-out;
  &:hover {
    color: black;
    border: 2px solid black;
    background-position: left bottom;
  }
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

export { HeaderDiv, HeaderImg, Img, Csa, Bgn };
