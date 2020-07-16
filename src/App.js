//Dependencies
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Componenets
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';

// Redux

//Styles
import './index.css';

// Store

function App() {
  useEffect(() => {
    document.title = 'SMU Jobs';
  });

  return (
    <Router>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
