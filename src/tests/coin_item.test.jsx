import { describe, it, expect } from "vitest";
import { render, screen, renderer, fireEvent } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import CoinItem from "../components/coin_item";
import { BrowserRouter } from "react-router-dom";

const mockContextValue = {
  basename: "basename",
};

describe("Component: CoinItem", () => {
  it("renders the component without props", () => {
    const id = "bitcoin";
    render(
      <BrowserRouter>
        <CoinItem />
      </BrowserRouter>
    );
  });

  it("renders the component with props", () => {
    render(
      <BrowserRouter>
        <CoinItem id="bitcoin" />
      </BrowserRouter>
    );
  });

  it("renders the component with illegal props", () => {
    render(
      <BrowserRouter>
        <CoinItem id="hola" />
      </BrowserRouter>
    );
  });

  it("favorites the component", () => {
    const component = render(
      <BrowserRouter>
        <CoinItem id="bitcoin" />
      </BrowserRouter>
    )
    
    // check before being favorited
    expect(screen.getByTestId("btn-coinItem-FavoriteTest").classList.contains("svg_add_favorite")).true;
    expect(screen.getByTestId("btn-coinItem-FavoriteTest").classList.contains("svg_favorite")).false;

    // favorite the component
    fireEvent.click(screen.getByTestId("btn-coinItem-FavoriteTest"));

    // check after favoriting
    expect(screen.getByTestId("btn-coinItem-FavoriteTest").classList.contains("svg_add_favorite")).false;
    expect(screen.getByTestId("btn-coinItem-FavoriteTest").classList.contains("svg_favorite")).true;
  
  });
});
