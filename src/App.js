import React, { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`I'm inside the useEffect hook, current count is ${count}`);
    return () => {
      console.log(`count: ${count} - I am used to remove anything that was setup above`);
    };
  }, [count]);

  const incrementHandler = () => setCount((prevCount) => prevCount + 1);
  const decrementHandler = () => setCount((prevCount) => prevCount - 1);

  return (
    <div className='App'>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <h1>{count}</h1>
    </div>
  );
}

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button onClick={() => setVisible((prevCount) => !prevCount)}>Show/Hide</button>
      {visible && <Counter />}
    </div>
  );
}

export default App;
