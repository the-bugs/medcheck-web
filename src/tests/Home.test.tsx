import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/Home";

describe("Home Component", () => {
  it("should render Home with main title and subtitle on page", () => {
    render(<Home />);

    const mainTitle: HTMLElement = screen.getByLabelText(
      /Sua plataforma digital de saúde/i
    );

    const subTitle: HTMLElement = screen.getByLabelText(
      /Uma solução tecnológica para médicos e pacientes/i
    );

    expect(mainTitle).toBeInTheDocument();
    expect(subTitle).toBeInTheDocument();
  });

  it("should render doctor imagem on page", () => {
    render(<Home />);

    const image: HTMLElement = screen.getByAltText(/Imagem de médico/i);
    expect(image).toBeInTheDocument();
  });

  it("should render login and sign up buttons", () => {
    render(<Home />);

    const signUpButton: HTMLElement = screen.getByRole("button", {
      name: /Cadastre-se/i,
    });

    const loginButton: HTMLElement = screen.getByLabelText(/Entrar/i);

    expect(signUpButton).toBeVisible();
    expect(loginButton).toBeVisible();
  });
});
