import styled from "styled-components";
import logo from "../images/logo.png";
import Language from "./Language";
import { Colors } from "../helpers/enums/colors";

const { Black, White } = Colors;

const LogoContainer = styled.div`
  align-items: center;
  display: flex;
`;

const Logo = styled.img`
  margin: 0px 10px;
  width: 55px;
`;

const ToolbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: ${Black};
  color: ${White}
`;

const Toolbar = ({ title }) => {
  return (
    <ToolbarContainer>
      <LogoContainer>
        <Logo src={logo} alt="logo"></Logo>
        {title}
      </LogoContainer>
      <Language />
    </ToolbarContainer>
  );
};

export default Toolbar;
