import React from "react";
import "./ContactManager.css";

const ContactManager: React.FC = () => {
  return (
    <div className="contact-manager">
      <div className="contact-manager__header">
        <h1 className="contact-manager__title">Contact Manager</h1>
      </div>
      <p>No contacts to display. Add a new contact now.</p>
    </div>
  );
};

export default ContactManager;
