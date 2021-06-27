import React from "react";
import { Link, Route, Switch } from "react-router-dom";

export default function Header(props) {
  return (
    <Switch>
      <Route exact path="/">
        <footer className="footer">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__copyright">© 2021</p>
            <div className="footer__links">
              <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
              <a href="https://github.com/aandreychenko" className="footer__link">Github</a>
              <a href="https://www.facebook.com/alexander.andreychenko" className="footer__link">Facebook</a>
            </div>
          </div>
        </footer>
      </Route>
      <Route exact path="/movies">
        <footer className="footer footer_bg-color_gray">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__copyright">© 2021</p>
            <div className="footer__links">
              <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
              <a href="https://github.com/aandreychenko" className="footer__link">Github</a>
              <a href="https://www.facebook.com/alexander.andreychenko" className="footer__link">Facebook</a>
            </div>
          </div>
        </footer>
      </Route>
      <Route exact path="/saved-movies">
        <footer className="footer footer_bg-color_gray">
          <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
          <div className="footer__info">
            <p className="footer__copyright">© 2021</p>
            <div className="footer__links">
              <a href="https://praktikum.yandex.ru" className="footer__link">Яндекс.Практикум</a>
              <a href="https://github.com/aandreychenko" className="footer__link">Github</a>
              <a href="https://www.facebook.com/alexander.andreychenko" className="footer__link">Facebook</a>
            </div>
          </div>
        </footer>
      </Route>
    </Switch>
  );
}