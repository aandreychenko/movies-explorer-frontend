import React from "react";
import { Link, Route } from "react-router-dom";

export default function Header(props) {
  return (
    <footer className="footer">
      <p className="footer__text">Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <div className="footer__info">
        <p className="footer__copyright">© 2021</p>
        <div>
          <Link to="/signup" className="footer__link">Яндекс.Практикум</Link>
          <Link to="/signup" className="footer__link">Github</Link>
          <Link to="/signup" className="footer__link">Facebook</Link>
        </div>
      </div>
    </footer>
  );
}