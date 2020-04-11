import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Header from './common/header'
import Home from './views/home'
// import Detail from './views/detail'
import Login from './views/login'
import Write from './views/write'

const Detail = React.lazy(() => import('./views/detail'))

function App () {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path='/' exact component={Home}></Route>
        <Route path='/login' exact component={Login}></Route>
        <React.Suspense fallback={<div>loading</div>}>
          <Route path='/detail/:id' exact component={Detail}></Route>
        </React.Suspense>
        <Route path='/write' exact component={Write}></Route>
      </div>
    </Router>
  );
}

export default App;
