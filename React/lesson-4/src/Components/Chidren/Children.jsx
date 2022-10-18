import React, { useEffect, useState } from "react";

const Children = () => {
  const [state, setState] = useState(0);
  const [state1, setState1] = useState(0);
  // setInterval(() => {
  //   setState(prev => prev++);
  // }, 1000);

  function func(name) {
    console.log(name);
  }

  useEffect(() => {
    // func(prompt("Enter your name: "));
    alert("Hello Zuhra!");
  }, [state]);

  return (
    <div>
      Timer: {state} <br />
      <button onClick={() => setState(prev => prev + 1)}>Push</button>
      <br />
      Timer: {state1} <br />
      <button onClick={() => setState1(prev => prev + 1)}>Push</button>
    </div>
  );
};

export default Children;
