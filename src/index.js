import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './Components/App/App';
import { MainProvider } from './Components/MainProvider';
import './fontawesome';
import './index.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <MainProvider>
      <Router>
        <App />
      </Router>
    </MainProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
