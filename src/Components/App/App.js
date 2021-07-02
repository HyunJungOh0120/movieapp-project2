import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Navigation from '../Navigation/Navigation';
import MainPage from '../MainPage/MainPage';
import MoviePage from '../MoviePage/MoviePage';
import TvPage from '../TvPage/TvPage';

// Font Awesome
library.add(faSearch);

function App() {
  return (
    <div className="App">
      <Navigation />
      <MainPage />

      <Switch>
        <Route exact path="/browse" component={MainPage} />

        <Route path="/browse/movie" component={MoviePage} />

        <Route path="/browse/tv" component={TvPage} />
      </Switch>
    </div>
  );
}

export default App;
