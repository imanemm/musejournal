import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, beforeEach } from "vitest";
import { StyleguidePage } from "./StyleguidePage";

describe("StyleguidePage", () => {
  beforeEach(() => {
    document.documentElement.classList.remove("dark");
    localStorage.clear();
  });

  it("renders the styleguide page", () => {
    render(<StyleguidePage />);
    expect(screen.getByText("Style guide")).toBeInTheDocument();
  });

  it("toggles theme when the button is clicked", async () => {
    render(<StyleguidePage />);
    const button = screen.getByRole("button", { name: /Switch to dark mode/i });
    await userEvent.click(button);
    expect(document.documentElement.classList.contains("dark")).toBe(true);
    expect(localStorage.getItem("theme")).toBe("dark");
  });
});
