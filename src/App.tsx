import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Navigation from './modules/navigation/Navigation';
import './App.css';

function App() {

  const history = createBrowserHistory();
  return (
    <BrowserRouter>
      <Navigation history={history} />
    </BrowserRouter>
  );
}

export default App;
