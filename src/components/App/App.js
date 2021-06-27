import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Movies from '../Movies/Movies';
import Profile from '../Profile/Profile';
import Register from '../Register/Register';
import SavedMovies from '../SavedMovies/SavedMovies';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import Preloader from '../Preloader/Preloader';
import Navigation from '../Navigation/Navigation';

export default function App() {
  return (
    <div className="app">
      <Switch>
        <Route exact path="/" >
          <Header />
          <Main />
          <Footer />
        </Route>
        <Route path="/movies">
          <Header />
          <Movies />
          <Footer />
        </Route>
        <Route path="/saved-movies">
          <Header />
          <SavedMovies />
          <Footer />
        </Route>
        <Route path="/profile">
          <Header />
          <Profile />
        </Route>
        <Route path="/signup">
          <Header />
          <Register />
        </Route>
        <Route path="/signin">
          <Header />
          <Login />
        </Route>
        <Route path="/navigation">
          <Navigation />
        </Route>
        <Route path="/*">
          <NotFound />
        </Route>
      </Switch>
      <Preloader />
    </div>
  )
}