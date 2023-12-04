import styled from "styled-components";

const LabelText = styled.label`
  font-size: 12px;
`;

function Label({ text }) {
  return <LabelText>{text}</LabelText>;
}

export default Label;
