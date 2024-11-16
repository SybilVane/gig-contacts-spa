import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import ContactViewer from "./pages/ContactViewer/ContactViewer.tsx";
import ContactManager from "./pages/ContactManager/ContactManager.tsx";
import { Contact } from "./types/Contact.ts";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>([]);

  return (
    <div className="app">
      <article className="app__container">
        <header className="app__header">
          <img src={logo} alt="Gig Contacts" className="app__header-img" />
          <h1 className="app__header-title">Contacts</h1>
          <nav className="app__navigation">
            <Link to="/manager">Manage Contacts</Link>
            <Link to="/">View Contacts</Link>
          </nav>
        </header>
        <Routes>
          <Route path="/" element={<ContactViewer contacts={contacts} />} />
          <Route
            path="/manager"
            element={
              <ContactManager contacts={contacts} setContacts={setContacts} />
            }
          />
        </Routes>
      </article>
    </div>
  );
};

export default App;
