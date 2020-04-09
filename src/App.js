import React from 'react';
import './App.css';
import List from './components/list'
import Button from './components/button'
import FuncCom from './components/funcCom'
import RefDemo from './components/refDemo'
import axios from 'axios'
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

    this.getData()
  }

  getData = () => {
    const host = "http://127.0.0.1:3400"

    const api = axios.create({
      timeout: 60000,
      baseURL: "//" + host,
    });

    const params = {
      a: [
        // 1,
        // { dd: 11 },
        // { a: "abckksdj大家看见", abc: [] },
        [
          { a: 1, b: { abccdd: 1 } },
          ['abckk']
        ]
      ],
      b: { c: 3 }
      // b: {
      //   c: 1,
      //   aa: [
      //     1,
      //     3,
      //     { a: 'abcd' }
      //   ],
      //   d: { a: 1 }
      // }
    }
    //请求数据函数
    api.get('/getUserList', { params }).then((res) => {
      console.log(res)
    })
  }
}

export default App;
