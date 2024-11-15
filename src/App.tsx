import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ContactViewer from "./pages/ContactViewer/ContactViewer.tsx";
import ContactManager from "./pages/ContactManager/ContactManager.tsx";

const App: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ContactViewer />,
    },
    {
      path: "/manager",
      element: <ContactManager />,
    },
  ]);

  return (
    <div className="app">
      <article className="app__container">
        <header className="app__header">
          <img src={logo} alt="Gig Contacts" className="app__header-img" />
          <h1 className="app__header-title">Contacts</h1>
          <nav className="app__navigation">
            <a href="/manager">Manage Contacts</a>
            <a href="/">View Contacts</a>
          </nav>
        </header>
        <RouterProvider router={router} />
      </article>
    </div>
  );
};

export default App;
