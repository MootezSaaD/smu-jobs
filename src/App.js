//Dependencies
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import login from './api/login';
//Componenets
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';

// Redux
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
//Styles
import './index.css';

// Store
const store = configureStore();
class App extends Component {
  render() {
    console.log(store);
    return (
      <Provider store={store}>
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
      </Provider>
    );
  }
}

export default App;
