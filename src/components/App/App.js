import React from 'react';
import { Route, Switch, Redirect, useHistory } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Footer from '../Footer/Footer';

export default function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route exact path="/" >
          <Main />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
      </Switch>
      <Footer />
      {/* <Switch>
        <Route exact path="/" >
          <Promo />
        </Route>
        <Route path="/movies">
          <Movies />
        </Route>
        <Route path="/saved-movies">
          <SavedMovies />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/signin">
          <Login />
        </Route>
        <Route path="/signup">
          <Register />
        </Route>
      </Switch>
      <Footer /> */}
    </div>
  )
}