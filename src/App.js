import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles/global';

import AppProvider from './hooks/index';

import Grass from './pages/Grass'
import Psychic from './pages/Psychic'
import Home from './pages/Home'

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/grass" exact component={Grass}/>
          <Route path="/psychic" exact component={Psychic}/>
        </Switch>
      </Router>
      <GlobalStyle/>
    </AppProvider>
  );
}

export default App;
