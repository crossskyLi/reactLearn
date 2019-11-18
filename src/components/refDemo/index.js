import React, { Component } from 'react';
import MyRef from './ref';

class RefDemo extends Component {

  doAdd = () => {
    // this.refs.input.focus();
    this.refs.myRef.add();
  }

  render() {
    return (
      <div>
        <input ref="input"></input>
        <MyRef ref="myRef"></MyRef>
        <button onClick={this.doAdd}>点一下</button>
      </div>
    );
  }
}
export default RefDemo;
