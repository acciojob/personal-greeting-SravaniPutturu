
import React from "react";
import './../styles/App.css';

const App = () => {
  return (
    <div>
      <label htmlFor="name">Enter your name:</label>
      <input id="name" type="text" value={name} onChange={handleChange} />
      {name && <p>Hello, {name}!</p>}
    </div>
  )
}

export default App
