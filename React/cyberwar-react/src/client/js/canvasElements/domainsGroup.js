import React, {Component} from 'react';
import {Layer, Group} from 'react-konva';

class DomainsGroup extends Component {
  render() {
    return (
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
      </Layer>
    );
  }
}

export default DomainsGroup;
