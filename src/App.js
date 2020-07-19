//Dependencies
import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { getValidToken } from './api/token';
//Componenets
import Home from './components/Home';
import Login from './components/Login';
import NavBar from './components/NavBar';
import JobsList from './components/JobsList';

// Redux
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';
//Styles
import './index.css';
import NewJob from './components/NewJob';

// Store
const store = configureStore();
class App extends Component {
  componentDidMount() {
    document.title = 'SMU Jobs';
  }

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
            <Route
              path='/login'
              render={() =>
                !!getValidToken() ? <Redirect to='/' /> : <Login />
              }
            ></Route>
            <Route path='/new'>
              <NewJob />
            </Route>
            <Route exact path='/jobs'>
              <JobsList />
            </Route>
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
