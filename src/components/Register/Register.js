import React from 'react';
import { Link, Route } from 'react-router-dom';
import registerLogoPath from '../../images/register__logo.svg'

export default function Register() {
  return (
    <div className="register">
      <div className="register__container">
        <img className="register__logo" src={registerLogoPath} />
        <h1 className="register__heading">Добро пожаловать!</h1>
        <form className=" register__form">
          <p className="register__form-label">Имя</p>
          <input className="register__form-field" placeholder="Введите имя" />
          <p className="register__form-label">E-mail</p>
          <input type="email" className="register__form-field" placeholder="Укажите почту" />
          <p className="register__form-label">Пароль</p>
          <input type="password" className="register__form-field" placeholder="Придумайте пароль" />
          <button type="submit" className="register__form-button">Зарегистрироваться</button>
        </form>
        <div className="register__info">
          <p className="register__info-text">Уже зарегистрированы?</p>
          <Link to="/signin" className="register__info-link">Войти</Link>
        </div>
      </div>
    </div>
  );
}