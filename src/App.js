import React from 'react';
import './App.css';
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import User from './components/users/User'
import Alert from './components/utilities/Alert'
import About from  './components/pages/About'
import Home from './components/pages/Home'
import NotFound from './components/pages/NotFound'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

const App = () => {
  return (
    <GithubState>
      <AlertState>
      <Router>
        <div>
          <Navbar />
          <Alert />
          <div className='container'>
            <Switch>
              <Route exact path= '/' component ={Home} />
              <Route exact path= '/about' component ={About} />
              <Route exact path= '/user/:login' component = {User} />
              <Route component ={NotFound} />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
      </AlertState>
    </GithubState>
  );
}

export default App;
