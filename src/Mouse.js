import React, { Component } from "react";

class Mouse extends Component {
  state = { x: 0, y: 0 };

  onMouseMove = e => this.setState({ x: e.screenX, y: e.screenY });

  render() {
    return (
      <>
        {/* <div>
          x: {this.state.x} y: {this.state.y}
        </div> */}
        <div onMouseMove={this.onMouseMove}>{this.props.children}</div>
      </>
    );
  }
}

export default Mouse;
