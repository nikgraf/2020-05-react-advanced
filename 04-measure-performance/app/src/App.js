import React, { useState } from "react";
import TextArea from "./TextArea";
import Footer from "./Footer";
import About from "./About";

function App() {
  const [text, setText] = useState();
  return (
    <div>
      <TextArea
        value={text}
        onChange={value => {
          setText(value);
        }}
      />
      <About />
      <Footer />
    </div>
  );
}

export default App;
