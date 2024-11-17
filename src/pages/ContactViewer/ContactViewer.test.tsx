import { render, screen } from "@testing-library/react";
import ContactViewer from "./ContactViewer.tsx";
import { Contact } from "../../types/Contact.ts";
import { expect, it, vi } from "vitest";

const mockContacts: Contact[] = [
  {
    id: "1",
    firstName: "mock_name",
    lastName: "mock_last_name",
    email: "mock_email@mock.com",
    country: "mock_country",
  },
];

describe("ContactViewer", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("renders without contacts", () => {
    render(<ContactViewer contacts={[]} />);
    expect(
      screen.getByText(
        "No contacts to display. You can add a new contact using the contact manager.",
      ),
    ).toBeInTheDocument();
  });

  it("renders with contacts", () => {
    render(<ContactViewer contacts={mockContacts} />);

    expect(
      screen.getByText(
        "mock_name mock_last_name (mock_country) - mock_email@mock.com",
      ),
    ).toBeInTheDocument();
  });
});
