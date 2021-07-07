import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import MainPage from '../Pages/MainPage';

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
        <Route path="/search">
          <SearchPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
