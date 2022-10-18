import React, { useState } from "react";
import Counter from "./Components/Counter";

const App = () => {
  const [inpValue, setInpValue] = useState("");
  return (
    <div>
      {/* <Counter /> */}
      <h1>{inpValue}</h1>
      <input type="text" onChange={e => setInpValue(e.target.value)} />
    </div>
  );
};

export default App;
