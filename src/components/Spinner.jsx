import styled, { keyframes } from "styled-components";
import { Colors } from "../helpers/enums/colors";

const { Black } = Colors;

const spin = keyframes`
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  `;

const SpinnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: 500px;
  justify-content: center;
`;

const SpinnerContent = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const SpinnerCircle = styled.div`
  animation: ${spin} 1s linear infinite;
  border-top: 3px solid ${Black};
  border-radius: 80%;
  height: 20px;
  width: 20px;
`;

function Spinner({ text }) {
  return (
    <SpinnerContainer>
      <SpinnerContent>
        <SpinnerCircle />
        {text}
      </SpinnerContent>
    </SpinnerContainer>
  );
}

export default Spinner;
