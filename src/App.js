import React from 'react';
import Home from './components/Home';
import './App.scss';
import Header from './components/Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact>
          <Home/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
