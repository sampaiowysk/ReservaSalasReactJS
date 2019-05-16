import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import './app.css';
import Autenticacao from './Autenticacao/Autenticacao';
import Home from './Home/Home';
import Menu from './Home/Menu';
import Admin from './Home/Admin';

class App extends Component {
  loadGoogleApi() {
    const script = document.createElement("script");
    script.src = "https://apis.google.com/js/client.js";

    script.onload = () => {
      window.gapi.load('client', () => {
        window.gapi.client.init({
          apiKey: 'AIzaSyCh0DfhONP-ElWD3dDNCiZAaEQ-D-mUwuw',
          clientId: '265362638456-vmqs7h6sd392u8h5cldt80jnb9miu8fg.apps.googleusercontent.com',
          discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
          scope: "https://www.googleapis.com/auth/calendar.readonly"
        });
      });
    };

    document.body.appendChild(script);
  }

  render() {
    this.loadGoogleApi();
    return (
      <div>
         <Router>
           <div>
            <Route exact path="/" component={Autenticacao} />
            <Route path="/menu" component={Menu} />
            <Route path="/home" component={Home} />
            <Route path="/admin" component={Admin} />
           </div>
        </Router>
      </div>
    )
  }
}

export default App;