import styled from "styled-components";
const Row = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin-top: 48px;
`;
const IMg = styled.img`
  background-color: white;
  width: 180px;
  height: 150px;
  border-radius: 5px;
`;
const H1 = styled.h5`
  text-align: center;
  color: black;
`;
const D = styled.h5`
  text-align: center;
  color: black;
  margin-top: -10px;
`;
const P = styled.p`
  text-align: center;
  color: black;
`;
const Btn = styled.button`
  border: none;
  padding: 5px 15px;
  margin-left: 34px;
  border-radius: 5px;
  background-color: blue;
  color: white;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px blue;
  }
`;
export { IMg, H1, Row, Btn, P, D };
