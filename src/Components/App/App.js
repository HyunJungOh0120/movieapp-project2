import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MainPage from '../Pages/MainPage';
import MoviePage from '../Pages/MoviePage';
import TvPage from '../Pages/TvPage';
import SearchPage from '../Pages/SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/">
          <MainPage />
        </Route>
        <Route exact path="/browse">
          <MainPage />
        </Route>
        <Route path="/movie">
          <MoviePage />
        </Route>
        <Route path="/tv">
          <TvPage />
        </Route>
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
