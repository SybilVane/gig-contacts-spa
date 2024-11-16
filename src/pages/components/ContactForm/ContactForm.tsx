import React, { useEffect, useState } from "react";
import { Contact } from "../../../types/Contact.ts";
import { getCode, getNames } from "country-list";
import ContactFormField from "./components/ContactFormField/ContactFormField.tsx";
import DefaultButton from "../../../components/DefaultButton/DefaultButton.tsx";
import "./ContactForm.css";

interface ContactFormProps {
  contact: Contact;
  onSave: (contact: Contact) => void;
  onCancel: () => void;
}

const ContactForm: React.FC<ContactFormProps> = ({
  contact,
  onSave,
  onCancel,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");

  const countryList = getNames();
  const orderedList = countryList.sort((a: string, b: string) =>
    a.localeCompare(b),
  );
  const countryOptions = orderedList.map(
    (countryName: string): { label: string; value: string } => ({
      value: getCode(countryName) || "",
      label: countryName,
    }),
  );

  useEffect(() => {
    setFirstName(contact.firstName);
    setLastName(contact.lastName);
    setEmail(contact.email);
    setCountry(contact.country);
  }, [contact]);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const contactToBeSubmitted: Contact = {
      id: contact?.id ? contact.id : Date.now().toString(),
      firstName,
      lastName,
      email,
      country,
    };
    onSave(contactToBeSubmitted);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <ContactFormField
        label="Country"
        id="country"
        type="select"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
        options={countryOptions}
      />
      <ContactFormField
        label="First Name"
        id="first-name"
        type="input"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <ContactFormField
        label="Last Name"
        id="last-name"
        type="input"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <ContactFormField
        label="Email"
        id="email"
        type="input"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <div className="contact-form__actions">
        <DefaultButton type="submit">Save</DefaultButton>
        <DefaultButton type="button" onClick={onCancel}>
          Cancel
        </DefaultButton>
      </div>
    </form>
  );
};

export default ContactForm;
