import styled from "styled-components";

const Nav = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: -45px;
  margin-left: 0px;
`;
const ImgDiv = styled.div``;
const Img = styled.img`
  width: 100px;
  height: 60px;
  margin-left: 50px;
  margin-top: 20px;
`;
const A = styled.a`
  position: relative;
  color: #0096ab;
  font-family: "Anton", sans-serif;
  text-decoration: none;
  padding: 0 10px;
  &::after {
    content: "";
    position: absolute;
    background-color: #0083c1;
    height: 3px;
    border-radius: 50px;
    width: 0;
    left: 0;
    bottom: -10px;
    margin-top: -5px;
    transition: 0.3s;
  }
  &:hover::after {
    width: 100%;
  }
`;
const ButtonDiv = styled.div`
  margin-top: -30px;
  margin-right: 70px;
  display: flex;
  justify-content: end;
`;

export { Nav, ImgDiv, Img, A, ButtonDiv };
