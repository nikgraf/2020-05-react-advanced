import React, { useRef } from "react";

function Input() {
  const inputElement = useRef(null);

  const onButtonClick = () => {
    console.log("inputElement ref:", inputElement);
    inputElement.current.focus();
  };

  return (
    <div>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </div>
  );
}

export default Input;
