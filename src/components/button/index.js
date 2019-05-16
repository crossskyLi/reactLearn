import React, { Component } from 'react';
import style from './style.module.scss'
class Button extends Component {
  render() {
    return <button onClick={this.props.onClick} className={style['rc-button']}>{this.props.children}</button>
  }
}

export default Button;