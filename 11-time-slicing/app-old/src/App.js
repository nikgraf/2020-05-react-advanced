import React, { useState } from "react";
import remark from "remark";
import remark2react from "remark-react";
import { slowCalculation } from "./calculations";
import TextArea from "./TextArea";

function markdownToReact(text) {
  const t0 = performance.now();
  slowCalculation();
  const contents = remark()
    .use(remark2react)
    .processSync(text).contents;
  const t1 = performance.now();
  console.log(`markdownToReact: ${t1 - t0} ms`);
  return contents;
}

function App() {
  const [text, setText] = useState();

  return (
    <div style={{ display: "flex" }}>
      <TextArea
        value={text}
        onChange={value => {
          setText(value);
        }}
      />
      <div style={{ width: "50%" }}>{markdownToReact(text)}</div>
    </div>
  );
}

export default App;
