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
import Library from './pages/librarys/Library';
import Tree from './pages/tree/Tree'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="/register" exact>
            <Register />
          </Route>
          <Route path="/retrieve" exact>
            <Retrieve />
          </Route>
          <Route path="/tree" exact>
            <Tree />
          </Route>
          <Route path="/" exact>
            <Mine />
          </Route>
          <Route path="/library" exact>
            <Library />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
