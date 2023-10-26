import styled from "styled-components";

const MArketDiv = styled.div`
  background-color: #0096ab;
  overflow: hidden;
  margin-top: 20px;
  border-radius: 10px;
`;
const RowDiv = styled.div`
  display: flex;
  justify-content: center;
`;
const H = styled.a`
  font-family: "Anton", sans-serif;
  float: left;
  display: block;
  color: white;
  text-align: center;
  padding: 10px 16px;
  text-decoration: none;
  transition: background-color 0.3s;
  &:hover {
    background-color: #004d72;
  }
`;
const Roww = styled.div`
  display: flex;
  justify-content: center;
`;
const Da = styled.img`
  width: 247px;
  height: 247px;
`;
const Bg = styled.div`
  height: 30px;
  width: auto;
  background-color: white;
`;
const Icons = styled.div`
  display: flex;
  justify-content: end;
  margin-right: 70px;
  gap: 1rem;
`;
const H5 = styled.h6`
  margin-top: -20px;
  margin-left: 70px;
`;
const DivInput = styled.div`
  display: flex;
  justify-content: center;
  margin-top: -25px;
  gap: 1rem;
`;
const Input = styled.input`
  height: 20px;
`;
const Butt = styled.button`
  height: 20px;
  width: 40px;
  font-size: 10px;
  border: none;
  background-color: blue;
  color: white;
  border-radius: 5px;
`;
export { MArketDiv, H, RowDiv, Roww, Da, Bg, Input, Butt, DivInput, H5, Icons };
