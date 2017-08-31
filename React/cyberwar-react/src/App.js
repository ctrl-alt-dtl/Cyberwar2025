import React, { Component } from 'react';
import {Stage, Layer, Group} from 'react-konva';
import logo from './logo.svg';
import './App.css';

var BASE_BOARD_WIDTH = 1280;
var BASE_BOARD_HEIGHT = 960;
var DOMAIN_LAYER_BOARD_ROTATION = 0;

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
        <Group ref="domainsGroup" width={BASE_BOARD_WIDTH}
               height={BASE_BOARD_HEIGHT}
               x={BASE_BOARD_WIDTH / 2}
               y={BASE_BOARD_HEIGHT / 2}
               offsetx={BASE_BOARD_WIDTH / 2}
               offsety={BASE_BOARD_HEIGHT / 2}
               rotation={DOMAIN_LAYER_BOARD_ROTATION}>
          <Stage ref="stage" width={BASE_BOARD_WIDTH} height={BASE_BOARD_HEIGHT}>
            <Layer ref="bgLayer">
            </Layer>
            <Layer ref="bgItems">
            </Layer>
            <Layer ref="domainsLayer">
            </Layer>
            <Layer ref="toolTipLayer">
            </Layer>
          </Stage>
        </Group>
      </div>


    );
  }
}

export default App;
