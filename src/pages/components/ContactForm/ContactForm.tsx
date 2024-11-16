import React, { useEffect, useState } from "react";
import { Contact } from "../../../types/Contact.ts";
import "./ContactForm.css";
import DefaultButton from "../../../components/DefaultButton/DefaultButton.tsx";

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
      <label htmlFor="country">Country:</label>
      <select
        id="country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
        required
      >
        <option value="">Select a country</option>
        {["Spain", "Greece", "Portugal"].map((country: string) => (
          <option key={country} value={country}>
            {country}
          </option>
        ))}
      </select>
      <label htmlFor="first-name">First Name:</label>
      <input
        type="text"
        id="first-name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
      />
      <label htmlFor="last-name">Last Name:</label>
      <input
        type="text"
        id="last-name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        required
      />
      <label htmlFor="email">Email:</label>
      <input
        type="text"
        id="email"
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
