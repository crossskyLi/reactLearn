import React, { Component } from 'react';

class RefCom extends Component {
  state = {
    count: 1
  };

  constructor(props) {
    super(props);
    this.count = 1;
  }

  add() {
    this.count += 1;
    this.setState({ count: this.count });
    // this.setState({ ...this.state });
  }

  render() {
    return <button onClick={this.add}>{this.count}</button>;
  }
}

export default RefCom;
