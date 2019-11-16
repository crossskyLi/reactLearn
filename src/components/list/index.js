import React, { Component } from 'react';
import ListItem from './listItem';
import SlotCom from './slot';

class List extends Component {
  render() {
    return (
      <ul>
        {/* 插槽 */}
        {this.props.dataList.map(item => (
          <ListItem
            key={item}
            item={item}
            slot={<SlotCom>sss</SlotCom>}
          ></ListItem>
        ))}
        {/* 插槽 */}
        {this.props.dataList.map(item => (
          <ListItem key={item} item={item}>
            <SlotCom></SlotCom>
          </ListItem>
        ))}
      </ul>
    );
  }
}

export default List;
