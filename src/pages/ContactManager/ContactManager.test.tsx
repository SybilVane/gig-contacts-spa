import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ContactManager from "./ContactManager";
import { CONTACTS_STORAGE_KEY } from "../../utils/constants.ts";
import { saveItemInLocalStorage } from "../../utils/storage";
import { Contact } from "../../types/Contact";

vi.mock("../../utils/storage");

const mockContacts: Contact[] = [
  {
    id: "1",
    firstName: "mock_name",
    lastName: "mock_last_name",
    email: "mock_email@mock.com",
    country: "mock_country",
  },
];

describe("ContactManager", () => {
  it("renders without contacts", () => {
    render(<ContactManager contacts={[]} setContacts={vi.fn()} />);
    expect(
      screen.getByText("No contacts to display. Add one now."),
    ).toBeInTheDocument();
  });

  it("renders with contacts", () => {
    render(<ContactManager contacts={mockContacts} setContacts={vi.fn()} />);
    expect(
      screen.getByText(
        "mock_name mock_last_name (mock_country) - mock_email@mock.com",
      ),
    ).toBeInTheDocument();
  });

  it("should add a contact and store it in local storage", async () => {
    const setContacts = vi.fn();
    const mockDateNow = 1731794703992;
    vi.spyOn(Date, "now").mockImplementation(() => mockDateNow);
    const mockContacts = [
      {
        country: "Spain",
        email: "vanessa@mail.com",
        firstName: "Vanessa",
        id: mockDateNow.toString(),
        lastName: "Zagone",
      },
    ];

    render(<ContactManager contacts={[]} setContacts={setContacts} />);
    await userEvent.click(screen.getByText("Add contact"));
    await userEvent.selectOptions(screen.getByLabelText("Country:"), "Spain");
    await userEvent.type(screen.getByLabelText("First Name:"), "Vanessa");
    await userEvent.type(screen.getByLabelText("Last Name:"), "Zagone");
    await userEvent.type(screen.getByLabelText("Email:"), "vanessa@mail.com");
    await userEvent.click(screen.getByText("Save"));
    expect(setContacts).toHaveBeenCalledWith(mockContacts);
    expect(saveItemInLocalStorage).toHaveBeenCalledWith(
      CONTACTS_STORAGE_KEY,
      mockContacts,
    );
  });

  it("should edit an existing contact", async () => {
    const setContacts = vi.fn();
    const mockDateNow = 1731794703992;
    vi.spyOn(Date, "now").mockImplementation(() => mockDateNow);

    render(
      <ContactManager contacts={mockContacts} setContacts={setContacts} />,
    );
    await userEvent.click(screen.getByText("Edit"));
    await userEvent.selectOptions(screen.getByLabelText("Country:"), "Italy");
    await userEvent.clear(screen.getByLabelText("First Name:"));
    await userEvent.type(screen.getByLabelText("First Name:"), "Maria");
    await userEvent.clear(screen.getByLabelText("Last Name:"));
    await userEvent.type(screen.getByLabelText("Last Name:"), "Rossi");
    await userEvent.clear(screen.getByLabelText("Email:"));
    await userEvent.type(
      screen.getByLabelText("Email:"),
      "mariarossi@mail.com",
    );
    await userEvent.click(screen.getByText("Save"));
    expect(setContacts).toHaveBeenCalledWith([
      {
        id: "1",
        firstName: "Maria",
        lastName: "Rossi",
        email: "mariarossi@mail.com",
        country: "Italy",
      },
    ]);

    vi.restoreAllMocks();
  });

  it("deletes a contact", async () => {
    const setContacts = vi.fn();
    const mockDateNow = 1731794703992;
    vi.spyOn(Date, "now").mockImplementation(() => mockDateNow);

    render(
      <ContactManager contacts={mockContacts} setContacts={setContacts} />,
    );
    await userEvent.click(screen.getByText("Delete"));
    expect(setContacts).toHaveBeenCalledWith([]);

    vi.restoreAllMocks();
  });

  it("cancels editing a contact", async () => {
    const setContacts = vi.fn();
    render(
      <ContactManager contacts={mockContacts} setContacts={setContacts} />,
    );
    await userEvent.click(screen.getByText("Edit"));
    await userEvent.click(screen.getByText("Cancel"));
    expect(screen.queryByLabelText("First Name")).not.toBeInTheDocument();
  });
});
