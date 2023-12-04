import styled from "styled-components";

const HouseContainer = styled.p`
  border-radius: 50px;
  background-color: ${(props) => props.background || ""};
  color: ${(props) => props.color || ""};
  font-size: 12px;
  justify-content: center;
  padding: 2px 8px;
  width: 45px;
`;

function InputHouse({ text, background, color }) {
  return (
    <HouseContainer background={background} color={color}>
      {text}
    </HouseContainer>
  );
}

export default InputHouse;
