import React, { useState } from "react";
import "./ContactManager.css";
import { Contact } from "../../types/Contact.ts";
import ContactForm from "../components/ContactForm/ContactForm.tsx";
import DefaultButton from "../../components/DefaultButton/DefaultButton.tsx";

interface ContactManagerProps {
  contacts: Contact[];
  setContacts: React.Dispatch<React.SetStateAction<Contact[]>>;
}

const ContactManager: React.FC<ContactManagerProps> = ({
  contacts,
  setContacts,
}) => {
  const [editingContact, setEditingContact] = useState<Contact | null>(null);

  const handleAddContact = (): void => {
    setEditingContact({
      id: "",
      firstName: "",
      lastName: "",
      email: "",
      country: "",
    });
  };

  const handleSaveContact = (contact: Contact): void => {
    const updatedContacts = contacts.some((el) => el.id === contact.id)
      ? contacts.map((el) => (el.id === contact.id ? contact : el))
      : [...contacts, contact];
    setContacts(updatedContacts);
    setEditingContact(null);
  };

  const handleEditContact = (id: string): void => {
    const contact = contacts.find((el) => el.id === id);
    if (contact) setEditingContact(contact);
  };

  const handleDeleteContact = (id: string): void => {
    const updatedContacts = contacts.filter((el) => el.id !== id);
    setContacts(updatedContacts);
  };

  const handleCancel = (): void => {
    setEditingContact(null);
  };

  return (
    <div className="contact-manager">
      <div className="contact-manager__header">
        <h1 className="contact-manager__title">Contact Manager</h1>
        <DefaultButton onClick={handleAddContact}>Add contact</DefaultButton>
      </div>
      {editingContact ? (
        <ContactForm
          contact={editingContact}
          onSave={handleSaveContact}
          onCancel={handleCancel}
        />
      ) : (
        <div>
          {!contacts.length ? (
            <p>No contacts to display. Add one now.</p>
          ) : (
            <ul>
              {contacts.map((contact) => (
                <li key={contact.id}>
                  {contact.firstName} {contact.lastName} ({contact.country}){" "}
                  {contact.email}
                  <DefaultButton onClick={() => handleEditContact(contact.id)}>
                    Edit
                  </DefaultButton>
                  <DefaultButton
                    onClick={() => handleDeleteContact(contact.id)}
                  >
                    Delete
                  </DefaultButton>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
};

export default ContactManager;