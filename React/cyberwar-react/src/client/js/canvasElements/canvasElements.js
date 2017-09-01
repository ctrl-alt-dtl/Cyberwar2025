import React, {Component} from 'react';
import {Layer, Stage, Group} from 'react-konva';

class CanvasElements extends Component {
  render() {
    return (
      <Stage width={this.props.width} height={this.props.height}>
        <Layer>
            <Group  width={this.props.width / 2}
                    height={this.props.height / 2}
                    x={this.props.width / 2}
                    y={this.props.height / 2}
                    offsetx={this.props.width / 2}
                    offsety={this.props.height / 2}
                    rotation={this.props.rotation}>
              {
                this.props.children
              }
            </Group>
          {
            this.props.children
          }
        </Layer>
      </Stage>
    );
  }
}

export default CanvasElements;
