import styled from "styled-components";

const MArketDiv = styled.div`
  background-color: #4fbf34;
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
    background-color: green;
  }
`;
export { MArketDiv, H, RowDiv };
