import "./index.css";
import React from "react";
//import { ReactDOM } from "react-dom/client";
import { useState } from "react";

function App() {
  const [num, setNum] = useState([1, 2, 3]);

  const addNum = () => {
    const newNum = Math.max(...num) + 1;
    setNum([...num, newNum]);
  };

  return (
    <div className="App">
      <ul>
        <ListItems num={num} addNum={addNum} />
      </ul>
    </div>
  );
}

export default App;

function ListItems({ num, addNum }) {
  return (
    <>
      <button onClick={addNum}>Add Item</button>
      {num.map((int) => (
        <li key={int}>{int}</li>
      ))}
    </>
  );
}
