import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function SavedMovies() {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList />
      <Navigation />
    </main>
  );
}