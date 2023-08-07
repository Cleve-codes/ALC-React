import "./index.css";
import { useState } from "react";
import InputElement from "./InputElement";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [historyList, setHistoryList] = useState([]);

  const onInput = (e) => {
    setInputValue(e.target.value);
    setHistoryList([...historyList, e.target.value]);
  };
  return (
    <div className="App">
      <InputElement inputValue={inputValue} onInput={onInput} />
      <br></br>
      <span>
        {inputValue}
        <hr />
      </span>
      <ul>
        {historyList.map((item, i) => (
          <div key={i}>{item}</div>
        ))}
      </ul>
    </div>
  );
}

export default App;
