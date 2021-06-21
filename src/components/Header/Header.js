import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import logoPath from "../../images/logo.svg";
import logoMoviesPath from "../../images/logo_movies.svg";

export default function Header() {
  return (
      <Switch>
        <Route exact path="/">
          <header className="header header_theme_dark">
            <img className="header__logo" src={logoPath} alt="Логотип 'Мувис Эксплорера'" />
            <div className="header__container">
              <Link to="/signup" 
              className="header__info header__info-link header__info-link_theme_dark">Регистрация</Link>
              <Link to="/signin" className="header__info header__info-button_theme_dark">Войти</Link>
            </div>
          </header>
        </Route>
        <Route path="/movies">
          <header className="header header_theme_light">
            <img className="header__logo" src={logoMoviesPath} alt="Логотип 'Мувис Эксплорера'" />
            <div className="header__container">
              <Link to="/signup" 
              className="header__info header__info_type_link header__info-link_theme_light">Фильмы</Link>
              <Link to="/signup" 
              className="header__info header__info-link_theme_light header__info-link_theme_light">Сохранённые фильмы</Link>
              <Link to="/signup" 
              className="header__info header__info-link_theme_light header__info-link_theme_light">Аккаунт</Link>
            </div>
          </header>
        </Route>
      </Switch>
  );
}