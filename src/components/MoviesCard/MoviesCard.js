import React from "react";
import { Route, Switch } from 'react-router-dom';
import MovieStillPath from "../../images/Koktebel.jpg";

export default function MoviesCard() {
  return (
    <Switch>
      <Route path="/movies">
        <div className="movies-card">
          <img className="movies-card__still" src={MovieStillPath} />
          <div className="movies-card__info">
            <p className="movies-card__title">33 слова о дизайне</p>
            <button type="button" className="movies-card__button movies-card__button_type_saved" />
          </div>
          <p className="movies-card__timeline">1ч 42м</p>
        </div>
      </Route>
      <Route path="/saved-movies">
        <div className="movies-card">
          <img className="movies-card__still" src={MovieStillPath} />
          <div className="movies-card__info">
            <p className="movies-card__title">33 слова о дизайне</p>
            <button type="button" className="movies-card__button movies-card__button_type_delete" />
          </div>
          <p className="movies-card__timeline">1ч 42м</p>
        </div>
      </Route>
    </Switch>
  );
}