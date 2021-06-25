import React from 'react';
import { Link, Route } from 'react-router-dom';
import registerLogoPath from '../../images/register__logo.svg'

export default function Login() {
  return (
    <div className="login">
      <div className="login__container">
        <form className=" login__form">
          <p className="login__form-label">E-mail</p>
          <input type="email" className="login__form-field" placeholder="Укажите почту" />
          <p className="login__form-label">Пароль</p>
          <input type="password" className="login__form-field" placeholder="Придумайте пароль" />
          <button type="submit" className="login__form-button">Войти</button>
        </form>
        <div className="login__info">
          <p className="login__info-text">Еще не зарегистрированы?</p>
          <Link to="/signin" className="login__info-link">Регистрация</Link>
        </div>
      </div>
    </div>
  );
}