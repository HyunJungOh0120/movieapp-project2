import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navigation from '../Navigation/Navigation';
import DetailPage from '../Pages/DetailPage';
import GenrePage from '../Pages/GenrePage';
import MainPage from '../Pages/MainPage';
import SearchPage from '../Pages/SearchPage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <div>
        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          <Route exact path="/browse">
            <MainPage />
          </Route>
          <Route exact path="/genre">
            <GenrePage />
          </Route>
          <Route path="/search">
            <SearchPage />
          </Route>
          <Route path="/detail">
            <DetailPage />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
