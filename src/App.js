import React from 'react';
import './App.css';
import List from './components/list'
import Button from './components/button'
class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <List dataList={[1,2,3]}></List>
          <Button></Button>
        </header>
      </div>
    );
  }
}

export default App;
