import React from "react";
import { useState } from "react";
import { useReducer } from "react";
import { act } from "react-dom/test-utils";

const App = () => {
  const init_state = {
    count: 0,
    inpValue: "",
  };

  function reducer(prevState, action) {
    switch (action.type) {
      case "Count_Dec":
        return { ...prevState, count: action.payload };
      case "Count_Inc":
        return { ...prevState, count: action.payload };
      case "Inp_Val":
        return { ...prevState, inpValue: action.payload };
      default:
        return prevState;
    }
  }

  const [state, dispatch] = useReducer(reducer, init_state);

  function decrement() {
    let action = {
      type: "Count_Dec",
      payload: state.count - 1,
    };
    dispatch(action);
  }

  function increment() {
    let action = {
      type: "Count_Inc",
      payload: state.count + 1,
    };
    dispatch(action);
  }

  function handleInp(val) {
    let action = {
      type: "Inp_Val",
      payload: val,
    };
    dispatch(action);
  }

  return (
    <div>
      <h1>Счетчик: {state.count}</h1>
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <br />
      <h2>{state.inpValue}</h2>
      <input onChange={e => handleInp(e.target.value)} type="text" />
    </div>
  );
};

export default App;
