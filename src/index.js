import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

import App from './App';
import Streamers from './Streamers';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
// eslint-disable-next-line
import firebase from 'firebase/app';
import 'firebase/database';

firebase.initializeApp({
  databaseURL: "https://djinnjadksnkjadsjknsadnjkdsa-default-rtdb.firebaseio.com"
});

ReactDOM.render(
  <React.StrictMode>
    <Router>
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
