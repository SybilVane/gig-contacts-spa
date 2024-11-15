import React from "react";
import "./App.css";
import logo from "./assets/logo.svg";

const App: React.FC = () => {
  return (
    <div className="app">
      <article className="app__container">
        <header className="app__header">
          <img src={logo} alt="Gig Contacts" className="app__header-img" />
          <h1 className="app__header-title">Contacts</h1>
        </header>
      </article>
    </div>
  );
};

export default App;
