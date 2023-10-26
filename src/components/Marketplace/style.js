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

export { MArketDiv, H, RowDiv, Roww, Da };
