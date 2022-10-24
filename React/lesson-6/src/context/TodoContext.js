import axios from "axios";
import React, { createContext, useEffect, useState } from "react";
const API = " http://localhost:8000/tasks";

export const taskContext = createContext();

const TodoContextProvider = ({ children }) => {
  //Create Task
  async function addTask(obj) {
    try {
      await axios.post(API, obj);
    } catch (e) {
      return e;
    }
    readTask();
  }

  //Read Task
  const [taskArr, setTaskArr] = useState([]);

  async function readTask() {
    const { data } = await axios(API);
    setTaskArr(data);
  }

  const cloud = {
    addTask,
    readTask,
    taskArr,
  };
  return <taskContext.Provider value={cloud}>{children}</taskContext.Provider>;
};

export default TodoContextProvider;
