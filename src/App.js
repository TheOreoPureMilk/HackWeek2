import React from 'react';
import './App.css';
import 'antd/dist/antd.css'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Login from './pages/login/Login'
import Register from './pages/register/Register';
import Mine from './pages/mine/Mine'
import Retrieve from './pages/retrieve/Retrieve'


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Mine />
          </Route>
          <Route path="retrieve">
            <Retrieve />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
