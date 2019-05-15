import React, { Component } from 'react';
import ListItem from './listItem';

class List extends Component {
  constructor(props) {
    super(props)
    console.log(props)
  }
  render() {
    return (<ul>
      {
        this.props.dataList.map(item =>
          <ListItem key={item} item={item}></ListItem>)
      }
    </ul>);
  }
}

export default List;