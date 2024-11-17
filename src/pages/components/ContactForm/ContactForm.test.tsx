import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ContactForm from "./ContactForm";
import { Contact } from "../../../types/Contact";
import { vi } from "vitest";

const mockContact: Contact = {
  id: "",
  firstName: "",
  lastName: "",
  email: "",
  country: "",
};

describe("ContactForm", () => {
  const onSave = vi.fn();
  const onCancel = vi.fn();

  it("displays validation errors when form is submitted with invalid data", async () => {
    render(
      <ContactForm contact={mockContact} onSave={onSave} onCancel={onCancel} />,
    );

    await userEvent.selectOptions(screen.getByLabelText("Country:"), "Spain");
    await userEvent.type(screen.getByLabelText("First Name:"), "a");
    await userEvent.type(screen.getByLabelText("Last Name:"), "a");
    await userEvent.type(screen.getByLabelText("Email:"), "a");
    await userEvent.click(screen.getByText("Save"));

    expect(
      screen.getByText(
        "First name must be at least 2 characters long and contain only letters.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Last name must be at least 2 characters long and contain only letters.",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("Email is not valid.")).toBeInTheDocument();
    expect(onSave).not.toHaveBeenCalled();
  });
});
