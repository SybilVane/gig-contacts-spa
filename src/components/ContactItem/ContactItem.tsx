import React from "react";
import { Contact } from "../../types/Contact.ts";
import "./ContactItem.css";

interface ContactItemProps {
  contact: Contact;
  children?: React.ReactNode;
}

const ContactItem: React.FC<ContactItemProps> = ({ contact, children }) => {
  return (
    <li className="contact-item" key={contact.id}>
      <div className="contact-item__name">
        {contact.firstName} {contact.lastName} ({contact.country}) -{" "}
        {contact.email}
      </div>
      {children && <div className="contact-item__children">{children}</div>}
    </li>
  );
};

export default ContactItem;
