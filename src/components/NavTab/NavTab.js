import React from "react";
import { Link } from "react-router-dom";

export default function NavTab(props) {
  return (
    <nav className="navtab">
      <div>
        <Link to="#about" className="navtab__link">О проекте</Link>
        <Link to="#about" className="navtab__link">Технологии</Link>
        <Link to="#about" className="navtab__link">Студент</Link>
      </div>
    </nav>
  );
}