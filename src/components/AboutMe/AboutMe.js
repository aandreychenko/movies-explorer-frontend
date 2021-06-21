import React from "react";
import myPhotoPath from "../../images/portrait.jpg";

export default function AboutMe(props) {
  return (
    <div className="about-me">
      <div className="about-me__container">
        <h2 className="about-me__header">Студент</h2>
        <div className="about-me__container-item">
          <div className="about-me__subcontainer-item">
            <h3 className="about-me__container-item-header">Александр</h3>
            <p className="about-me__container-item-subheader">Фронтенд-разработчик, 33 года</p>
            <p className="about-me__container-item-paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
            <div  className="about-me__container-item-info">
              <p className="about-me__container-item-info-item">Facebook</p>
              <p className="about-me__container-item-info-item">Github</p>
            </div>
          </div>
          <div className="about-me__subcontainer-item">
            <img className="about-me__container-item-photo" src={myPhotoPath} alt="Портрет Александра Андрейченко" />
          </div>
        </div>
      </div>
    </div>
  );
}