return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="App">
      <div className='page__content'>
        <div className="page">
          <Header />
          <Switch>
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
          <Footer />
        </div>
      </div>
    </div>
    </CurrentUserContext.Provider>
  )