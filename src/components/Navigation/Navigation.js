import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <div className="navigation">
      <button type="button" className="navigation__close-button"></button>
      <nav className="navigation__container">
        <ul className="navigation__links">
          <li className="navigation__item"><Link to="/" className="navigation__link">Главная</Link></li>
          <li className="navigation__item"><Link to="/movies" className="navigation__link navigation__link_active">Фильмы</Link></li>
          <li className="navigation__item"><Link to="/saved-movies" className="navigation__link">Сохранённые фильмы</Link></li>
        </ul>
      </nav>
      <div className="navigation__account">
        <Link to="/profile"
        className="navigation__account-name">Аккаунт</Link>
        <div className="navigation__account-logo"></div>
      </div>
    </div>
  );
}