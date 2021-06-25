import React from "react";

export default function Techs(props) {
  return (
    <div className="techs">
      <h2 className="techs__header">Технологии</h2>
      <div className="techs__container">
        <div className="techs__container-item">
          <h3 className="techs__container-item-header">7 технологий</h3>
          <p className="techs__container-item-paragraph">На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.</p>
          <div className="techs__info">
            <div className="techs__info-item">HTML</div>
            <div className="techs__info-item">CSS</div>
            <div className="techs__info-item">JS</div>
            <div className="techs__info-item">React</div>
            <div className="techs__info-item">Git</div>
            <div className="techs__info-item">Express.js</div>
            <div className="techs__info-item">MongoDB</div>
          </div>
        </div>
      </div>
    </div>
  );
}