import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
  gap: 2rem;
`;
const Tef = styled.h1`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif,
    sans-serif;
  color: #f4fcef;
  display: flex;
  justify-content: center;
`;
const Pa = styled.p`
  margin: 5px;
  margin-left: 25px;
  margin-top: 10px;
  font-family: "Gabarito", sans-serif;
`;
const Ha = styled.h6`
  margin: 3px;
  font-size: 15px;
  margin-left: 25px;
  margin-top: 10px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;
const Buttom = styled.button`
  cursor: pointer;
  padding: 5px;
  background-color: green;
  border: none;
  color: #e0f8d5;
  outline: none;
  border-radius: 5px;
  margin-left: 25px;
  margin-top: 10px;
  transition: 0.2;
  font-family: "Gabarito", sans-serif;
  &:hover {
    background-color: green;
    transform: scale(1.2);
  }
  &:active {
    transform: scale(0.8);
  }
`;
const SectionDiv = styled.div`
  width: 200px;
  height: 275px;
  border-radius: 10px;
  background-color: white;
  box-shadow: 0 5px 5px 5px rgba(13, 110, 253, 0.2);
  border: 2px solid #0096ab;
  border-radius: 3px;
`;
const Ids = styled.img`
  width: 150px;
  height: 150px;
  margin-left: 25px;
  margin-top: 10px;
`;
export { Section, SectionDiv, Ids, Pa, Ha, Buttom, Tef };
