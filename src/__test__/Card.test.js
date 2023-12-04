import React from "react";
import { render} from "@testing-library/react";
import Card from "../components/Card";
import { I18nextProvider } from "react-i18next";
import i18n from "../language/i18n";

describe("Card component", () => {
  it("renders correctly", () => {
    render(
      <I18nextProvider i18n={i18n}>
        <Card />
      </I18nextProvider>
    );
  });

  it("displays correct name", () => {
    const name = "Harry Potter";
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Card name={name} />
      </I18nextProvider>
    );
    expect(getByText(name)).toBeInTheDocument();
  });

  it("displays correct image", () => {
    const imgSrc = "path/to/logo.png";
    const { getByRole } = render(
      <I18nextProvider i18n={i18n}>
        <Card img={imgSrc} />
      </I18nextProvider>
    );
    const imageElement = getByRole("img");
    expect(imageElement).toHaveAttribute("src", imgSrc);
  });


  it("displays correct house", () => {
    const house = "gryffindor";
    const { getByText } = render(
      <I18nextProvider i18n={i18n}>
        <Card house={house} />
      </I18nextProvider>
    );
    expect(getByText(house)).toBeInTheDocument();
  });
});
