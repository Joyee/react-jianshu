import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './common/header'
import Home from './views/home'
import Detail from './views/detail'

function App () {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route exact path='/'><Home/></Route>
        <Route exact path='/detail'><Detail/></Route>
      </div>
    </Router>
  );
}

export default App;
