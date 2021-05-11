import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Streamers from './Streamers';
import BLM from './components/BLM';

// CSS:
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './style.css';

// Components:
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const firebase = fetch("https://djinnjadksnkjadsjknsadnjkdsa-default-rtdb.firebaseio.com/.json").then(d => d.json());

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <BLM />
      <Switch>
        <Route path="/streamers" exact={true}>
          <Navbar />
        </Route>
        <Route path="/">
          <Navbar mainSite={true} />
        </Route>
      </Switch>
      <Switch>
        <Route path="/streamers" exact={true}>
          <Streamers firebase={firebase} />
        </Route>
        <Route path="/">
          <App firebase={firebase} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
