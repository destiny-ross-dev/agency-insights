import { render, screen } from "@testing-library/react";
import Home from "./page";

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /know which agents are driving premium/i,
      })
    ).toBeInTheDocument();
  });

  it("includes revenue, performance, and coaching sections", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /premium you can defend/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /know who is growing the book/i,
      })
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: /coaching that respects the craft/i,
      })
    ).toBeInTheDocument();
  });
});
