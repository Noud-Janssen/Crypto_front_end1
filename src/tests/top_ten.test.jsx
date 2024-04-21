import { describe, it, expect } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
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
  it('Button select by market cap', () => {
    
    render(
      <BrowserRouter>
        <Top_Ten />
      </BrowserRouter>
    )

    const button = screen.getByTestId("top_ten_market_cap");

    fireEvent.click(button);

    expect(screen.getByTestId("test_result_select").classList.contains("cap")).true;
  });
});
