import React, { Component } from 'react';
import ToolTip from 'react-portal-tooltip';
import canvas from "../src/client/js/canvas/canvas"
import logo from './logo.svg';
import './App.css';

var NotificationSystem = require('react-notification-system');
var ReactToastr = require('react-toastr');
var {ToastContainer} = ReactToastr;

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="canvas">
          <canvas/>
        </div>
      </div>
    );
  }
}

export default App;