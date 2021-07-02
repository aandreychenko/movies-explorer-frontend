import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import Navigation from '../Navigation/Navigation';
import MoviesCardList from '../MoviesCardList/MoviesCardList';

export default function Movies() {
  return (
    <main className="movies">
      <SearchForm />
      <MoviesCardList />
      <Navigation />
    </main>
  );
}