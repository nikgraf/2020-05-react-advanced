import React, { useRef, useLayoutEffect } from "react";
import calculateNodeHeight from "./calculateNodeHeight";
// import { sometimesSlowCalculation } from "./calculations";

function TextArea(props) {
  console.log("TextArea render");
  const textareaRef = useRef(null);

  // sometimesSlowCalculation();

  useLayoutEffect(() => {
    const t0 = performance.now();
    const height = calculateNodeHeight(textareaRef.current);
    textareaRef.current.style.height = `${height}px`;
    const t1 = performance.now();
    console.log(`calculateNodeHeight: ${t1 - t0} ms`);
  });

  return (
    <textarea
      // style={{ height }}
      ref={textareaRef}
      value={props.value}
      onChange={event => {
        props.onChange(event.target.value);
      }}
    />
  );
}

export default TextArea;
