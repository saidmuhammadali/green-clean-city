import styled from "styled-components";

const KottaDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 30px;
`;
const BirinchCarta = styled.div`
  border: 2px solid black;
  width: 205px;
  height: 300px;
  background-color: white;
  border-radius: 10px;
`;
const Row = styled.div`
  border: 1px solid white;
  border-radius: 10px;
`;
const Rasm = styled.img`
  width: 200px;
  height: 140px;
  border-radius: 10px;
`;
const But = styled.button`
  border: none;
  background-color: blue;
  padding: 5px 5px;
  color: white;
  border-radius: 5px;
  transition: 0.2s;
  &:hover {
    box-shadow: 0 0 0 2px #fff, 0 0 0 4px blue;
  }
`;
export { KottaDiv, BirinchCarta, Row, Rasm, But };
