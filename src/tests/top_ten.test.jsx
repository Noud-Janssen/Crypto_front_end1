import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import Top_Ten from "../components/top_ten";
import { BrowserRouter } from "react-router-dom";

const mockContextValue = {
  basename: "basename",
};

describe("Component: top_ten", () => {
  it("renders the component without props", () => {
    render(
      <BrowserRouter>
        <top_ten />
      </BrowserRouter>
    );

  });
  it('Button select by price', () => {
    
    render(
      <BrowserRouter>
        <Top_Ten />
      </BrowserRouter>
    )

    screen.debug();

    userEvent.click(screen.getByTestId("top_ten_market_cap"))
  });
});
