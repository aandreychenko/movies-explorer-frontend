import React from 'react';
import { Link, Route } from 'react-router-dom';
import SearchForm from '../SearchForm/SearchForm';

export default function Movies() {
  return (
    <div className="movies">
      <SearchForm />
    </div>
  );
}