import React, { useRef, useLayoutEffect } from "react";
import calculateNodeHeight from "./calculateNodeHeight";

function TextArea(props) {
  const textareaElement = useRef(null);

  useLayoutEffect(() => {
    const height = calculateNodeHeight(textareaElement.current);
    textareaElement.current.style.height = `${height}px`;
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
