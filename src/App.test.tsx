import { render, screen } from "@testing-library/react";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

describe("App", () => {
  it("should show title Contacts and logo with alt Gig logo", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );
    expect(screen.getByText("Contacts")).toBeInTheDocument();
    expect(screen.getAllByAltText("Gig logo")).toHaveLength(1);
  });
});
