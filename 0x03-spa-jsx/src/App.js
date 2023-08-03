import "./index.css";
import React from "react";
//import { ReactDOM } from "react-dom/client";
import { useState } from "react";

function App() {
  const [num, setNum] = useState([1, 2, 3]);

  const addNum = (incrementValue) => {
    const newNum = Math.max(...num) + incrementValue;
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
  const increment = 1;
  return (
    <>
      <button onClick={() => addNum(increment)}>Add Item</button>
      {num.map((int) => (
        <li key={int}>{int}</li>
      ))}
    </>
  );
}
