import React from "react";

export default function NavTab(props) {
  return (
    <nav className="navtab">
      <div className="navtab__container">
        <a href="#about-project" className="navtab__link">О проекте</a>
        <a href="#techs" className="navtab__link">Технологии</a>
        <a href="#about-me" className="navtab__link">Студент</a>
      </div>
    </nav>
  );
}