/**
 * MAIN BOARD
 * Requires:
 *    ../domainLibs/konvaConfigSettings.js
 */
import React, { Component } from 'react';
import {RegularPolygon} from 'react-konva';

var BASE_BOARD_WIDTH = 1280;
var BASE_BOARD_HEIGHT = 960;

class mainBoard extends Component{
  render(){
    return (
      <RegularPolygon
        ref="centerHex"
        x={BASE_BOARD_WIDTH.width() / 2}
        y={BASE_BOARD_HEIGHT.height() / 2}
        sides={6}
        radius={BASE_BOARD_WIDTH / 38}
        fill='white'
        stroke='black'
        strokeWidth={2}
        rotation={90}/>
    );
  }
}

export default mainBoard;