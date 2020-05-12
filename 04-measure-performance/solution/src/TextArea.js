import React, { useRef, useLayoutEffect } from "react";
import calculateNodeHeight from "./calculateNodeHeight";
import { sometimesSlowCalculation } from "./calculations";

function TextArea(props) {
  const textareaElement = useRef(null);

  // sometimesSlowCalculation();

  useLayoutEffect(() => {
    const t0 = performance.now();
    const height = calculateNodeHeight(textareaElement.current);
    textareaElement.current.style.height = `${height}px`;
    // sometimesSlowCalculation();
    const t1 = performance.now();
    console.log(`${t1 - t0} ms`);
  });

  return (
    <textarea
      ref={textareaElement}
      value={props.value}
      onChange={event => {
        props.onChange(event.target.value);
      }}
    />
  );
}

export default TextArea;
