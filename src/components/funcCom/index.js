import React, { useState } from 'react';
import Button from '../button'
export default function FuncCom() {
  const [count, setCount] = useState(0);
  return <div>
    <header>{count}</header>
    <Button onClick={() => { setCount(count + 1) }}>点击 +1</Button>
  </div>
}