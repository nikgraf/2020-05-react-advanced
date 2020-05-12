import React, { useState } from "react";
import remark from "remark";
// @ts-ignore
import remark2react from "remark-react";
import {
  unstable_LowPriority,
  unstable_runWithPriority,
  unstable_scheduleCallback,
} from "scheduler";
import { slowCalculation } from "./calculations";
import TextArea from "./TextArea";

function markdownToReact(text: string) {
  const t0 = performance.now();
  slowCalculation();
  // @ts-ignore
  const contents = remark().use(remark2react).processSync(text).result;
  const t1 = performance.now();
  console.log(`markdownToReact: ${t1 - t0} ms`);
  return contents;
}

function App() {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState<any>();

  function deferredPreviewUpdate(text: string) {
    console.log("Invoke deferredPreviewUpdate");
    unstable_runWithPriority(unstable_LowPriority, function () {
      unstable_scheduleCallback(unstable_LowPriority, function () {
        const content = markdownToReact(text);
        setPreview(content);
      });
    });
  }

  return (
    <div style={{ display: "flex" }}>
      <TextArea
        value={text}
        onChange={(value) => {
          setText(value);
          deferredPreviewUpdate(value);
        }}
      />
      {/* <div style={{ width: "50%" }}>{markdownToReact(text)}</div> */}
      <div style={{ width: "50%" }}>{preview}</div>
    </div>
  );
}

export default App;
