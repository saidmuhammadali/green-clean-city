import styled from "styled-components";
import { Link } from "react-router-dom";

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
  color: white;
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
const StyledLink = styled(Link)`
  text-decoration: none;
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
export { Nav, ImgDiv, Img, A, ButtonDiv, StyledLink };
