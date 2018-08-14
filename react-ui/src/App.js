import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Dashboard from './_pages/Dashboard';
import Landing from './_pages/Landing';

import { appID } from './config/keys';
import AuthReq from './_components/AuthReq'
import NoAuthReq from './_components/NoAuthReq'
// import history from './_helpers/history';
import './App.css';

class App extends Component {

  componentDidMount() {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: appID,
        cookie: true,
        xfbml: true,
        version: 'v3.1'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }
      js = d.createElement(s); js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  render() {
    return (
      <div id="App">
        <Router>
          <div>
            <Route exact path="/" component={NoAuthReq(Landing)} />
            <Route path="/dashboard" component={AuthReq(Dashboard)} />
          </div>
        </Router>
      </div>
    )
  }
}

export default App;
