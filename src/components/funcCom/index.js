import React, { useState } from 'react';
import Button from '../button';
console.log(Object.getOwnPropertyDescriptors(React));
export default function FuncCom() {
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
