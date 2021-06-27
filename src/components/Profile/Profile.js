import React from 'react';

export default function Profile() {
  return (
    <main className="profile profile_bg-color_gray">
      <div className="profile__container">
        <h1 className="profile__heading">Привет, Александр!</h1>
        <form className="profile__info">
          <div>
            <div className="profile__info-container">
              <p className="profile__info-label">Имя</p>
              <input className="profile__info-field" placeholder="Введите имя" />
            </div>
            <div className="profile__info-container">
              <p className="profile__info-label">E-mail</p>
              <input className="profile__info-field" placeholder="Укажите почту" />
            </div>
          </div>
          <div className="profile__info-buttons">
            <button type="submit" className="profile__info-button">Редактировать</button>
            <button type="button" className="profile__info-button profile__info-button_color_red profile__info-button_weight_middle">Выйти из аккаунта</button>
          </div>
        </form>
      </div>
    </main>
  );
}