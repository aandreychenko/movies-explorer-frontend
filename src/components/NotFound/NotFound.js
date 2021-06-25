import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found">
      <div className="not-found__container">
        <h1 className="not-found__heading">404</h1>
        <p className="not-found__paragraph">Страница не найдена</p>
        <Link to="/" className="not-found__link">Назад</Link>
      </div>
    </div>
  );
}