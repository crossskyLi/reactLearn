import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    const {
      item,
      slot,
      children
    } = this.props;
    return (<li>
      {item * item}寫得按
      {slot}
      {children}
    </li>)
  }
}

export default ListItem;