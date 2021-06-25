import React from "react";
import { Route, Switch, Link } from "react-router-dom";
import logoPath from "../../images/header__logo.svg";

export default function Header() {
  return (
      <Switch>
        <Route exact path="/">
          <header className="header">
            <div className="header__container">
              <img className="header__logo" src={logoPath} alt="Логотип 'Мувис Эксплорера'" />
              <div>
                <Link to="/signup" 
                className="header__authentification-item header__link">Регистрация</Link>
                <Link to="/signin" className="header__authentification-item header__button">Войти</Link>
              </div>
            </div>
          </header>
        </Route>
        <Route path="/movies">
          <header className="header header_bg-color_gray">
            <div className="header__container">
              <img className="header__logo" src={logoPath} alt="Логотип 'Мувис Эксплорера'" />
              <div className="header__nav">
                <Link to="/movies"
                className="header__nav-item header__nav-item_active">Фильмы</Link>
                <Link to="/saved-movies"
                className="header__nav-item">Сохранённые фильмы</Link>
              </div>
              <div className="header__account">
                <Link to="/profile"
                className="header__account-name">Аккаунт</Link>
                <div className="header__account-logo"></div>
              </div>
            </div>
          </header>
        </Route>
        <Route path="/saved-movies">
          <header className="header header_bg-color_gray">
            <div className="header__container">
              <img className="header__logo" src={logoPath} alt="Логотип 'Мувис Эксплорера'" />
              <div className="header__nav">
                <Link to="/movies"
                className="header__nav-item header__nav-item_active">Фильмы</Link>
                <Link to="/saved-movies"
                className="header__nav-item">Сохранённые фильмы</Link>
              </div>
              <div className="header__account">
                <Link to="/profile"
                className="header__account-name">Аккаунт</Link>
                <div className="header__account-logo"></div>
              </div>
            </div>
          </header>
        </Route>
        <Route path="/profile">
          <header className="header">
            <div className="header__container">
              <img className="header__logo" src={logoPath} alt="Логотип 'Мувис Эксплорера'" />
              <div className="header__nav">
                <Link to="/movies"
                className="header__nav-item header__nav-item_active">Фильмы</Link>
                <Link to="/saved-movies"
                className="header__nav-item">Сохранённые фильмы</Link>
              </div>
              <div className="header__account">
                <Link to="/profile"
                className="header__account-name">Аккаунт</Link>
                <div className="header__account-logo"></div>
              </div>
            </div>
          </header>
        </Route>
        <Route path="/signup">
          <header className="header">
            <div className="header__container header__container_page_register">
              <img className="header__logo" src={logoPath} />
              <h1 className="header__heading">Добро пожаловать!</h1>
            </div>
          </header>
        </Route>
        <Route path="/signin">
          <header className="header">
            <div className="header__container header__container_page_register">
              <img className="header__logo" src={logoPath} />
              <h1 className="header__heading">Рады видеть!</h1>
            </div>
          </header>
        </Route>
      </Switch>
  );
}