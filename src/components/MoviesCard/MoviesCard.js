import React from "react";
import { Route, Switch } from 'react-router-dom';
import MovieStillPath from "../../images/Koktebel.jpg";

export default function MoviesCard() {
  return (
    <Switch>
      <Route path="/movies">
        <div className="movies-card">
          <img className="movies-card__still" src={MovieStillPath} alt="Кадр из фильма" />
          <div className="movies-card__info">
            <div className="movies-card__info-title">
              <p className="movies-card__title">33 слова о дизайне</p>
              <button type="button" className="movies-card__button movies-card__button_type_saved" />
            </div>
            <p className="movies-card__info-timeline">1ч 42м</p>
          </div>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="movies-card">
          <img className="movies-card__still" src={MovieStillPath} alt="Кадр из фильма" />
          <div className="movies-card__info">
            <div className="movies-card__info-title">
              <p className="movies-card__title">33 слова о дизайне</p>
              <button type="button" className="movies-card__button movies-card__button_type_saved" />
            </div>
            <p className="movies-card__info-timeline">1ч 42м</p>
          </div>
        </div>
      </Route>
    </Switch>
  );
}