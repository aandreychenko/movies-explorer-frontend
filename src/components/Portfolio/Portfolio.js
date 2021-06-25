import React from "react";
import { Link } from "react-router-dom";
import signPath from "../../images/portfolio__sign.svg";

export default function Portfolio(props) {
  return (
    <div className="portfolio">
      <h2 className="portfolio__header">Портфолио</h2>
      <div className="portfolio__container">
        <div className="portfolio__container-item">
          <div className="portfolio__container-link">
            <Link to="#staticsite" className="portfolio__container-item-link">Статичный сайт</Link>
            <img className="portfolio__container-item-sign" src={signPath} alt="Стрелка" />
          </div>
          <div className="portfolio__container-link">
            <Link to="#staticsite" className="portfolio__container-item-link">Адаптивный сайт</Link>
            <img className="portfolio__container-item-sign" src={signPath} alt="Стрелка" />
          </div>
          <div className="portfolio__container-link">
            <Link to="#staticsite" className="portfolio__container-item-link">Одностраничное приложение</Link>
            <img className="portfolio__container-item-sign" src={signPath} alt="Стрелка" />
          </div>
        </div>
      </div>
    </div>
  );
}