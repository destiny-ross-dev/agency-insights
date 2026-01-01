import type { ComponentProps } from "react";
import { render, screen } from "@testing-library/react";
import Home from "./page";

vi.mock("next/image", () => ({
  default: (props: ComponentProps<"img">) => <img {...props} />,
}));

describe("Home page", () => {
  it("renders the main heading", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", {
        name: /to get started, edit the page\.tsx file\./i,
      })
    ).toBeInTheDocument();
  });

  it("links to Next.js learning resources", () => {
    render(<Home />);
    expect(screen.getByRole("link", { name: /templates/i })).toHaveAttribute(
      "href",
      expect.stringContaining("vercel.com/templates")
    );
    expect(screen.getByRole("link", { name: /learning/i })).toHaveAttribute(
      "href",
      expect.stringContaining("nextjs.org/learn")
    );
  });
});
