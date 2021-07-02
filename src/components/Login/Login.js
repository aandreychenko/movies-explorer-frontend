import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <main className="login">
      <div className="login__container">
        <form className=" login__form">
          <div className="login__form-container">
            <p className="login__form-label">E-mail</p>
            <input type="email" className="login__form-field" placeholder="Укажите почту" />
          </div>
          <div className="login__form-container">
            <p className="login__form-label">Пароль</p>
            <input type="password" className="login__form-field" placeholder="Придумайте пароль" />
            <p className="login__form-error login__form-error_visible">Что-то пошло не так...</p>
          </div>
          <button type="submit" className="login__form-button">Войти</button>
        </form>
        <div className="login__info">
          <p className="login__info-text">Еще не зарегистрированы?</p>
          <Link to="/signup" className="login__info-link">Регистрация</Link>
        </div>
      </div>
    </main>
  );
}