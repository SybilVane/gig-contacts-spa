import React, { useState } from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import { Link, Route, Routes } from "react-router-dom";
import ContactViewer from "./pages/ContactViewer/ContactViewer.tsx";
import ContactManager from "./pages/ContactManager/ContactManager.tsx";
import { Contact } from "./types/Contact.ts";
import { loadItemFromLocalStorage } from "./utils/storage.ts";
import { CONTACTS_STORAGE_KEY } from "./utils/constants.ts";

const App: React.FC = () => {
  const [contacts, setContacts] = useState<Contact[]>(
    loadItemFromLocalStorage(CONTACTS_STORAGE_KEY) || [],
  );

  return (
    <div className="app">
      <article className="app__container">
        <header className="app__header">
          <img src={logo} alt="Gig logo" className="app__header-img" />
          <title className="app__header-title">Contacts</title>
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
