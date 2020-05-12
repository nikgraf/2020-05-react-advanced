import React, { useState } from "react";
import TextArea from "./TextArea";
import Header from "./Header";

function App() {
  const [text, setText] = useState();
  return (
    <div>
      <Header />
      <TextArea
        value={text}
        onChange={value => {
          setText(value);
        }}
      />
    </div>
  );
}

export default App;
