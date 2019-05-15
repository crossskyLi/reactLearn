import React, { Component } from 'react';

class ListItem extends Component {
  constructor(props) {
    super(props);
    console.log(this.props)
  }
  render() {
    const { item } = this.props;
    return (<li>
      {item * item}
    </li>)
  }
}

export default ListItem;