import React from 'react';
import { Link, Route } from 'react-router-dom';

export default function SearchForm() {
  return (
    <div className="search-form">
      <div className="search-form__container">
        <div className="search-form__search-field-container">
          <input type="search" className="search-form__search-field" placeholder="Фильм" />
          <button type="submit" className="search-form__submit"></button>
        </div>
        <label for="short-films" className="search-form__label">
          <span className="search-form__label-text">Короткометражки</span>
          <input type="checkbox" name="extra-option" id="short-films" className="search-form__item search-form__item_el_extra-options" value="bold-heading" />
          <span className="search-form__pseudo-item search-form__pseudo-item_type_checkbox"></span>
        </label>
      </div>
    </div>
  );
}