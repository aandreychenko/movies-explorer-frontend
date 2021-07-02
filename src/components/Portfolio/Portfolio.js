import React from "react";
import signPath from "../../images/portfolio__sign.svg";

export default function Portfolio(props) {
  return (
    <section className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <div className="portfolio__container">
        <div className="portfolio__container-item">
          <div className="portfolio__container-link">
            <a href="https://github.com/aandreychenko/how-to-learn" className="portfolio__container-item-link">Статичный сайт</a>
            <img className="portfolio__container-item-sign" src={signPath} alt="Стрелка" />
          </div>
          <div className="portfolio__container-link">
            <a href="https://github.com/aandreychenko/russian-travel" className="portfolio__container-item-link">Адаптивный сайт</a>
            <img className="portfolio__container-item-sign" src={signPath} alt="Стрелка" />
          </div>
          <div className="portfolio__container-link">
            <a href="https://mesto-project.nomoredomains.club" className="portfolio__container-item-link">Одностраничное приложение</a>
            <img className="portfolio__container-item-sign" src={signPath} alt="Стрелка" />
          </div>
        </div>
      </div>
    </section>
  );
}