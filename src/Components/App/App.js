import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPage from '../MainPage/MainPage';
import MoviePage from '../MoviePage/MoviePage';
import Navigation from '../Navigation/Navigation';
import TvPage from '../TvPage/TvPage';
import './App.css';

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
