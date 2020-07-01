import React, { useState, useEffect } from "react";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`I'm inside the useEffect hook, current count is ${count}`);
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

export default App;
