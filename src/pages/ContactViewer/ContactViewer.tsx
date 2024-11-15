import React from "react";
import "./ContactViewer.css";

const ContactViewer: React.FC = () => {
  return (
    <div className="contact-viewer">
      <h1 className="contact-viewer__title">Contact Viewer</h1>
      <p>
        No contacts to display. You can add a new contact using the contact
        manager.
      </p>
    </div>
  );
};

export default ContactViewer;
