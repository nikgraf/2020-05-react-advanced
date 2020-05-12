import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const TextArea: React.FC<Props> = (props) => {
  const textareaElement = React.useRef<HTMLTextAreaElement>(null);

  return (
    <textarea
      ref={textareaElement}
      value={props.value}
      onChange={(event) => {
        props.onChange(event.target.value);
      }}
    />
  );
};

export default TextArea;
