import React, { useContext, useEffect } from "react";
import { taskContext } from "../../context/TodoContext";

const ReadTask = () => {
  const { readTask, taskArr, deleteTask } = useContext(taskContext);
  useEffect(() => {
    readTask();
  }, []);
  // console.log();
  return (
    <ul>
      {taskArr.map((item, index) => (
        <>
          <li key={index}>{item.task}</li>
          <button onClick={() => deleteTask()}>delete</button>
        </>
      ))}
    </ul>
  );
};

export default ReadTask;
