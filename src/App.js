import React, { useState } from "react";

function App() {
  const [activated, setActivated] = useState(false);
  const buttonText = activated ? "Active" : "Inactive";

  const clickHandler = () => {
    setActivated(!activated);
  };
  return (
    <div className='App'>
      <h1>Welcome to the course</h1>
      <button onClick={clickHandler}>{buttonText}</button>
    </div>
  );
}

export default App;
