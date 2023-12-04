import React, { useState } from "react";
import i18n from "../language/i18n.js";
import styled from "styled-components";
import { Colors } from "../helpers/enums/colors.js";

const { Black, Grey } = Colors;

const Button = styled.button`
  border: none;
  background-color: ${({ lang, active }) =>
    lang === active ? Grey : Black };
  color: white;
  cursor: pointer;
  font-weight: ${({ lang, active }) => (lang === active ? "bold" : "")};
  margin: 0px 4px;
  padding: 4px 4px;
  `;

function Language() {
  const [activeLang, setActiveLang] = useState("es");
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setActiveLang(language);
  };

  return (
    <div>
      <Button
        lang="en"
        active={activeLang}
        onClick={() => changeLanguage("en")}
      >
        EN
      </Button>
      <Button
        lang="es"
        active={activeLang}
        onClick={() => changeLanguage("es")}
      >
        ES
      </Button>
    </div>
  );
}

export default Language;
