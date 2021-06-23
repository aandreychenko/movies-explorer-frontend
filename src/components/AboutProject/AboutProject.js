import React from "react";

export default function AboutProject(props) {
  return (
    <div className="about-project">
      <div className="about-project__container">
        <h2 className="about-project__header">О проекте</h2>
        <div className="about-project__subcontainer-item">
          <div className="about-project__container-item">
            <h3 className="about-project__container-item-header">Дипломный проект включал 5 этапов</h3>
            <p className="about-project__container-item-paragraph">Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="about-project__container-item">
            <h3 className="about-project__container-item-header">На выполнение диплома ушло 5 недель</h3>
            <p className="about-project__container-item-paragraph">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="about-project__info">
          <p className="about-project__info-item about-project__info-item_bg-color_green">1 неделя</p>
          <p className="about-project__info-item about-project__info-item_bg-color_gray">4 недели</p>
          <p className="about-project__info-item about-project__info-item_color_gray">Back-end</p>
          <p className="about-project__info-item about-project__info-item_color_gray">Front-end</p>
        </div>
      </div>
    </div>
  );
}