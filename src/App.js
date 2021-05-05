import React from 'react';
import './App.css'
import Home from './Home'
import Details from './Details'
import { Route, Switch } from 'react-router'
import { BrowserRouter as Router } from 'react-router-dom'

function App(){
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/home" component={Home}/>
          <Route path="/details" component={Details}/>
        </Switch>
      </Router>
    </div>
  );
};

export default App;