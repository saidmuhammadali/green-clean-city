import styled from "styled-components";

const KottaDiv = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 122px;
`;
const BirinchCarta = styled.div`
  border: 1px solid white;
  width: 205px;
  height: 300px;
  background-color: white;
  border-radius: 3px;
  transition: background-color 0.4s, transform 0.4s, box-shadow 0.4s;
  &:hover {
    background-color: #e0f8d5;
    transform: scale(1.05);
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
    border: 2px solid green;
  }
`;
const Row = styled.div`
  border-radius: 10px;
`;
const Rasm = styled.img`
  width: 201px;
  height: 140px;
  border-radius: 3px;
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
