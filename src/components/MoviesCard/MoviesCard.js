import React from "react";
import MovieStillPath from "../../images/portrait.jpg";

export default function MoviesCard() {
  return (
    <div className="movies-card">
      <img className="movies-card__still" src={MovieStillPath} />
      <div className="movies-card__info">
        <p className="movies-card__title">33 слова о дизайне</p>
        <button type="button" className="movies-card__like" />
      </div>
      <p className="movies-card__timeline">1ч 42м</p>
    </div>
  );
}