import React from "react";

const InputElement = ({inputValue, onInput}) => {
  

  return (
    <input
      type="text"
      value={inputValue}
      onChange={onInput}
      placeholder="Enter your name here..."
    />
  );
};

export default InputElement;
