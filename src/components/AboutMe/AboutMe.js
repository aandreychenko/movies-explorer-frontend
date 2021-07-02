import React from "react";
import myPhotoPath from "../../images/portrait.jpg";

export default function AboutMe(props) {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__header">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__container-item">
          <div className="about-me__subcontainer-item about-me__info">
            <h3 className="about-me__container-item-header">Александр</h3>
            <p className="about-me__container-item-subheader">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__container-item-paragraph">
              Родился в Белоруссии, сменил много квартир и несколько городов, жил на три города одновременно. 6 лет живу в Москве.<br />Получил высшее образование в ПГУПСе на кафедре мостов и тоннелей. 7 лет работал по специальности.<br />Люблю фотографировать, преподаю фотографию в РУДН.<br />Год назад решил стать фронтенд-разработчиком. Прошел курсы Яндекса, поработал над приложением для сбора статистики по музыкальным сервисам.</p>
            <div  className="about-me__container-item-info">
              <a href="https://www.facebook.com/alexander.andreychenko" className="about-me__container-item-info-item">Facebook</a>
              <a href="https://github.com/aandreychenko" className="about-me__container-item-info-item">Github</a>
            </div>
          </div>
          <div className="about-me__subcontainer-item about-me__photo">
            <img className="about-me__container-item-photo" src={myPhotoPath} alt="Портрет Александра Андрейченко" />
          </div>
        </div>
      </div>
    </section>
  );
}