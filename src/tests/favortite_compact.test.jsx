import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";

import FavoritesCompact from "../components/header/favoriteCompact";
import { BrowserRouter } from "react-router-dom";

const mockContextValue = {
  basename: "basename",
};

describe("Component: FavoritesCompact", () => {
  it("renders the component without props", () => {
    const id = "bitcoin";
    render(
      <BrowserRouter>
        <FavoritesCompact />
      </BrowserRouter>
    );
  });
});
