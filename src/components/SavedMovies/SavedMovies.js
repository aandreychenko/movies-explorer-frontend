import React from 'react';
import { Link, Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies() {
  return (
    <div className="saved-movies">
      <SearchForm />
      <MoviesCardList />
    </div>
  );
}