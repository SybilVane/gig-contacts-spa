import React from "react";
import "./ContactViewer.css";
import { Contact } from "../../types/Contact.ts";
import ContactItem from "../../components/ContactItem/ContactItem.tsx";

interface ContactViewerProps {
  contacts: Contact[];
}

const ContactViewer: React.FC<ContactViewerProps> = ({ contacts }) => {
  return (
    <div className="contact-viewer">
      <h1 className="contact-viewer__title">Contact Viewer</h1>
      {!contacts.length ? (
        <p>
          No contacts to display. You can add a new contact using the contact
          manager.
        </p>
      ) : (
        <ul>
          {contacts.map((contact) => (
            <ContactItem contact={contact} key={contact.id} />
          ))}
        </ul>
      )}
    </div>
  );
};

export default ContactViewer;
