import React from "react";
import MoviesCard from '../MoviesCard/MoviesCard';

export default function MoviesCardList() {
  return (
    <div className="movies-card-list">
      <div className="movies-card-list__container">
        <div className="movies-card-list__grid">
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
          <MoviesCard />
        </div>
        <button type="button" className="movies-card-list__cut">
          <p className="movies-card-list__cut-text">Ещё</p>
        </button>
      </div>
    </div>
  );
}