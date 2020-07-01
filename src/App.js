import React, { useState, useEffect } from "react";

function App() {
  const [userText, setUserText] = useState("");

  const handleUseKeyPress = (event) => {
    const { key, keyCode } = event;
    if (keyCode === 32 || (keyCode >= 65 && keyCode <= 90)) {
      setUserText(`${userText}${key}`);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleUseKeyPress);
    return () => {
      window.removeEventListener("keydown", handleUseKeyPress);
    };
  });
  return (
    <div>
      <h1>Feel free to type some text, it will show below</h1>
      <blockquote>{userText}</blockquote>
    </div>
  );
}

export default App;
