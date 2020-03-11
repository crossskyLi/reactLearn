import React, { useState } from 'react';
import Button from '../button';

function FuncCom(props) {
  const { doSomething } = props;

  doSomething(props)

  const [count, setCount] = useState(0);

  const handle = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <header>{count}</header>
      <Button onClick={handle}>点击 +1</Button>
    </div>
  );
}

export default FuncCom