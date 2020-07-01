import React, { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const incrementHandler = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrementHandler = () => {
    setCount((prevCount) => prevCount - 1);
  };

  const resetHandler = () => {
    setCount(0);
  };

  return (
    <div className='App'>
      <button onClick={incrementHandler}>increment</button>
      <button onClick={decrementHandler}>decrement</button>
      <button onClick={resetHandler}>reset</button>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
