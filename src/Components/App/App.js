import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MainPage from '../Pages/MainPage';
import MoviePage from '../Pages/MoviePage';
import TvPage from '../Pages/TvPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/browse">
          <MainPage />
        </Route>
        <Route exact path="/browse/movie">
          <MoviePage />
        </Route>
        <Route exact path="/browse/tv">
          <TvPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
