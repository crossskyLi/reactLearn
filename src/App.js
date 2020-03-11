import React from 'react';
import './App.css';
import List from './components/list'
import Button from './components/button'
import FuncCom from './components/funcCom'
import RefDemo from './components/refDemo'
class App extends React.Component {

  funcMsg = "函数参数"

  constructor() {
    super()
    this.state = {
      dataList: []
    }
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <FuncCom msg={this.funcMsg} doSomething={this.doSomething}></FuncCom>
          <Button onClick={this.handleClick}>add item</Button>
          <List dataList={this.state.dataList}></List>
          <RefDemo></RefDemo>
        </header>
      </div>
    );
  }

  doSomething = (msg) => {
    // console.log(msg)
  }

  handleClick = (event) => {
    const dataList = this.state.dataList.slice();
    dataList.push(!dataList[0] ? 1 : dataList[dataList.length - 1] + 1)
    this.setState({ dataList })
  }
}

export default App;
